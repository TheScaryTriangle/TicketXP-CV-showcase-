import apiCall from "./controler";

const getQRCode = async () => {
    try {
        const url = `qrModule/GenerateQRCode`;
        const qrRequest = await apiCall.getURL(url, {
            ticketId: "TestTicket"
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