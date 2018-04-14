import expectThrow from "../helpers/expectThrow";

var Club = artifacts.require('Club');

var instance;

contract("Club contract", async (accounts) => {
  describe("#createPlayer", async () => {
    before(async () => {
      instance = await Club.deployed();
    });

    it("creates a new player and adds to the game", async () => {
      let playerAccount = accounts[0];
      await instance.createPlayer("Foo Bar", { from: playerAccount });

      let [ name, playing ] = await instance.players.call(playerAccount);
      assert.equal(name, "Foo Bar");
      assert.isFalse(playing);
    });

    it("doesn't allow to create player twice for one account", async () => {
      let playerAccount = accounts[0];

      await expectThrow(async () => {
        await instance.createPlayer("Foo Bar", { from: playerAccount });
      });
    });
  });
});
