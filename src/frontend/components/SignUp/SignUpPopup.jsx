import { DialogContent } from '@mui/material';
import { Dialog } from '@material-ui/core';
import SignUp from './SignUp';
import React from 'react';

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
