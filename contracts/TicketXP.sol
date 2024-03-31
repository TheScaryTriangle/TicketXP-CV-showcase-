// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./TicketNFT.sol";
import "./EventObject.sol";

contract TicketXP {

    mapping (uint256 => TicketNFT) events;

    event EventCreated(TicketNFT contractData);

    function getEvent(uint256 _eventId) public view returns (TicketNFT) {
        return events[_eventId];
    }

    function createEvent(string calldata _eventName,uint256 _eventId, uint256 _totalTickets, uint256 _ticketPrice) public {
        TicketNFT newContract = new TicketNFT(EventObject(
            _eventName,
            0,  //Hardcode inital tickets sold to zero
            _totalTickets,
            _ticketPrice
        ));
        events[_eventId] = newContract;
        emit EventCreated(newContract);
    }
}