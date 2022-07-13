const MasterChefV2 = artifacts.require("MasterChefV2");


module.exports = function (deployer) {
    deployer.deploy(MasterChefV2, '0xCF00d835DA4965b6A2d844009b831638B4FaA989','0x6Dc1dB28ABFAfEF27369B9c108Cf3EB65e61a16F', 0);
};