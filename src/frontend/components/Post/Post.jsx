import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import PushPinIcon from '@mui/icons-material/PushPin';
import Typography from '@mui/material/Typography';
import ReactReadMoreReadLess from 'react-read-more-read-less';
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

    const notes = posts.map((post) => {
        return (
            <div className="NoteCard" key={post.id}>
                <Card className="Note" sx={{ maxWidth: 400 }}>
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
                        <IconButton>
                            <UpdateIcon />
                        </IconButton>
                        <IconButton>
                            <PushPinIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        );
    });

    return <div className="notes">{notes}</div>;
}
