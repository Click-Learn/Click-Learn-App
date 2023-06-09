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
import { AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLight, setDark } from "../../../App/lightDarkSlice";
import Avatar from "@mui/material/Avatar";
import { logoutRedux } from "../../../App/authSlice";
import LoginButton from "../Main/Home/Login/LoginButton/LoginButton";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header(): JSX.Element {
    const webMode = useSelector((state: any) => state.chosenMode.toggle)
    let dispatch = useDispatch();
    const isLogin = useSelector((state : any) => state.authSlice)

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
            dispatch(setLight())
            setIsDarkMode(!isDarkMode)
        } else {
            dispatch(setDark())
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

                            <img className="header_logo" style={{cursor: 'pointer'}} src={logo} alt="" onClick={() => navigate("/") } />

                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                            
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <AiOutlineMenu />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                
                            >

                        <MenuItem sx={{justifyContent: 'flex-end', WebkitJustifyContent: 'flex-end'}} onClick={handleCloseNavMenu} component={RouterLink} to="/dashboard">
                        אזור אישי
                        </MenuItem>

                        <MenuItem sx={{justifyContent: 'flex-end', WebkitJustifyContent: 'flex-end'}} onClick={handleCloseNavMenu} component={RouterLink} to="/chat">
                        צ'אט
                        </MenuItem>

                        <MenuItem sx={{justifyContent: 'flex-end', WebkitJustifyContent: 'flex-end'}} onClick={handleCloseNavMenu} component={RouterLink} to="/games">
                        משחקים
                        </MenuItem>

                        <MenuItem sx={{justifyContent: 'flex-end', WebkitJustifyContent: 'flex-end'}} onClick={handleCloseNavMenu} component={RouterLink} to="/articles">
                        מאמרים
                        </MenuItem>

                        <MenuItem sx={{justifyContent: 'flex-end', WebkitJustifyContent: 'flex-end'}} onClick={handleCloseNavMenu} component={RouterLink} to="/blog">
                        בלוג
                        </MenuItem>

                            </Menu>
                            
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
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
                            <img src={logo} style={{cursor: 'pointer'}} width={150} alt=""  onClick={() => navigate("/")}/>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '15px' }}>
                        <MenuItem onClick={handleCloseNavMenu}>
                        <RouterLink to="/blog">בלוג</RouterLink>
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/chat">
                        צ'אט
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/games">
                        משחקים
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/articles">
                        מאמרים
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/dashboard">
                        אזור אישי
                        </MenuItem>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, fontSize: '35px !important' }} >
                                    {isLogin ? 
                                    <Avatar alt={isLogin.name} src={isLogin.picture} />
                                    : 
                                     <CiSettings />
                                    }
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
                                {/* {settings.map((setting) => ( */}
                                <MenuItem key={"2"} onClick={() => {
                                    handleCloseUserMenu()
                                    clickedWebMode()
                                    }} sx={{justifyContent: 'end'}}>
                                    {webMode ? 
                                        <Typography sx={{display: 'flex', gap: '10px', alignItems: 'center'}} textAlign="center"> <span>הפוך למצב כהה </span> <MdDarkMode/></Typography>
                                        :
                                        <Typography  sx={{display: 'flex', gap: '10px', alignItems: 'center'}} textAlign="center"> <span>הפוך למצב בהיר </span> <BsSun/></Typography>
                                    }
                                    </MenuItem>
                                {isLogin ?
                                    <MenuItem key={"logout"} sx={{justifyContent: 'end'}} onClick={() => {
                                        handleCloseUserMenu()
                                        dispatch(logoutRedux())
                                    }}>
                                        <Typography textAlign="center">התנתק</Typography>
                                    </MenuItem>
                                : 
                                    <MenuItem key={"login"}  >
                                        <Typography textAlign="center"  sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}><span >התחבר</span> <LoginButton/></Typography>
                                    </MenuItem>
                                }
                                   
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>




    );
}

export default Header;
