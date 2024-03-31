// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./EventObject.sol";

/**
 * @dev This contract is used for a specific event
 */
contract TicketNFT{

    //The event data is stored on the event contract here
    EventObject public EventData;

    constructor(EventObject memory _EventData){
        EventData = _EventData;
    }
    
    // Mapping from token ID to owner address
    mapping(uint256 => address) internal _ownerOf;

    // Mapping owner address to token count
    mapping(address => uint256) internal _balanceOf;

    // Mapping from token ID to approved address
    mapping(uint256 => address) internal _approvals;

    // Mapping from owner to operator approvals
    mapping(address => mapping(address => bool)) public isApprovedForAll;

    //Viewer functions
    function ownerOf(uint256 _tokenId) public view returns(address){
        return _ownerOf[_tokenId];
    }
    
    function balanceOf(address _owner) public view returns(uint256){
        return _balanceOf[_owner];
    }

    function approvals (uint256 _tokenId) public view returns(address){
        return _approvals[_tokenId];
    }

    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    /**
     * @notice Use this function for sending tokens
     */
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable{
        //Address sending the token must be the owner or approved
        require (msg.sender == _ownerOf[_tokenId] || msg.sender == _approvals[_tokenId] || isApprovedForAll[_from][msg.sender]);
        _approvals[_tokenId] = 0x0000000000000000000000000000000000000000;  //Reset the approval address after checking
        _ownerOf[_tokenId] = _to;

        //Emit transfer event after
        emit Transfer(
            _from,
            _to,
            _tokenId
        );
    }

    function approve(address _approved, uint256 _tokenId) external payable{
        address _owner = ownerOf(_tokenId);
        require(msg.sender == _owner);
        _approvals[_tokenId] = _approved;
        emit Approval(_owner, _approved, _tokenId);
    }

    function setApprovalForAll(address _operator, bool _approved) external{
        isApprovedForAll[msg.sender][_operator] = _approved;
    }
    
    /**
     * @dev Only mint on first purchase of ticket
     * @notice Assume that the tickets that need to be minted are already approved to be sold
     */
    function mint (address _mintTo) public payable {
        //Check if more tickets are avalible
        require( EventData.ticketsSold < EventData.totalTicketNumber , "All tickets have been sold");
        EventData.ticketsSold ++;

        //Pay for ticket here
        require(msg.value >= EventData.ticketPrice,"Not enough payed");

        //Mint the token here
        _balanceOf[_mintTo] ++;
        _ownerOf[EventData.ticketsSold] = _mintTo;

        //Update states after confirmation
        emit Transfer(
            0x0000000000000000000000000000000000000000,
            msg.sender,
            EventData.ticketsSold
        );
    }
}

interface ERC165 {
    /// @notice Query if a contract implements an interface
    /// @param interfaceID The interface identifier, as specified in ERC-165
    /// @dev Interface identification is specified in ERC-165. This function
    ///  uses less than 30,000 gas.
    /// @return `true` if the contract implements `interfaceID` and
    ///  `interfaceID` is not 0xffffffff, `false` otherwise
    function supportsInterface(bytes4 interfaceID) external view returns (bool);
}

/// @dev Note: the ERC-165 identifier for this interface is 0x150b7a02.
interface ERC721TokenReceiver {
    /// @notice Handle the receipt of an NFT
    /// @dev The ERC721 smart contract calls this function on the recipient
    ///  after a `transfer`. This function MAY throw to revert and reject the
    ///  transfer. Return of other than the magic value MUST result in the
    ///  transaction being reverted.
    ///  Note: the contract address is always the message sender.
    /// @param _operator The address which called `safeTransferFrom` function
    /// @param _from The address which previously owned the token
    /// @param _tokenId The NFT identifier which is being transferred
    /// @param _data Additional data with no specified format
    /// @return `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
    ///  unless throwing
    function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes calldata _data) external returns(bytes4);
}