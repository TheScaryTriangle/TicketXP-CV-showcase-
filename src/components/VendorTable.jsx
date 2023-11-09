import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import vendorModule from '../api/vendorModule';

/**
 * @dev Used to display all the current vendors for the CRM
 * @todo put in a confirmation modal for delete
 */
const VendorTable = () => {
    const [vendors, setVendors] = useState([]);

    const columns = [
        { field: "VendorID", headerName: "VendorID", minWidth: 40, flex: 1 },
        { field: "VendorName", headerName: "Vendor name", minWidth: 150, flex: 1 },
        { field: "IsActive", headerName: "IsActive", minWidth: 40, flex: 1 },
        { field: "VendorDescription", headerName: "VendorDescription", minWidth: 130, flex: 2 },
        {
            headerName: "",
            width: 60,
            renderCell: (params) => {
                return (
                    <div>
                        <button onClick={() => deleteVendor(params.row._id)}>
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];
    useEffect(() => {
        setup();
    }, []);

    const deleteVendor = async (vendorID) => {
        const deleteRequest = await vendorModule.deleteVendor(vendorID)
        console.log(deleteRequest)
        setup();
    };

    const setup = async () => {
        try {
            const vendorsAPIData = await vendorModule.getVendorDetails();
            setVendors(vendorsAPIData);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <h1>Vendors</h1>
            <DataGrid
                rows={vendors}
                getRowId={(row) => row._id}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableColumnMenu
                autoHeight={true}
                density="comfortable"
                sx={{
                    "&.MuiDataGrid-root": {
                        borderRadius: "20px",
                        backgroundColor: "#ffffff",
                        border: 0,
                    },
                    ".MuiDataGrid-cell": {
                        "&:focus": {
                            outline: "none",
                        },
                    },
                    ".MuiDataGrid-withBorderColor": {
                        border: "0",
                    },
                    ".MuiDataGrid-columnHeaderTitle": {
                        fontWeight: "bold !important",
                        overflow: "visible !important",
                    },
                }}
            />
        </div>
    );
};

export default VendorTable;
