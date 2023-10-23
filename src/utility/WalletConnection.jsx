import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

/**
 * @dev This is used if the user dosen't have a wallet connected
 */
export const WalletConnection = () => {
    const { activate } = useWeb3React();

    const Injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42, 1337]
    });
    activate(Injected)
}