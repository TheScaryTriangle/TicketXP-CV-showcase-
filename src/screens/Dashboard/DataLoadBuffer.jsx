import React, { useEffect, useState } from 'react';
import { init, getNumber } from '../../web3/initiation';
import { useContractContext } from '../../context/contractContext';
import { getOwner } from '../../web3/owner';
import { useWeb3React } from '@web3-react/core'
import TokenFunctions from '../../web3/TokenFunctions';
import tokenContractABI from '../../web3/contracts/Token.json'

/**
 * @dev This is a 
 * @returns A loading screen while the site gets all the user's details
 */
const DataLoad = () => {
    const [currentBalance, setCurrentBalance] = useState(0)
    const { setContract, contract } = useContractContext(); // Use the context hook to access setContract
    const { active, chainId, account } = useWeb3React();

    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const contract = await init(tokenContractABI);
            setContract(contract)
            const userBalance = await TokenFunctions.getBalance(
                contract,
                account
            )
            setCurrentBalance(userBalance.toString());
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            Current balance: {currentBalance}
        </div>
    )
}

export default DataLoad;