// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./EventXP.sol";

/**
 * @dev This is the factory contract for TicketXP
 * @notice Run all functions from the interface on this contract
 */
contract TicketXP {
    mapping (uint256 => TicketNFT) eventContract;
    event EventCreated(TicketNFT contractData);

    function getEvent(uint256 _eventId) public view returns (TicketNFT) {
        return eventContract[_eventId];
    }

    function createEvent(uint256 _eventId, uint64 _amountOfTickets) public {
        TicketNFT newContract = new TicketNFT(_amountOfTickets,1);
        eventContract[_eventId] = ((newContract)); 
        emit EventCreated(newContract);
    }

    function buyTicket(uint256 _eventId, uint64 _numberOfTickets) public payable {
        eventContract[_eventId].buyTicket{value:msg.value}(_numberOfTickets);
    }

    function getTicketDetails(uint256 _eventId, uint64 _ticketId) public view returns(address){
        return eventContract[_eventId].ticketOwner(_ticketId);
    }
}