import { expectThrow } from "../helpers";

var Club = artifacts.require("Club");
var NullAction = artifacts.require("NullAction");

var instance;
var action;

contract("Club contract", async (accounts) => {
  describe("#addAction", async () => {
    before(async () => {
      instance = await Club.deployed();
      action = await NullAction.new(instance.address);
    })

    it("resgisters a new action", async () => {
      await instance.addAction(action.address);

      let registered = await instance.registeredActions.call(action.address);
      assert.isTrue(registered);
    });

    it("is available only for Club owner", async () => {
      let someGuy = accounts[1];
      let anotherAction = await NullAction.new(instance.address);

      await expectThrow(async () => {
        await instance.addAction(anotherAction.address, { from: someGuy });
      });
    });
  });
});
