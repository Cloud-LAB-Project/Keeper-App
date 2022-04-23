import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@mui/material';
import CreateNote from './CreateNote';
import './CreateNotePopUp.css';

export default function Popup({ user, openPopup, setOpenPopup }) {
    const handleClose = () => {
        setOpenPopup(false);
    };

    return (
        <Dialog open={openPopup} onClose={handleClose} maxWidth="md">
            <DialogContent>
                <CreateNote user={user} />
            </DialogContent>
        </Dialog>
    );
}
