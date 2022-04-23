import { DialogContent } from '@mui/material';
import { Dialog } from '@material-ui/core';
import EditNote from './EditNote';
import React from 'react';

export default function EditNotePopup({
    title,
    content,
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
                    title={title}
                    content={content}
                    user={user}
                    setEditOpenPopup={setEditOpenPopup}
                    setPosts={setPosts}
                />
            </DialogContent>
        </Dialog>
    );
}
