import CreateNotePopup from '../CreateNote/CreateNotePopUp';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import SignInPopup from '../SignIn/SignInPopup';
import SignUpPopup from '../SignUp/SignUpPopup';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Logo from '../images/keeper.png';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import './Navbar.css';

const pages = ['Create a Note'];

const Navbar = ({ user, setNewUser, posts, setPosts }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [openSignIn, setSignIn] = useState(false);
    const [openSignUp, setSignUp] = useState(false);

    const handleClickOpen = () => {
        setOpenPopup(true);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const mobileScreen = () => {
        setOpenPopup(true);
        setAnchorElNav(null);
    };

    const handleLogout = () => {
        document.cookie = 'uid=;';
        setNewUser(null);
    };

    return (
        <AppBar style={{ background: '#487AFA', opacity: '1'}} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <a href="/">
                            <img className="logo" src={Logo} alt="keeper" />
                            {/* <div className='logo-title'>Keeper</div> */}
                        </a>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
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
                        {user && (
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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={mobileScreen}>
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        )}
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <a href="../AppInfo/AppInfo">
                            <img className="logo" src={Logo} alt="keeper" />
                        </a>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {user && (
                            <Button
                                onClick={handleClickOpen}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Create a Note
                            </Button>
                        )}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {!user && (
                            <Button
                                onClick={() => {
                                    setSignIn(true);
                                }}
                                color="inherit"
                                style={{ marginRight: '1em' }}
                            >
                                Sign In
                            </Button>
                        )}
                        {!user && (
                            <Button
                                onClick={() => {
                                    setSignUp(true);
                                }}
                                color="inherit"
                                style={{ marginRight: '1em' }}
                            >
                                Sign Up
                            </Button>
                        )}
                        {user && (
                            <Button
                                onClick={handleLogout}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Logout
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
            <CreateNotePopup
                user={user}
                setPosts={setPosts}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            />
            <SignInPopup
                user={user}
                setNewUser={setNewUser}
                openSignIn={openSignIn}
                setPosts={setPosts}
                setSignIn={setSignIn}
            />
            <SignUpPopup
                user={user}
                setNewUser={setNewUser}
                openSignUp={openSignUp}
                setSignUp={setSignUp}
            />
        </AppBar>
    );
};
export default Navbar;
