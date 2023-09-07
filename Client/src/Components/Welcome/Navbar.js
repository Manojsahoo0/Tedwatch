import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Welcome.css";
import SearchTab from './Search';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';


function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    navigate("/")
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
            href="/welcome"
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
              <div style={{display: "flex",flexDirection:"column",fontSize:"1rem"}}>
                  <Link to='/welcome' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Home</Link>
                  <Link to='/discover/tv' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Tv Shows</Link>
                  <Link to='/discover/movies' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Movies</Link>
                  <Link to='/welcome/watchlist' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Watchlist</Link>
                  <Link to='/welcome/pricing' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Pricing</Link>
              </div>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/welcome"
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
                to='/welcome'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                Home
              </Link>
              <Link
                to='/discover/tv'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                TV Shows
              </Link>
              <Link
                to='/discover/movies'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                Movies
              </Link>
              <Link
                to='/welcome/watchlist'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                Watchlist
              </Link>
              <Link
                to='/welcome/pricing'
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{padding:"10px", textDecoration:"none"}}
              >
                Pricing
              </Link>
          </Box>
          <SearchTab />
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div style={{display: "flex",flexDirection:"column",fontSize:"1rem"}}>
                  <Link to='/welcome/profile' textalign="center" style={{color:"black", textDecoration:"none", margin:"5px 20px"}}>Profile</Link>
                  <MenuItem onClick={handleLogout}>
                  <Typography textalign="center" style={{color:"black", textDecoration:"none", margin:"5px"}}>Logout</Typography>
                </MenuItem>
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navbar;

