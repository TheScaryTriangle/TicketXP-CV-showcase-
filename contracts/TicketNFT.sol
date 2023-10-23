// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TicketNFT{

    string[] public  tickets;

    function createTicket () public {
        tickets.push("Ticket");
    }
}