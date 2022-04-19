import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@mui/material';
import SignUp from './SignUp';

export default function Popup({ openSignUp, setSignUp, user, setNewUser }) {
    const handleClose = () => {
        setSignUp(false);
    };

    return (
        <Dialog open={openSignUp} onClose={handleClose} maxWidth="md">
            <DialogTitle>
                <SignUp user={user} setNewUser={setNewUser} setSignUp={setSignUp} />
            </DialogTitle>
        </Dialog>
    );
}
