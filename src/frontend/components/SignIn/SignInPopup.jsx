import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import SignIn from './SignIn';

export default function Popup(props) {
    const { title, childern, openSignIn, setSignIn } = props;

    const handleClose = () => {
        setSignIn(false);
    };

    return (
        <Dialog open={openSignIn} onClose={handleClose} maxWidth="md">
            <DialogTitle>
                <SignIn/>
            </DialogTitle>
            
        </Dialog>
    );
}
