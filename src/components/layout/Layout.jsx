import './layout.css'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'
import Dashboard from '../../pages/dashboard/Dashboard';
import Products from '../../pages/products/Products';
import Orders from '../../pages/orders/Orders';
import Users from '../../pages/users/Users';
import Services from '../../pages/services/Services';
import Recycling from '../../pages/recycling/Recycling';
import NewProduct from '../../pages/newProduct/NewProduct';
import NewService from '../../pages/newService/NewService';
import User from '../../pages/user/User';
import NewUser from '../../pages/newUser/NewUser';
import Product from '../../pages/product/Product';
import Service from '../../pages/service/Service';
import Order from '../../pages/order/Order';

const Layout = () => {
  return (
    <div className="layout-component">
        <div className="layout-container">
            <div className="layout-sidebar">
                <Sidebar />
            </div>
            <div className="layout-body">
                <div className="layout-topbar">
                    <Topbar />
                </div>
                <div className="layout-main">
                    <Routes>
                        <Route path='/' element={<Dashboard />} />

                        <Route path='/orders' element={<Orders />} />
                        <Route path='/order/:id' element={<Order />} />
                        
                        <Route path='/products' element={<Products />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/new-product' element={<NewProduct />} />
                        
                        <Route path='/users' element={<Users />} />
                        <Route path='/user/:id' element={<User />} />
                        <Route path='/new-user' element={<NewUser />} />

                        <Route path='/services' element={<Services />} />
                        <Route path='/service/:id' element={<Service />} />
                        <Route path='/new-services' element={<NewService />} />
                        
                        <Route path='/recycling' element={<Recycling />} />
                    </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout