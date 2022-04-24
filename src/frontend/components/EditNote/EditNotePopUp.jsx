import { DialogContent } from '@mui/material';
import { Dialog } from '@material-ui/core';
import EditNote from './EditNote';
import React from 'react';

export default function EditNotePopup({
    note,
    user,
    setPosts,
    openEditPopup,
    setEditOpenPopup,
}) {
    const handleClose = () => {
        setEditOpenPopup(false);
    };

    return (
        <Dialog open={openEditPopup} onClose={handleClose} maxWidth="md">
            <DialogContent>
                <EditNote
                    note={note}
                    user={user}
                    setEditOpenPopup={setEditOpenPopup}
                    setPosts={setPosts}
                />
            </DialogContent>
        </Dialog>
    );
}
