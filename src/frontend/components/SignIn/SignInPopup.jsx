import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@mui/material';
import SignIn from './SignIn';

export default function Popup({ openSignIn, setSignIn, user, setNewUser }) {
    const handleClose = () => {
        setSignIn(false);
    };

    return (
        <Dialog open={openSignIn} onClose={handleClose} maxWidth="md">
            <DialogTitle>
                <SignIn
                    user={user}
                    setNewUser={setNewUser}
                    setSignIn={setSignIn}
                />
            </DialogTitle>
        </Dialog>
    );
}
