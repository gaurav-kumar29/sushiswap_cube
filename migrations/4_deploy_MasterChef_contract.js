const MasterChef = artifacts.require("MasterChef");


module.exports = function (deployer) {
    deployer.deploy(MasterChef, '0x6Dc1dB28ABFAfEF27369B9c108Cf3EB65e61a16F', '0xa788640B27adAcD6e275F05E492Ba9e2976Ab9CC', 300*1e6, 1854949, 1854949);
};
