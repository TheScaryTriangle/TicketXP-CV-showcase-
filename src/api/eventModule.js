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

const getEventFromId = async (Id) => {
    try {
        const url = `ticketModule/GetEventById`;
        const eventCallRequest = await apiCall.postURL(url, { id: Id });
        return eventCallRequest;
    } catch (error) {
        console.error('An error occurred while getting event details:', error);
        throw error;
    }
}

const addNewEvent = async (obj) => {
    try {
        const url = `ticketModule/AddEvent`;
        const eventCallRequest = await apiCall.postURL(url, obj);
        return eventCallRequest;
    } catch (error) {
        console.error('An error occurred while getting event details:', error);
        throw error;
    }
}

const deleteEvent = async (Id) => {
    try {
        const url = `ticketModule/deleteEvent`;
        const deleteCallRequest = await apiCall.postURL(url, { id: Id });
        return deleteCallRequest;
    } catch (error) {
        console.error('An error occurred while deleting event details:', error);
        throw error;
    }
}

export default {
    getAllEventDetails,
    getEventFromId,
    addNewEvent,
    deleteEvent,
}