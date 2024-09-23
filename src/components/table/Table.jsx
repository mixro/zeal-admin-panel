import { Rating } from '@mui/material';
import './table.css'
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Table = () => {
    const products = useSelector((state) => state.zealProducts.products);

    const columns = [
        { field: "_id", headerName: "ID", width: 80 },
        {
          field: "Product",
          headerName: "PRODUCT",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="table-products">
                <img className="table-products-image" src={params.row.img} alt="CB" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "desc", headerName: "DESC", width: 210 },
        { 
          field: "status", 
          headerName: "STATUS",
          width: 160, 
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
                <Rating name='half-rating' sx={{color: "#e99f00", display:{xs: 15, sm: 10,}}} size="small" value={4} precision={0.5} readOnly />
              </div>
            )
          }
        },
        {
          field: "view",
          headerName: "VIEW",
          width: 100,
          renderCell: (params) => {
            return (
              <div className="table-view">
                <Link to={"/product/" + params.row._id}>
                  <button>View</button>
                </Link>
              </div>
            )
          }
        }
    ];

  return (
    <div className="table-container">
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
      <div className="datagrid_small fit-datagrid_small">
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

export default Table