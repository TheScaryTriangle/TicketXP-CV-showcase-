const NFT = artifacts.require("./TicketXP.sol")

module.exports = function (deployer) {
	deployer.deploy(NFT);
}
