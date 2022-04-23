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
import MenuItem from '@mui/material/MenuItem';
import Logo from '../images/keeper.png';
import './Navbar.css';
import Popup from '../CreateNote/CreateNotePopUp';
import SignInPopup from '../SignIn/SignInPopup';
import SignUpPopup from '../SignUp/SignUpPopup';

const pages = ['Create a Note'];

const Navbar = ({ user, setNewUser, posts, setPosts }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [openPopup, setOpenPopup] = React.useState(false);
    const [openSignIn, setSignIn] = React.useState(false);
    const [openSignUp, setSignUp] = React.useState(false);

    const handleClickOpen = () => {
        setOpenPopup(true);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // let navigate = useNavigate();

    // const routeChange = () => {
    //     let path = '/signin';
    //     navigate(path);
    // };

    return (
        <AppBar style={{ background: '#487AFA' }} position="sticky">
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
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
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
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Create a Note
                            </Button>
                        )}

                        {/* <Button
                            // onClick={handleClickOpen}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Change Mode
                        </Button> */}
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleClickOpen}
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {!user && (
                            <Button
                                onClick={() => {
                                    setSignIn(true);
                                }}
                                // onClick={routeChange}
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
                                // onClick={routeChange}
                                color="inherit"
                                style={{ marginRight: '1em' }}
                            >
                                Sign Up
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
            <Popup user={user} setPosts={setPosts} openPopup={openPopup} setOpenPopup={setOpenPopup} />
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
