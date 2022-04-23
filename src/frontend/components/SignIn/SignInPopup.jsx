import { DialogContent } from '@mui/material';
import { Dialog } from '@material-ui/core';
import SignIn from './SignIn';
import React from 'react';

export default function SignInPopUp({
    openSignIn,
    setSignIn,
    user,
    setNewUser,
    setPosts,
}) {
    const handleClose = () => {
        setSignIn(false);
    };

    return (
        <Dialog open={openSignIn} onClose={handleClose} maxWidth="md">
            <DialogContent>
                <SignIn
                    user={user}
                    setNewUser={setNewUser}
                    setPosts={setPosts}
                    setSignIn={setSignIn}
                />
            </DialogContent>
        </Dialog>
    );
}
