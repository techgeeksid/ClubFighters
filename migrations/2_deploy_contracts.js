var Club = artifacts.require('./Club.sol');

module.exports = function(deployer) {
  deployer.deploy(Club);
};
