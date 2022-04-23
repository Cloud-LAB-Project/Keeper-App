import ReactReadMoreReadLess from 'react-read-more-read-less';
import EditNotePopUp from '../EditNote/EditNotePopUp';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import './Post.css';
import qs from 'qs';

export default function MediaCard({ posts, user, setPosts }) {
    async function deletePost(id) {
        console.log(id);
        await fetch('http://localhost:3001/user/delete', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify({ postId: id, userId: user._id }),
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
    }

    const [openEditPopup, setEditOpenPopup] = useState(false);

    const handleEditClick = () => {
        setEditOpenPopup(true);
    };

    const notes = posts.map((post) => {
        return (
            <div className="NoteCard" key={post.id}>
                <Grid container>
                    <Card
                        className="Note"
                        sx={{ maxWidth: 479, minWidth: 352 }}
                    >
                        <CardContent className="col-md-3">
                            <Typography
                                className="Title"
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={'Read more ▼'}
                                    readLessText={'Read less ▲'}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {post.content}
                                </ReactReadMoreReadLess>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton
                                aria-label="delete"
                                onClick={(e) => deletePost(post.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={handleEditClick}>
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                    <EditNotePopUp
                        title={post.title}
                        content={post.content}
                        user={user}
                        setPosts={setPosts}
                        openEditPopup={openEditPopup}
                        setEditOpenPopup={setEditOpenPopup}
                    />
                </Grid>
            </div>
        );
    });

    return <div className="notes">{notes}</div>;
}
