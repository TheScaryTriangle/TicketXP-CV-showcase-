import React, { useEffect, useState } from 'react';

//Web3
import { init } from '../../web3/initiation';
import { useContractContext } from '../../context/contractContext';
import { useWeb3React } from '@web3-react/core'
import TicketNFTContractABI from '../../web3/contracts/TicketNFT.json'

//APIs
import eventModule from '../../api/eventModule';
import Web3Login from '../../components/Web3Login';
import formatDate from '../../utility/formatDate';

/**
 * @dev This is the main dashboard for the site.
 *      Default to this page
 */
const EventPage = () => {
    const [event, setEvent] = useState(null)
    const { setContract, contract } = useContractContext();
    const { active, chainId, account } = useWeb3React();
    useEffect(() => {
        setup()
    }, []);

    /**
     * @dev Setup gets the contract into context and the user's balance
     * @dev Contract setup is different from event setup
     * @notice If event isn't setup then don't setup contract
     * @todo Add a fail state incase the contract cannot be loaded
     */
    const setup = async () => {
        try {
            const Id = getIDFromURL()
            console.log(Id)
            const eventAPIData = await eventModule.getEventFromId(Id);
            setEvent(eventAPIData)

            const contract = await init(TicketNFTContractABI);
            setContract(contract);
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * 
     * @param {address} contractAddress The address of the contract to buy from
     */
    const buyTicket = async (contractAddress) => {
        console.log(contractAddress)
        console.log(contract.methods)
    }

    if(event == null){
        return(
            <div>

            </div>
        )
    }

    return (
        <div>
            <div style={{
                background:
                    'url(https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4)',
                backgroundSize: 'cover', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <h1 style={{ color: 'white' }}>{event.EventName}</h1>
            </div>
            <div style={{ padding: '20px' }}>
                <p><strong>Price:</strong> ${event.TicketPrice}</p>
                <p><strong>Event Date:</strong> {formatDate(event.EventDate)}</p>
                <p><strong>Event Details:</strong> {event.EventDetails}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px' }}>
                        <p><strong>End of Sale:</strong> {formatDate(event.EndOfSale)}</p>
                    </div>
                </div>
            </div>


            {/* Show the buy button if logged in and login if not */}
            {account ? (
                <button
                    style={{ backgroundColor: 'blue', color: 'white' }}
                    onClick={() => buyTicket(event.contractAddress)}
                >
                    Buy Now
                </button>
            ) : (
                <Web3Login />
            )}
        </div>
    );
}

function getIDFromURL() {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get("id");
}

export default EventPage;