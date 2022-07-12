const SushiBar = artifacts.require("SushiBar");
const Sushi = artifacts.require("SushiToken")


module.exports = function (deployer) {
    deployer.deploy(SushiBar, '0x6Dc1dB28ABFAfEF27369B9c108Cf3EB65e61a16F');
};
