import { AttachMoney, DensityMedium, ElectricalServices, People, Recycling } from '@mui/icons-material'
import './topbar.css'
import { Link } from 'react-router-dom'
import { Box, Drawer } from '@mui/material'
import React, { useState } from 'react'
import MenuComp from '../menu/MenuComp'

const Topbar = () => {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 260}}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="Small_Sidebar_container">
        <div className="sidebar_logo">
          <p>ZEAL ADMIN</p>
        </div>
        
        <MenuComp />
      </div>
    </Box>
  );


  return (
    <div className="topbar-container">
      <div className="topbar-menu-icon">
        {['left'].map((anchor) => (
          <React.Fragment key={anchor} >
              <DensityMedium sx={{fontSize: 30, cursor: "pointer"}} onClick={toggleDrawer(anchor, true)} />   
              <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
              >
                  {list(anchor)}
              </Drawer>
          </React.Fragment>
        ))}
      </div>

      <div className="topbar-top">
        <Link to='/' className='link-main'>
          <div className="topbar-icon">
            <Recycling sx={{fontSize: 30}} />
            <div className="topbar-icon-number">
              <p>8</p>
            </div>
          </div>
        </Link>
        <Link to='/' className='link-main'>
          <div className="topbar-icon">
            <ElectricalServices sx={{fontSize: 30}} />
            <div className="topbar-icon-number">
              <p>5</p>
            </div>
          </div>
        </Link>
        <Link to='/' className='link-main'>
          <div className="topbar-icon">
            <AttachMoney sx={{fontSize: 30}} />
            <div className="topbar-icon-number">
              <p>9</p>
            </div>
          </div>
        </Link>
        <Link to='/' className='link-main'>
          <div className="topbar-icon">
            <People sx={{fontSize: 30}} />
            <div className="topbar-icon-number">
              <p>6</p>
            </div>
          </div>
        </Link>
        <div className="topbar-profile">
          <img src='/images/zeal-logo.png' alt='PR' />
        </div>
      </div>
    </div>
  )
}

export default Topbar