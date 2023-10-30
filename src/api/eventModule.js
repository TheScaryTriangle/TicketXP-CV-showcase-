import apiCall from "./controler";

const getAllEventDetails = async () => {
    try {
        const url = `ticketModule/GetAllEvents`;
        const eventCallRequest = await apiCall.getURL(url);
        return eventCallRequest;
    } catch (error) {
        console.error('An error occurred while getting event details:', error);
        throw error;
    }
};

export default {
    getAllEventDetails,
}