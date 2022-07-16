const MasterChef = artifacts.require("MasterChef");


module.exports = function (deployer) {
    deployer.deploy(MasterChef, '0x6Dc1dB28ABFAfEF27369B9c108Cf3EB65e61a16F', '0x6388B9041FcbB8e46c919999EEbf0Dd6f5de3539', 300*1e6, 1854949, 1854949);
};
