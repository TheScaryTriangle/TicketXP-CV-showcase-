// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TicketNFT{

    uint64 public  numberOfTickets;
    uint64 public ticketsSold;
    uint256 public ticketPrice;

    mapping (uint64 => address) public tickets;

    function buyTicket (uint64 _amount) public payable {
        uint256 totalPrice = ticketPrice * _amount;
        
        //Don't give tickets if the wrong amount was paid
        //Don't give out more tickets than what is avalible
        require(msg.value == totalPrice, "Wrong amount sent");
        require(ticketsSold + _amount < numberOfTickets, "Too many tickets");
        for(uint64 i; i < _amount; i++){
            ticketsSold ++;
            tickets[ticketsSold] = msg.sender;
        }
    }

    function transfer(address _to, uint64 _ticketId) public {
        require(msg.sender == tickets[_ticketId]);
        tickets[_ticketId] = _to;
    }

    function ticketOwner (uint64 _ticketId) public view returns (address){
        return tickets[_ticketId];
    }

    constructor(uint64 _numberOfTickets, uint256 _ticketPrice) {
        numberOfTickets = _numberOfTickets;
        ticketPrice = _ticketPrice;
    }
}