import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import { dark_red, google_login, getitems } from '../store/action/action';



import "../css/App.css"
import { connect } from 'react-redux';

const pages = ['Fetch Database', 'List Your Item', 'Sign In'];

const ResponsiveAppBar = (props) => {





  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };



  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  console.log(props.user.photo)

  const sign = () => {
    console.log("signnnn")
  }

  return (


    <AppBar position="static" sx={{
      display: { backgroundColor: "rgb(225, 225, 225 )" },

    }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="heading"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            IAD Project
          </Typography>



          <Box sx={{ flexGrow: 1, backgroundColor: "red", display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem>
                {/* <Typography textAlign="center"> </Typography> */}
                <select onChange={handleCloseNavMenu} className="btn btn-outline-light custom-select mr-sm-2" id="inlineFormCustomSelect">

                  <option value="1">☀️</option>
                  <option value="2">🌙</option>

                </select>
              </MenuItem>


              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Fetch</Typography>
              </MenuItem>


              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">List</Typography>
              </MenuItem>


              <MenuItem onClick={handleCloseNavMenu}>
                <Typography onclick={() => props.google_login()} textAlign="center">Sign</Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ backgroundColor: "pink", flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            IAD
          </Typography>


          <Box id="boxx" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <div className='nav_div' >


              <Button

                onClick={sign}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[0]}
              </Button>


              <Button

                onClick={sign}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[1]}
              </Button>


              <Button

                onClick={() => props.google_login()}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[2]}
              </Button>
            </div>




            {props.user.name != "" ? 
            
            <div className='dd' >
              <img className='choti_img' src={props.user.photo} />
            </div>

              :
              null
            }



          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};




const mapStateToProps = (state) => ({
  user: state.user,

})


const mapDispatchToProps = (dispatch) => ({
  dark_red: () => dispatch(dark_red()),
  getitems: () => dispatch(getitems()),
  google_login: () => dispatch(google_login())
})


export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);
