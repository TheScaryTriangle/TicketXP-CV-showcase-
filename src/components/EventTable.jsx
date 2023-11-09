import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import eventModule from '../api/eventModule';

/**
 * @dev Used to display all the current vendors for the CRM
 * @todo put in a confirmation modal for delete
 */
const EventTable = () => {
    const [events, setEvents] = useState([]);
    const columns = [
        { field: "EventName", headerName: "EventName", minWidth: 40, flex: 1 },
        {
            headerName: "",
            width: 60,
            renderCell: (params) => {
                return (
                    <div>
                        <button onClick={() => deleteEvent(params.row._id)}>
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

    const setup = async () => {
        try {
            const eventAPIData = await eventModule.getAllEventDetails();
            console.log(eventAPIData)
            setEvents(eventAPIData)
        } catch (e) {
            console.log(e);
        }
    };
    const deleteEvent = async (Id) => {
        const deleteCallRequest = await eventModule.deleteEvent(Id)
        console.log(deleteCallRequest)
        setup()
    }
    return (
        <div style={{ width: "100%" }}>
            <h1>Events</h1>
            <DataGrid
                rows={events}
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

export default EventTable;
