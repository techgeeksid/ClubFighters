import expectThrow from '../helpers/expectThrow';

var Club = artifacts.require("Club");
var Fight = artifacts.require("Fight");

var club;
var fight;

contract("Fight contract", async (accounts) => {
  describe("#join", async () => {
    let playerA = accounts[0];
    let playerB = accounts[1];
    var fightId;
    var fightAddress;

    before(async () => {
      club = await Club.deployed();
      await club.createPlayer("PlayerA", { from: playerA });
      await club.createPlayer("PlayerB", { from: playerB })
      let tx = await club.createFight({ from: playerA });
      let { _id: fightId, _address: fightAddress } = tx.logs[0].args;
      fight = await Fight.at(fightAddress);
    });

    it("doesn't allow creator to play with himself", async () => {
      await expectThrow(async () => {
        await fight.join({ from: playerA });
      });
    });

    it("doesn't allow to join unregistred player", async () => {
      let unregistred = accounts[2];

      await expectThrow(async () => {
        await fight.join({ from: unregistred });
      })
    });

    it("doesn't allow to join an already playing player", async () => {
      let playerC = accounts[2];
      await club.createPlayer("PlayerC", { from: playerC });
      await club.createFight({ from: playerC });

      await expectThrow(async () => {
        await fight.join({ from: playerC });
      });
    });

    it("assigns sender to playerRight when joined", async () => {
      await fight.join({ from: playerB });

      let playerRight = await fight.playerRight.call();
      assert.equal(playerB, playerRight);
    });

    it('makes playerRight "playing"', async () => {
      let [ , playing ] = await club.players.call(playerB);

      assert.isTrue(playing);
    })

    it("starts game when player2 joined", async () => {
      let started = await fight.started.call();

      assert.isTrue(started);
    });

    it("doesn't allow to join when started", async () => {
      await expectThrow(async () => {
        await instance.join({ from: accounts[2] });
      });
    });
  })
});
