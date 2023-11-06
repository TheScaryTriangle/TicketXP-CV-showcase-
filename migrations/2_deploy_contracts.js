const TicketNFT = artifacts.require("./TicketXP.sol")

module.exports = function (deployer) {
	deployer.deploy(TicketNFT);
}
