var Forum = artifacts.require("./Forum.sol");

module.exports = function(deployer) {
  deployer.deploy(Forum, 10000, web3.toWei('0.0000001', 'ether'), {gas: 4700000});
};
