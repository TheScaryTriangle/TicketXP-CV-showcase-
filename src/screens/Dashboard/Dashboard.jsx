import React, { useEffect, useState } from 'react';

//Web3
import { init } from '../../web3/initiation';
import { useContractContext } from '../../context/contractContext';
import { useWeb3React } from '@web3-react/core'
import TicketNFTContractABI from '../../web3/contracts/TicketNFT.json'

//APIs
import vendorModule from '../../api/vendorModule';

/**
 * @dev This is the main dashboard for the site.
 *      Default to this page
 */
const Dashboard = () => {
    const [vendors, setVendors] = useState([])
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

            const vendorsAPIData = await vendorModule.getVendorDetails()
            console.log(vendorsAPIData)
            setVendors(vendorsAPIData)
        } catch (e) {
            console.log(e)
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
    )
}

export default Dashboard;