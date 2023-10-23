const NFT = artifacts.require("./TicketNFT.sol")

module.exports = function (deployer) {
	deployer.deploy(NFT);
}
