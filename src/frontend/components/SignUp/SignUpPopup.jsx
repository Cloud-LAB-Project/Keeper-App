import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import SignUp from './SignUp';

export default function Popup(props) {
    const { title, childern, openSignUp, setSignUp } = props;

    const handleClose = () => {
        setSignUp(false);
    };

    return (
        <Dialog open={openSignUp} onClose={handleClose} maxWidth="md">
            <DialogTitle>
                <SignUp/>
            </DialogTitle>
            
        </Dialog>
    );
}
