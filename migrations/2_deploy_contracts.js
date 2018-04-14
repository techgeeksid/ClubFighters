var Club = artifacts.require('./Club.sol');
var Fight = artifacts.require("./Fight.sol");

module.exports = function(deployer) {
  deployer.deploy(Club);
  deployer.deploy(Fight);
};
