import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('user')
    sessionStorage.clear()
    navigate("/")
  }
  const handleLogin = () => {
    navigate("/login")
  }
  return (
    <>
      <AppBar position="static" sticky="top" sx={{ background:"transparent", boxShadow: 'none', color:"#0096FF"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex'}, mr: 1, fontSize: "2rem" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: "2rem",
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TEDWATCH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              <div style={{display: "flex",flexDirection:"column", fontSize:"1rem"}}>
                  <Link to='/' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Home</Link>
                  <Link to='/about' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>About</Link>
                  <Link to='/contact' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Contact Us</Link>
              </div>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TEDWATCH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Link
                to='/'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                Home
              </Link>
              <Link
                to='/about'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                About
              </Link>
              <Link
                to='/contact'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                Contact Us
              </Link>
            
          </Box>

          {props.loginShow && <Button color="inherit" style={{backgroundColor:"/0096FF", color:"white"}} onClick={handleLogin}>Login</Button>}
          {props.logoutShow && <Button color="inherit" style={{backgroundColor:"/0096FF", color:"white"}} onClick={handleLogout}>Logout</Button>}
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navbar;

