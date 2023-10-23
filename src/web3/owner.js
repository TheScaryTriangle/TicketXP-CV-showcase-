/**
 * @dev This is used to get the owner address from the contract
 *      This only works if there is an owner, this will return an error otherwise
 * @param {Obj} contract This is the web3 contract object
 * @returns The owner address if possible
 */
export const getOwner = async (contract) => {
    try {
        const owner = await contract.methods.owner().call();
        return owner;
    } catch (e) {
        return e
    }
};
