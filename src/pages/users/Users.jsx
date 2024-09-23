import './users.css';
import moment from 'moment';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from '../../redux/apiCalls';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.zealUsers.users);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);
    
    const handleDelete = (id) => {
        deleteUser(id, dispatch);
    };

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
            field: "location",
            headerName: "Address",
            width: 120,
        },
        {
            field: "isAdmin",
            headerName: "isAdmin",
            width: 80,
        },
        {
            field: "createdAt",
            headerName: "Joined At",
            width: 150,
            renderCell: (params) => {
            const date = moment(params.row.createdAt);
            return <span>{date.fromNow()}</span>;
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className="products-buttons">
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            sx={{fontSize: 30}}
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </div>
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