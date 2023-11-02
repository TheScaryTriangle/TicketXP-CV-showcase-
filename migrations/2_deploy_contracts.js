const TicketNFT = artifacts.require("./TicketNFT.sol")

module.exports = function (deployer) {
	deployer.deploy(TicketNFT,100);
}
