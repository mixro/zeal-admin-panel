import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Link } from 'react-router-dom';
import { UsersList } from '../../Dummydata';
import './users.css';

const Users = () => {
    const users = UsersList;

    const columns = [
        { field: "_id", headerName: "ID", width: 120 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src="../../../images/user.png" alt="" />
                    {params.row.username}
                </div>
            );
            },
        },
        { field: "email", headerName: "Email", width: 210 },
        {
            field: "isAdmin",
            headerName: "isAdmin",
            width: 80,
        },
        {
            field: "createdAt",
            headerName: "Joined At",
            width: 200,
            renderCell: (params) => {
            /*const date = moment(params.row.createdAt);*/
            return <span>a month ago</span>;
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
            return (
                <>
                <Link to={"/user/" + params.row._id}>
                    <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline
                    className="userListDelete"
                />
                </>
            );
            },
        },
    ];

  return (
    <div className="userList">
        <h1>Customers</h1>
        
        <div className="datagrid_large">
            <DataGrid
            rows={users}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
            />
        </div>
        <div className="datagrid_small">
            <DataGrid
            rows={users}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
            />
        </div>
    </div>
  )
}

export default Users