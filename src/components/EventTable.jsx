import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import eventModule from '../api/eventModule';

import { init } from '../web3/initiation';
import { useContractContext } from '../context/contractContext';
import { useWeb3React } from '@web3-react/core'
import TicketNFTContractABI from '../web3/contracts/TicketXP.json'

const EventTable = () => {
    const [events, setEvents] = useState([]);
    const { setContract, contract } = useContractContext();
    const { active, chainId, account } = useWeb3React();

    const columns = [
        {
            field: "EventName",
            headerName: "Event Name",
            minWidth: 200,
            flex: 1
        },
        {
            field: "EventID",
            headerName: "Event Id",
            minWidth: 200,
            flex: 1
        }, 
        {
            field: "VendorID",
            headerName: "Vendor Id",
            minWidth: 200,
            flex: 1
        },  
        {
            field: "EventDetails",
            headerName: "Event Details",
            minWidth: 200,
            flex: 1
        },
        {
            headerName: "Delete Event",
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <button onClick={() => deleteEvent(params.row._id)}>
                            Delete Event
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
            setEvents(eventAPIData);
            // Initialize contract if not already initialized
            if (!contract) {
                const contractInstance = await init(TicketNFTContractABI);
                setContract(contractInstance);
            }
        } catch (error) {
            console.log("Error setting up:", error);
        }
    };

    const deleteEvent = async (id) => {
        try {
            const deleteCallRequest = await eventModule.deleteEvent(id);
            console.log(deleteCallRequest);
            setup();
        } catch (error) {
            console.log("Error deleting event:", error);
        }
    };

    const createContract = async (id) => {
        try {
            const contractCallRequest = await contract.methods.createEvent(id, 3).send({
                from: account,
                value: 0
            });
            console.log("Contract creation successful:", contractCallRequest);
            setup();
        } catch (error) {
            console.log("Error creating contract:", error);
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <h1>Events</h1>
            <DataGrid
                rows={events}
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={5}
                checkboxSelection
                disableColumnMenu
                autoHeight={true}
                density="comfortable"

                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
};

export default EventTable;
