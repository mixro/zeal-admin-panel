import { DataGrid } from '@mui/x-data-grid';
import './services.css';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import { deleteService, getServices } from '../../redux/apiCalls';

const Services = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.zealServices.services);

    useEffect(() => {
        getServices(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteService(id, dispatch);
    }

    const columns = [
        { field: "_id", headerName: "ID", width: 80 },
        {
            field: "title",
            headerName: "Title",
            width: 240,
            renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            );
            },
        },
        { field: "desc", headerName: "Desc", width: 210 },
        {
            field: "price",
            headerName: "Price",
            width: 120,
            renderCell: (params) => {
                return (
                  <div className="product-table-price">
                    <p>Tsh. {params.row.price}</p>
                  </div>
                )
              }
        },
        {
            field: "technicians",
            headerName: "Technicians",
            width: 80,
        },
        {
            field: "createdAt",
            headerName: "Created at",
            width: 120,
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
                    <Link to={"/service/" + params.row._id}>
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
        <h1>Services</h1>
        
        <div className="datagrid_large">
            <DataGrid
            rows={services}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
            />
        </div>
        <div className="datagrid_small">
            <DataGrid
            rows={services}
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

export default Services