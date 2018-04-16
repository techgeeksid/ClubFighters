import { expectThrow, createFight } from "../helpers";

var Club = artifacts.require('Club');

var instance;

contract("Fight contract", async (accounts) => {
  describe("#play", async () => {
    let playerLeft = accounts[0];
    let playerRight = accounts[1];

    // before(async () => {
    //   instance = await Club.deployed();
    //   await instance.createPlayer("PlayerL", { from: playerLeft });
    //   await instance.createPlayer("PlayerR", { from: playerRight });
    //
    //   let id = await createFight(instance, playerLeft);
    //   await instance.joinFight(id, { from: playerRight });
    // });

    it("not available for third person", async () => {
      // let third = accounts[2];
      //
      // await expectThrow(async () => {
      //   await instance.play(0, 0, null, null, { from: third });
      // })
    });
  });
});
