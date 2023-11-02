// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TicketNFT{

    uint64 public  numberOfTickets;
    uint64 public ticketsSold;
    mapping (uint64 => address) public tickets;

    function buyTicket () public {
        ticketsSold ++;
        tickets[ticketsSold] = msg.sender;
    }

    constructor(uint64 _numberOfTickets) {
        numberOfTickets = _numberOfTickets;
    }
}