import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import qs from 'qs';

const theme = createTheme();

export default function EditNote({
    note,
    user,
    posts,
    setPosts,
    setEditOpenPopup,
}) {
    const [editNote, setEditNote] = React.useState(note);

    function handleChange(e){
        const {name, value} = e.target;
        setEditNote(note => {
            return {
                ...note,
                [name]: value
            }
        });
    }

    async function handleUpdate(){
        const noteData = await fetch('http://localhost:3001/user/update', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify(editNote),
        });

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

        setPosts(postsJson);

        setEditOpenPopup(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
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
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                    autoComplete="title"
                                    value={editNote.title}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    multiline={true}
                                    rows={10}
                                    required
                                    fullWidth
                                    name="content"
                                    label="Take a Note"
                                    id="content"
                                    autoComplete="content"
                                    value={editNote.content}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleUpdate}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
