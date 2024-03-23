import React, { useEffect, useState } from 'react';

// Web3
import { init } from '../../web3/initiation';
import { useContractContext } from '../../context/contractContext';
import { useWeb3React } from '@web3-react/core';
import TicketNFTContractABI from '../../web3/contracts/TicketXP.json'

// APIs
import vendorModule from '../../api/vendorModule';
import eventModule from '../../api/eventModule';

import EventDetails from '../../components/EventDetails';

import heroImage from '../../assets/HomepageHeroBanner.jpg'

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            const eventAPIData = await eventModule.getAllEventDetails();
            setEvents(eventAPIData.slice(0, 5));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div className="hero-section">
                <img
                    src={heroImage}
                    alt="Hero Image"
                    className="hero-image"
                />
                <button className="get-tickets-button">Get Tickets</button>
            </div>

            <h1>Popular Tickets</h1>
            <div className="event-container">
                {
                    // events ? events.map((event) => {
                    //     return (
                    //         <EventDetails
                    //             eventData={event}
                    //             key={event._id}
                    //         />
                    //     )
                    // }) : null
                }
            </div>

            {/* <VendorAd /> */}
        </div>
    );
}

const VendorAd = () => {
    const [vendors, setVendors] = useState([]);
    const { setContract, contract } = useContractContext();
    const { active, chainId, account } = useWeb3React();

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            const contract = await init(TicketNFTContractABI);
            setContract(contract);

            const vendorsAPIData = await vendorModule.getVendorDetails();
            setVendors(vendorsAPIData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>Vendors</h1>
            <ul>
                {vendors.map((vendor) => (
                    <li key={vendor._id}>
                        <strong>{vendor.VendorName}</strong>
                        <p>{vendor.VendorDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
