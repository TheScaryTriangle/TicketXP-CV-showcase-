// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TicketNFT.sol";

/**
 * @notice This is the factory contract for TicketXP
 */
contract TicketXP {

    address[] public events;

    function getAllEvents() public view returns (address[] memory) {
        return events;
    }

    function createEvent(uint64 _amountOfTickets) public {
        TicketNFT newContract = new TicketNFT(_amountOfTickets);
        events.push(address(newContract)); 
    }
}