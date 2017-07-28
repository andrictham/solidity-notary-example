var ProofOfExistence1 = artifacts.require("ProofOfExistence1");
var ProofOfExistence2 = artifacts.require("ProofOfExistence2");

module.exports = function(deployer) {
  deployer.deploy(ProofOfExistence1);
  deployer.deploy(ProofOfExistence2);
};
