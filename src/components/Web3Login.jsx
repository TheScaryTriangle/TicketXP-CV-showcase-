import React, { useEffect, useState } from 'react';
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

/**
 * @dev This is used if the user dosen't have a wallet connected
 */
const Web3Login = () => {
    const { activate } = useWeb3React();

    const Injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42, 1337, 59140]
    });

    // //This auto activates web3 react with the injected wallet
    // useEffect(() => {
    //     try{
    //         activate(Injected)
    //     }catch (e){
    //         console.log(e)
    //     }
    // }, []);

    const getWalletConnectionRequest = async () => {
        activate(Injected)
    }

    return (
        <div>
            <button onClick={() => { getWalletConnectionRequest() }}><h1>Connect wallet</h1></button>
        </div>
    )
}

export default Web3Login;