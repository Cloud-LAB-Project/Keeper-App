import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import * as React from 'react';
import qs from 'qs';

const theme = createTheme();

export default function SignIn({ user, setNewUser, setSignIn, setPosts }) {
    const [warn, setWarn] = React.useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const credentials = {
            email: data.get('email'),
            password: data.get('password'),
        };

        const userData = await fetch('http://localhost:3001/user/login', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify(credentials),
        });

        const user = await userData.json();

        if (!user.password) {
            setWarn(true);
            return;
        }

        const posts = await fetch(
            'http://localhost:3001/user/post?user=' + user._id,
            {
                method: 'GET',
                mode: 'cors',
            }
        );

        let postsJson = await posts.json();
        postsJson = postsJson.map((post) => {
            post['id'] = post['_id'];
            delete post['_id'];
            return post;
        });

        if (user) {
            setNewUser(user);
            setSignIn(false);
            setPosts(postsJson);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
                        marginBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {warn && (
                            <p style={{ textAlign: 'center', color: 'red' }}>
                                Email and Password didn't match
                            </p>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
