import { DeleteOutline } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';
import './orders.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrders } from '../../redux/apiCalls';

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.zealOrders.orders);

    useEffect(() => {
      getOrders(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
      deleteOrder(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 100 },
        {
          field: "user",
          headerName: "User",
          width: 180,
          renderCell: (params) => {
            return (
              <div className="userListUser orderUser">
                <Link to={`/user/${params.row.userId}`} className="link order-user-img">
                  <img className="userListImg" src="../../../images/user.png" alt="IM" />
                </Link>
                {params.row.name}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 170 },
        {
          field: "amount",
          headerName: "Amount",
          width: 120,
          renderCell: (params) => {
            return (
              <div className="product-table-price">
                <p>Tsh. {params.row.amount}</p>
              </div>
            )
          }
        },
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
            const date = moment(params.row.createdAt);
            return <span>{date.fromNow()}</span>;
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
          width: 120,
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
              <div className="products-buttons">
                  <Link to={`/order/` + params.row._id}>
                    <button className="userListEdit">view</button>
                  </Link>
                  <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(params.row._id)}
                  />
              </div>
            );
          },
        },
    ];

  return (
    <div className="userList orderList">
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