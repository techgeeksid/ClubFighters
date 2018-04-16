import { expectThrow } from "../helpers";

var Club = artifacts.require("Club");

var instance;

contract("Club contract", async (accounts) => {
  describe("#setPlaying", async () => {
    var player = accounts[0];

    before(async () => {
      instance = await Club.deployed();
      await instance.createPlayer("Foo Bar", { from: player });
    })

    it("isn't available for unregistered fight", async () => {
      await expectThrow(async () => {
        await instance.setPlaying(player, { from: player });
      });
    });
  })
})
