import './sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import { ChatBubble, Dashboard, DynamicFeed, ElectricalServices, Logout, Mail, People, Person, Recycling, Report, Storefront, Timeline, TrendingUp, Work } from '@mui/icons-material'
import { userLogout } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
    userLogout(dispatch);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="sidebar-top">
          <h1>ZEAL ADMIN</h1>
        </div>

        <div className="sidebar-links">
          <div className="sidebar-links-wrapper">
            <h2>Dashboard</h2>

            <Link to='/' className='link-main'>
              <div className="sidebar-link">
                <Dashboard />
                <p>Dashboard</p>
              </div>
            </Link>
            <Link to='/' className='link-main'>
              <div className="sidebar-link">
                <Timeline />
                <p>Analytics</p>
              </div>
            </Link>
            <Link to='/orders' className='link-main'>
              <div className="sidebar-link">
                <TrendingUp />
                <p>Orders</p>
              </div>
            </Link>
          </div>

          <div className="sidebar-links-wrapper">
            <h2>Quick Menu</h2>

            <Link to='/users' className='link-main'>
              <div className="sidebar-link">
                <People />
                <p>Users</p>
              </div>
            </Link>
            <Link to='/products' className='link-main'>
              <div className="sidebar-link">
                <Storefront />
                <p>Products</p>
              </div>
            </Link>
            <Link to='/services' className='link-main'>
              <div className="sidebar-link">
                <ElectricalServices />
                <p>Services</p>
              </div>
            </Link>
            <Link to='/recycling' className='link-main'>
              <div className="sidebar-link">
                <Recycling />
                <p>Recycling</p>
              </div>
            </Link>
          </div>

          <div className="sidebar-links-wrapper">
            <h2>New Items</h2>

            <Link to='/new-product' className='link-main'>
              <div className="sidebar-link">
                <Storefront />
                <p>New Product</p>
              </div>
            </Link>
            <Link to='/new-services' className='link-main'>
              <div className="sidebar-link">
                <ElectricalServices />
                <p>New Service</p>
              </div>
            </Link>
            <Link to='/new-user' className='link-main'>
              <div className="sidebar-link">
                <Person />
                <p>New Customer</p>
              </div>
            </Link>
          </div>

          <div className="sidebar-links-wrapper">
            <h2>Notifications</h2>

            <Link to='/' className='link-main'>
              <div className="sidebar-link">
                <Mail />
                <p>Mail</p>
              </div>
            </Link>
            <Link to='/' className='link-main'>
              <div className="sidebar-link">
                <DynamicFeed />
                <p>Feedback</p>
              </div>
            </Link>
            <Link to='/' className='link-main'>
              <div className="sidebar-link">
                <ChatBubble />
                <p>Messages</p>
              </div>
            </Link>
          </div>

          <div className="sidebar-links-wrapper">
            <h2>Dashboard</h2>

            <Link to='/' className='link-main'>
              <div className="sidebar-link">
                <Work />
                <p>Manage</p>
              </div>
            </Link>
            <Link to='/' className='link-main'>
              <div className="sidebar-link">
                <Report />
                <p>Report</p>
              </div>
            </Link>
          </div>

          <div className="sidebar-links-wrapper">
            <button onClick={handleLogout}>
              <Logout />
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar