const Sushi = artifacts.require("SushiToken")


module.exports = function (deployer) {
    deployer.deploy(Sushi);
};