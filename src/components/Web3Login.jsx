import React, { useEffect, useState } from 'react';
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

/**
 * @dev This is used if the user dosen't have a wallet connected
 */
const Web3Login = () => {
    const { activate, active, account } = useWeb3React();

    const Injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42, 1337, 59140]
    });

    /**
     * @notice This auto activates web3 react with the injected wallet
     * @dev Remove this because it breaks permissions
     * @todo Remove this function
     */
    useEffect(() => {
        try{
            activate(Injected)
        }catch (e){
            console.log(e)
        }
    }, []);

    const getWalletConnectionRequest = async () => {
        activate(Injected)
    }

    /**
     * @notice Dont show button if already connected
     */
    if (active) {
        return(
            <div>

            </div>
        )
    }

    return (
        <div>
            <button onClick={() => { getWalletConnectionRequest() }}><h1>Connect wallet</h1></button>
        </div>
    )
}

export default Web3Login;