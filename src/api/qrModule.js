import apiCall from "./controler";

const getQRCode = async (ticketId) => {
    try {
        const url = `qrModule/GenerateQRCode`;
        const qrRequest = await apiCall.postURL(url, {
            ticketId: ticketId
        });
        return qrRequest;
    } catch (error) {
        console.error('An error occurred while getting vendor details:', error);
        throw error;
    }
};

export default {
    getQRCode
}