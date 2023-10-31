import React, { useEffect, useState } from 'react';
import { init } from '../web3/initiation';
import { useContractContext } from '../context/contractContext';
import { useWeb3React } from '@web3-react/core';
import TicketNFTContractABI from '../web3/contracts/TicketNFT.json';
import vendorModule from '../api/vendorModule';

import Header from './Homepage/Header'
import VendorAdvertReel from '../components/VendorAdvertReel';

const Homepage = () => {
    const [vendors, setVendors] = useState([]);
    const { setContract, contract } = useContractContext();
    const { active, chainId, account } = useWeb3React();

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            const vendorsAPIData = await vendorModule.getVendorDetails();
            setVendors(vendorsAPIData);
        } catch (e) {
            console.log(e);
        }
        try {
            const contract = await init(TicketNFTContractABI);
            setContract(contract);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <VendorAdvertReel
                vendorData={vendors}
            />
        </div>
    );
}

export default Homepage;