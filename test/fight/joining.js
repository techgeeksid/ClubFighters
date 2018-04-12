import expectThrow from '../helpers/expectThrow';

var Fight = artifacts.require("Fight");

contract("Fight contract", async (accounts) => {
  describe("#join", async () => {
    it("assigns sender to player2 when joined", async () => {
      let instance = await Fight.new();
      let joiningPlayer = accounts[1];

      await instance.join({ from: joiningPlayer });
      let player2 = await instance.player2();
      assert.equal(player2, joiningPlayer);
    });

    it("starts game when player2 joined", async () => {
      let instance = await Fight.new();
      await instance.join({ from: accounts[1] });

      let started = await instance.started();
      assert.isTrue(started);
    });

    it("doesn't allow to join when started", async () => {
      let instance = await Fight.new();
      await instance.join({ from: accounts[1] });

      await expectThrow(async () => {
        await instance.join({ from: accounts[2] });
      });
    });

    it("doesn't allow creator to play with himself", async () => {
      let instance = await Fight.new();

      await expectThrow(async () => {
        await instance.join({ from: accounts[0] });
      });
    });
  })
});
