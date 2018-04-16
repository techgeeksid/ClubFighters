import expectThrow from "../helpers/expectThrow";

var Club = artifacts.require('Club');
var Fight = artifacts.require('Fight');

var instance;

contract("Club contract", async (accounts) => {
  describe("#createFight", async () => {
    let player = accounts[0];

    before(async () => {
      instance = await Club.deployed();
      await instance.createPlayer("Foo Bar", { from: player });
    });

    it("creates a new fight and registers it", async () => {
      let tx = await instance.createFight({ from: player });

      let { _id, _address } = tx.logs[0].args;
      assert.equal(_id, 0);

      let fight = await Fight.at(_address);

      let playerLeft = await fight.playerLeft.call();
      assert.equal(playerLeft, player);

      let registered = await instance.registeredFights.call(_address);
      assert.isTrue(registered);
    });

    it('makes the creator "playing"', async () => {
      let [ , playing ] = await instance.players.call(player);
      assert.isTrue(playing);
    });

    it("doesn't allow to create another fight", async () => {
      await expectThrow(async () => {
        await instance.createFight({ from: player });
      })
    });
  });
});
