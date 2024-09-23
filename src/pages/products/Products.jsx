import { DataGrid } from '@mui/x-data-grid';
import './products.css'
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../../redux/apiCalls';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.zealProducts.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
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
    <div className="productList">
      <h1>Products</h1>

      <div className="datagrid_large">
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          checkboxSelection
        />
      </div>
      <div className="datagrid_small">
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
  )
}

export default Products