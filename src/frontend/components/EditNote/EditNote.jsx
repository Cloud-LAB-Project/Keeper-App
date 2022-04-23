import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';

const theme = createTheme();

export default function EditNote({
    title,
    content,
    user,
    posts,
    setPosts,
    setEditOpenPopup,
}) {
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
                                    value={title}
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
                                    value={content}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
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
