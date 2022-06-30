var EssenceToken = artifacts.require("EssenceToken.sol");


module.exports = function(deployer) {
  deployer.deploy(EssenceToken);
};
