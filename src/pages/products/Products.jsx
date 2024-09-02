import { DataGrid } from '@mui/x-data-grid';
import './products.css'
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ProductsList } from '../../Dummydata';
import { Rating } from '@mui/material';

const Products = () => {
  const products = ProductsList;

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src='../../../images/cb.jpg' alt="" />
            {params.row.name}
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
            {params.row.status === 1 ? <button className="onstock-button">On stock</button> : <button className="offstock-button">Off stock</button>}
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
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
            />
          </>
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
          getRowId={(row) => row.id}
          pageSize={8}
          checkboxSelection
        />
      </div>
      <div className="datagrid_small">
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row.id}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default Products