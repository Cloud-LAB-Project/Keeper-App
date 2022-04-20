import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@mui/material';
import SignUp from './SignUp';

export default function SignUpPopup({
    openSignUp,
    setSignUp,
    user,
    setNewUser,
}) {
    const handleClose = () => {
        setSignUp(false);
    };

    return (
        <Dialog open={openSignUp} onClose={handleClose} maxWidth="md">
            <DialogContent>
                <SignUp
                    user={user}
                    setNewUser={setNewUser}
                    setSignUp={setSignUp}
                />
            </DialogContent>
        </Dialog>
    );
}
