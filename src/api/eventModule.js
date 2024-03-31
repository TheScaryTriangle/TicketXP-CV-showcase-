import apiCall from "./controler";

/**
 * @dev This gets all events from the DB
 * @returns An array with every event
 */
const getAllEventDetails = async () => {
    try {
        const url = `eventRoutes/getAllEvents`;
        const eventCallRequest = await apiCall.getURL(url);
        return eventCallRequest;
    } catch (error) {
        console.error('An error occurred while getting event details:', error);
        throw error;
    }
};

const getEventFromId = async (Id) => {
    try {
        const url = `eventRoutes/GetEventById`;
        const eventCallRequest = await apiCall.postURL(url, { id: Id });
        console.log(eventCallRequest)
        return eventCallRequest;
    } catch (error) {
        console.error('An error occurred while getting event details:', error);
        throw error;
    }
}

const addNewEvent = async (obj) => {
    try {
        const url = `eventRoutes/AddEvent`;
        const eventCallRequest = await apiCall.postURL(url, obj);
        return eventCallRequest;
    } catch (error) {
        console.error('An error occurred while getting event details:', error);
        throw error;
    }
}

const deleteEvent = async (Id) => {
    try {
        const url = `eventRoutes/deleteEvent`;
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