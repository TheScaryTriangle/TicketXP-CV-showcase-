import React, { useEffect, useState } from 'react';

//Web3
import { init } from '../../web3/initiation';
import { useContractContext } from '../../context/contractContext';
import { useWeb3React } from '@web3-react/core'
import TicketNFTContractABI from '../../web3/contracts/TicketNFT.json'

/**
 * @dev This is the main dashboard for the site.
 *      Default to this page
 */
const Dashboard = () => {
    const { setContract, contract } = useContractContext(); // Use the context hook to access setContract
    const { active, chainId, account } = useWeb3React();

    useEffect(() => {
        setup()
    }, []);

    /**
     * @dev Setup gets the contract into context and the user's balance
     * @todo Add a fail state incase the contract cannot be loaded
     */
    const setup = async () => {
        try {
            const contract = await init(TicketNFTContractABI);
            setContract(contract)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            Dashboard placeholder
        </div>
    )
}

export default Dashboard;