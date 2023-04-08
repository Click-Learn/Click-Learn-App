import "./Header.css";
import logo from "./clickLearnNewLogo.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { BsSun } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLight, setDark } from "../../../App/lightDarkSlice";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header(): JSX.Element {
    const webMode = useSelector((state: any) => state.chosenMode.toggle)
    let dispatch = useDispatch();

    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    function clickedWebMode() {
        if(isDarkMode){
          dispatch(setDark())
          setIsDarkMode(!isDarkMode)
        } else {
          dispatch(setLight())
          setIsDarkMode(!isDarkMode)
        }
      }
    return (
        <div className="Header">
          
            <AppBar position="static">

                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#000000',
                                textDecoration: 'none',
                            }}
                        >

                            <img className="header_logo" src={logo} alt="" onClick={() => navigate("/") } />

                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                {/* <MenuIcon /> */}
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
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
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
                            <img src={logo} width={200} alt="" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '15px' }}>
                        <MenuItem onClick={handleCloseNavMenu}>
                        <RouterLink to="/blog">בלוג</RouterLink>
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/games">
                        משחקים
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/dashboard">
                        אזור אישי
                        </MenuItem>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                                <IconButton onClick={clickedWebMode}   sx={{ p: 0, fontSize: '35px !important', margin: '0 25px' }} >
                                    { isDarkMode ? 
                                      <MdDarkMode style={{color: 'white'}}/>
                                      : 
                                      <BsSun />
                                    }
                                </IconButton>          
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, fontSize: '35px !important' }} >
                                    <CiSettings />
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
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>




    );
}

export default Header;
