import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import PushPinIcon from '@mui/icons-material/PushPin';
import AlarmIcon from '@mui/icons-material/Alarm';
import Typography from '@mui/material/Typography';
import './Post.css'

export default function MediaCard({ posts }) {
    const notes = posts.map(post => {
        return (
            <div className='NoteCard' key={post.id}>
                <Card className='Note' sx={{ maxWidth: 400 }}>
                    <CardContent>
                        <Typography className='Title' gutterBottom variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton>
                            <UpdateIcon />
                        </IconButton>
                        <IconButton>
                            <PushPinIcon />
                        </IconButton>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        )
    });

    return (
        <div className='notes'>
            {notes}
        </div>
    );
}