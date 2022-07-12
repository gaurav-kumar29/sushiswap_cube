const MasterChefV2 = artifacts.require("MasterChefV2");
const MiniChefV2 = artifacts.require("MiniChefV2");
const Ownable = artifacts.require("Ownable");
const SushiBar = artifacts.require("SushiBar");
const SushiMaker = artifacts.require("SushiMaker");
const SushiMakerKashi = artifacts.require("SushiMakerKashi");
const SushiRoll = artifacts.require("SushiRoll");
const SushiToken = artifacts.require("SushiToken");



module.exports = function (deployer) {
   deployer.deploy(MasterChefV2);
    deployer.deploy(MiniChefV2);
    deployer.deploy(Ownable);
    deployer.deploy(SushiBar);
    deployer.deploy(SushiMaker);
    deployer.deploy(SushiMakerKashi);
    deployer.deploy(SushiRoll);
    deployer.deploy(SushiToken);
};
