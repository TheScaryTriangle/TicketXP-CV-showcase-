import apiCall from "./controler";

const getVendorDetails = async () => {
    try {
        const url = `vendorModule/GetAllVendors`;
        const vendorSaveRequest = await apiCall.getURL(url);
        return vendorSaveRequest;
    } catch (error) {
        console.error('An error occurred while getting vendor details:', error);
        throw error;
    }
};

const getVendorFromId = async () => {
    try {
        const url = `vendorModule/GetVendorById`;
        const vendorSaveRequest = await apiCall.getURL(url);
        return vendorSaveRequest;
    } catch (error) {
        console.error('An error occurred while getting vendor details:', error);
        throw error;
    }
}

export default {
    getVendorDetails,
    getVendorFromId
}