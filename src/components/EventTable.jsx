import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import eventModule from '../api/eventModule';

import { init } from '../web3/initiation';
import { useContractContext } from '../context/contractContext';
import { useWeb3React } from '@web3-react/core'
import TicketNFTContractABI from '../web3/contracts/TicketXP.json'

/**
 * @dev Used to display all the current vendors for the CRM
 * @todo put in a confirmation modal for delete
 */
const EventTable = () => {
    const [events, setEvents] = useState([]);
    const { setContract, contract } = useContractContext();
    const { active, chainId, account } = useWeb3React();

    const columns = [
        { field: "EventName", headerName: "EventName", minWidth: 40, flex: 1 },
        {
            headerName: "Contract",
            width: 60,
            renderCell: (params) => {
                return (
                    <div>
                        <button onClick={() => createContract(params.row._id)}>
                            Create
                        </button>
                    </div>
                );
            },
        },
        // {
        //     headerName: "Delete",
        //     width: 60,
        //     renderCell: (params) => {
        //         return (
        //             <div>
        //                 <button onClick={() => deleteEvent(params.row._id)}>
        //                     Delete
        //                 </button>
        //             </div>
        //         );
        //     },
        // },
    ];

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            const eventAPIData = await eventModule.getAllEventDetails();
            setEvents(eventAPIData)
            const contract = await init(TicketNFTContractABI);
            setContract(contract);

            const events = await contract.methods.getEvent(1).call();
            console.log(events)
        } catch (e) {
            console.log(e);
        }
    };

    const deleteEvent = async (Id) => {
        const deleteCallRequest = await eventModule.deleteEvent(Id)
        console.log(deleteCallRequest)
        setup()
    }

    const createContract = async (Id) => {
        console.log(contract.methods)
        console.log(account)
        try {
            const contractCallRequest = await contract.methods.createEvent(
                3,
                3
            ).send({ 
                from: account,
                value:0
            })
            console.log(contractCallRequest)

        } catch(e) {
            console.log(e)
        }
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
