import { DialogContent } from '@mui/material';
import { Dialog } from '@material-ui/core';
import CreateNote from './CreateNote';
import './CreateNotePopUp.css';
import React from 'react';

export default function CreateNotePopup({
    user,
    openPopup,
    setOpenPopup,
    setPosts,
}) {
    const handleClose = () => {
        setOpenPopup(false);
    };

    return (
        <Dialog open={openPopup} onClose={handleClose} maxWidth="md">
            <DialogContent>
                <CreateNote
                    user={user}
                    setOpenPopup={setOpenPopup}
                    setPosts={setPosts}
                />
            </DialogContent>
        </Dialog>
    );
}
