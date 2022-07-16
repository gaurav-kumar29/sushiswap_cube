const Test = artifacts.require("TestToken")


module.exports = function (deployer) {
    deployer.deploy(Test);
};