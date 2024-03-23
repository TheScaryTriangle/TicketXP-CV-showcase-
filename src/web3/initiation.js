import Web3 from 'web3'

let contract;
let isInitialized = false;

/**
 * @dev This is used to initalise the contract and get the contract object
 * @todo This is not the correct provider RPC change it so that it is from the wallet later
 * @todo Add a failure condition and return an error if unsucessfull
 * @todo Add more alternate providers
 * @param ContractABI This is the raw contract ABI, take this from the contract compile export
 * @param altAddress If an alternate address is provided then it will overide the one in the ABI
 * @returns Contract The contract object
 */
export const init = async (contractABI, altAddress) => {
    let provider = window.ethereum;
    const web3 = new Web3(provider);
    // const web3 = new Web3("HTTP://127.0.0.1:7545");
    // console.log(web3)

    let contractAddress;

    if (altAddress) {
        contractAddress = altAddress; // Use the altAddress if provided
    } else {
        const networkId = await web3.eth.net.getId(); //Get the current newtork Id for the correct address
        contractAddress = contractABI.networks[networkId].address;
    }

    contract = new web3.eth.Contract(contractABI.abi, contractAddress); // Check if the contract exists on the network
    isInitialized = true;
    return contract;
};

/**
 * @dev This is used to get the user's account
 * @returns Address The account address of the connected wallet
 */
export const getAccount = async () => {
    let provider = window.ethereum;
    let selectedAccount;

    if (typeof provider !== 'undefined') {
        await provider
            .request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                selectedAccount = accounts[0];
            })
            .catch((err) => {
                console.log(err);
            });
        window.ethereum.on('accountsChanged', function (accounts) {
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
        });
    }
    return selectedAccount
}

export default contract