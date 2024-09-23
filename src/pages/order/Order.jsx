import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import './order.css'
import { Link, useLocation } from 'react-router-dom'
import { AttachMoney, BarChart, CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish, RoomOutlined, Storefront } from '@mui/icons-material'
import { Rating } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../redux/apiCalls'

const Order = () => {
    const location = useLocation();
    const orderId = location.pathname.split("/")[2];
    const [inputs, setInputs] = useState({});
    const [updateButtonClicked, setUpdateButtonClicked] = useState(false);
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.zealOrders);
    const order = useSelector((state) => state.zealOrders.orders.find((order) => order._id === orderId));
    const products = useSelector((state) => state.zealOrders.orders.find((order) => order._id === orderId)).products;

    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }; 

    const handleClick = (e) => {
      e.preventDefault();
      const id = orderId;
      const order = { ...inputs };
      updateOrder(id, dispatch, order);
      setUpdateButtonClicked(true);
    }
    
    const columns = [
      { field: "_id", headerName: "ID", width: 100 },
      {
        field: "product",
        headerName: "Product",
        width: 180,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.title}
            </div>
          );
        },
      },
      { field: "desc", headerName: "DESC", width: 210 },
      {
        field: "price",
        headerName: "Price",
        width: 140,
        renderCell: (params) => {
          return (
            <div className="product-table-price">
              <p>Tsh. {params.row.price}</p>
            </div>
          )
        }
      },
      { 
        field: "status", 
        headerName: "STATUS",
        width: 110, 
        renderCell: (params) => {
          return (
            <div className='table-status'>
              {params.row.status === true ? <button className="onstock-button">On stock</button> : <button className="offstock-button">Off stock</button>}
            </div>
          )
        }
      },
      {
        field: "rating",
        headerName: "RATING",
        width: 140,
        renderCell: (params) => {
          return (
            <div className='table-rating'>
              <Rating name='half-rating' sx={{color: "#e99f00", display:{xs: 15, sm: 10,}}} size="small" value={params.row.rating} precision={0.5} readOnly />
            </div>
          )
        }
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="products-buttons">
              <Link to={"/product/" + params.row._id}>
                <button className="productListEdit">Edit</button>
              </Link>
            </div>
          );
        },
      },
    ];

  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">ORDER</h1>
            <Link to="/">
                <button className="userAddButton">Home</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                  <img
                      src="../../../images/user.png"
                      alt=""
                      className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                  <span className="userShowUsername">{order._id}</span>
                  <span className="userShowUserTitle">Order ID</span>
                  </div>
              </div>
              <div className="userShowBottom">
                  <span className="userShowTitle">User Details</span>
                  <div className="userShowInfo">
                      <PermIdentity className="userShowIcon" />
                      <span className="userShowInfoTitle">{order.name}</span>
                  </div>
                  
                  <div className="userShowInfo">
                      <BarChart className="userShowIcon" />
                      <span className="userShowInfoTitle">{order.status}</span>
                  </div>

                  <div className="userShowInfo">
                      <Storefront className="userShowIcon" />
                  <span className="userShowInfoTitle">products: {order.products.length}</span>
                  </div>

                  <div className="userShowInfo">
                      <AttachMoney className="userShowIcon" />
                      <span className="userShowInfoTitle">Tsh. {order.amount}</span>
                  </div>

                  <div className="userShowInfo">
                      <CalendarToday className="userShowIcon" />
                      <span className="userShowInfoTitle">a week ago</span>
                  </div>

                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                      <PhoneAndroid className="userShowIcon" />
                      <span className="userShowInfoTitle">{order.phoneNumber}</span>
                  </div>

                  <div className="userShowInfo">
                      <MailOutline className="userShowIcon" />
                      <span className="userShowInfoTitle">{order.email}</span>
                  </div>

                  <div className="userShowInfo">
                      <RoomOutlined className="userShowIcon" />
                      <span className="userShowInfoTitle">{order.address}</span>
                  </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input
                          type="text"
                          name="username"
                          placeholder={order.name}
                          className="userUpdateInput"
                          //onChange={handleChange}
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Order Id</label>
                        <input
                          type="text"
                          name="orderI"
                          placeholder="84594588osfkjkc"
                          className="userUpdateInput"
                          //onChange={handleChange}
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Created At</label>
                        <input
                        type="text"
                        name="createdAt"
                        placeholder="A week ago"
                        className="userUpdateInput"
                        //onChange={handleChange}
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input
                        type="text"
                        placeholder="zabronraphael@gmail.com"
                        className="userUpdateInput"
                        //onChange={handleChange}
                        name="email"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input
                        type="text"
                        //placeholder={order.phoneNumber}
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input
                        type="text"
                        placeholder='upanga, dar'
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Status</label>
                        <select name="status" onChange={handleChange} id="active" style={{border: "none", color: "gray", outline: "none", borderBottom: "1px solid gray", paddingBottom: 5}}>
                          <option value="pending">pending</option>
                          <option value="success">success</option>
                        </select>
                    </div>  
                  </div>
                  <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img
                          className="userUpdateImg"
                          src="../../../images/user.png"
                          alt=""
                        />
                        <label htmlFor="file">
                          <Publish className="userUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                    <div className="productButton-container">
                        <button onClick={handleClick} className="userUpdateButton">{updateButtonClicked ? (isFetching ? "Updating.." : "Update") : "Update"}</button>
                        {updateButtonClicked && error && <p style={{color: "red"}}>error occurred</p>} 
                    </div>
                  </div>
              </form>
            </div>
        </div>
        <div className="userTitleContainer" style={{paddingTop: 40}}>
            <h2 className="userTitle" style={{paddingBottom: 20}}>ORDER PRODUCTS</h2>
        </div>
        <div className="orderContainer">
            <div className="userList" style={{height:  "90vh"}}>
                <DataGrid
                    rows={products}
                    disableSelectionOnClick
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSize={8}
                    checkboxSelection
                />
            </div>
        </div>
    </div>
  )
}

export default Order