import apiCall from "./controler";

/**
 * @dev Use to get all of the users info
 * @dev Never use this 
 * @returns An array of all the user's details
 */
const getAllUsers = async () => {
    try {
        const url = `loginModule/GetUsers`;
        const userGetRequest = await apiCall.getURL(url);
        return userGetRequest;
    } catch (error) {
        console.error('An error occurred while getting user details:', error);
        throw error;
    }
};

/**
 * 
 * @param {obj} {
    username: '',
    password: '',
  };
 * @returns 
 */
const login = async (loginData) => {
    try {
        const url = `loginModule/Login`;
        const loginRequest = await apiCall.postURL(url, loginData);
        return loginRequest;
    } catch (error) {
        console.error('An error occurred on log in:', error);
        throw error;
    }
};

const registerUser = async (registrationData) => {
    try {
        const url = `loginModule/Register`;
        const registerRequest = await apiCall.postURL(url, registrationData);
        return registerRequest;
    } catch (error) {
        console.error('An error occurred on log in:', error);
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const url = `loginModule/Delete`;
        const deleteRequest = await apiCall.deleteURL(url, { id: userId });
        return deleteRequest;
    } catch (error) {
        console.error('An error occurred when deleting:', error);
        throw error;
    }
};

export default {
    getAllUsers,
    login,
    registerUser,
    deleteUser
}