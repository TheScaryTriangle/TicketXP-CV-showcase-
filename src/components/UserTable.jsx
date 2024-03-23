import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import loginModule from '../api/loginModule';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    const columns = [
        {
            field: "Username",
            headerName: "Username",
            minWidth: 200,
            flex: 1
        },
        {
            field: "Password",
            headerName: "Password",
            minWidth: 200,
            flex: 1
        },
        {
            headerName: "Delete User",
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <button onClick={() => deleteUser(params.row._id)}>
                            Delete User
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
            const userAPIData = await loginModule.getAllUsers();
            setUsers(userAPIData);
            console.log(userAPIData)
        } catch (error) {
            console.log("Error setting up:", error);
        }
    };

    const deleteUser = async (Id) =>{
        console.log(Id)
        const deleteRequest = await loginModule.deleteUser(Id)
        console.log(deleteRequest)
        setup()
    }

    return (
        <div style={{ width: "100%" }}>
            <h1>UserTable</h1>
            <DataGrid
                rows={users}
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

export default UserTable;
