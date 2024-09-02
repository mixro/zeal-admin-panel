import { DeleteOutline } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import { OrdersList } from '../../Dummydata';
import { DataGrid } from '@mui/x-data-grid';
import './orders.css';

const Orders = () => {
    const orders = OrdersList;

    const columns = [
        { field: "_id", headerName: "ID", width: 100 },
        {
          field: "user",
          headerName: "User",
          width: 180,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <Link to={`/user/${params.row.userId}`} className="link">
                  <img className="userListImg" src="../../../images/user.png" alt="IM" />
                </Link>
                Zabron Raphael
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 170 },
        {
          field: "phoneNumber",
          headerName: "phoneNumber",
          width: 140,
        },
        {
          field: "createdAt",
          headerName: "created At",
          width: 140,
          renderCell: (params) => {
            /*const date = moment(params.row.createdAt);*/
            return <span>a month ago</span>;
          },
        },
        {
          field: "address",
          headerName: "Address",
          width: 100,
        },
        {
          field: "status",
          headerName: "Status",
          width: 90,
          renderCell: (params) => {
            return (
              <>
                <button className="userListStatus" style={{background: params.row.status === "pending" ? "#ceaf26" : "#5c9ce6"}}>{params.row.status}</button>
              </>
            );
          },
        },
        {
          field: "action",
          headerName: "Action",
          width: 120,
          renderCell: (params) => {
            return (
              <>
                <Link to={`/order/` + params.row._id}>
                  <button className="userListEdit">view</button>
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
        <h1>Products Orders</h1>

        <div className="datagrid_large">
            <DataGrid
            rows={orders}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
            />
        </div>
        <div className="datagrid_small">
            <DataGrid
            rows={orders}
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

export default Orders