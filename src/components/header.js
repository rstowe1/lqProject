import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from '../LQ_Logo.png'

const NavBar = () => {
  return (
    <div >
      <AppBar className='nav-bar' position="static" color='transparent'>
        <Toolbar>
          <Typography variant="title">
            <>
              <img className='LqLogo' href="" src={logo} alt='LQ LOGO' width={182} height={64}/>
            </>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};
export default NavBar;

