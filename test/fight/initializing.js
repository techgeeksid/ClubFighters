var Fight = artifacts.require("Fight");

contract("Fight contract", async (accounts) => {
  describe("Initialization", async () => {
    it("assigns creator to player1", async () => {
      let creator = accounts[0];
      let instance = await Fight.new({ from: creator });

      let player1 = await instance.player1.call();
      assert.equal(player1, creator);
    })
  });
});
