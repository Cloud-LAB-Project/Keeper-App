import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@mui/material';
import CreateNote from './CreateNote';
import './CreateNotePopUp.css';

<<<<<<< HEAD
export default function Popup({ user, openPopup, setOpenPopup }) {
=======
export default function Popup({ user, openPopup, setOpenPopup, setPosts }) {
>>>>>>> refs/remotes/origin/master
    const handleClose = () => {
        setOpenPopup(false);
    };

    return (
        <Dialog open={openPopup} onClose={handleClose} maxWidth="md">
            <DialogContent>
<<<<<<< HEAD
                <CreateNote user={user} />
=======
                <CreateNote
                    user={user}
                    setOpenPopup={setOpenPopup}
                    setPosts={setPosts}
                />
>>>>>>> refs/remotes/origin/master
            </DialogContent>
        </Dialog>
    );
}
