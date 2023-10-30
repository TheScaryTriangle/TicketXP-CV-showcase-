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

const createVendor = async (obj) => {
    try {
        const url = `vendorModule/AddVendor`;
        const vendorSaveRequest = await apiCall.postURL(url,obj);
        return vendorSaveRequest;
    } catch (error) {
        console.error('An error occurred while getting vendor details:', error);
        throw error;
    }
}

const deleteVendor = async (Id) => {
    console.log(Id)
    try {
        const url = `vendorModule/DeleteVendor`;
        const vendorDeleteRequest = await apiCall.deleteURL(url,{
            id:Id
        });
        return vendorDeleteRequest;
    } catch (error) {
        console.error('An error occurred while getting vendor details:', error);
        throw error;
    }
}

export default {
    getVendorDetails,
    getVendorFromId,
    createVendor,
    deleteVendor
}