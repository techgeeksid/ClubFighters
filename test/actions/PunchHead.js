import { createFight } from "../helpers";

var Club = artifacts.require('Club');
var PunchHead = artifacts.require('PunchHead');
var NullAction = artifacts.require('NullAction');

var game;

contract("PunchHead contract", async (accounts) => {
  let playerLeft = accounts[0];
  let playerRight = accounts[1];

  var fightId;
  var nullAction;
  var punchHead;

  // before(async () => {
  //   game = await Club.deployed();
  //
  //   var punchHead = await PunchHead.new(game.address).address;
  //   await game.addAction(punchHead);
  //   var nullAction = await NullAction.new(game.address).address;
  //   await game.addAction(nullAction);
  //
  //   await game.createPlayer("PlayerA");
  //   await game.createPlayer("PlayerB");
  //
  //   fightId = await createFight(game, playerLeft);
  //   await game.joinFight(fightId, { from: playerRight });
  // });

  describe("#play", async () => {
    it("decreases 10 HP when not blocked", async () => {
      // var [ ,, leftHpBefore ] = await game.fights.call(fightId);
      //
      // await game.play(0, 0, 0, sha256(nullAction ^ 0), {
      //   from: playerLeft
      // });
      // await game.play(0, 0, punchHead, sha256(nullAction ^ 0), {
      //   from: playerRight
      // });
      // await game.play(nullAction, 0, nullAction, sha256(nullAction ^ 0), {
      //   from: playerLeft
      // });
      //
      // var [ ,, leftHpAfter ] = await game.fights.call(fightId);
      // expect(leftHpBefore - leftHpAfter, 10)
    });
  });
});
