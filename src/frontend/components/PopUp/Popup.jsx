import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import './Popup.css';

export default function Popup(props) {
    const { openPopup, setOpenPopup } = props;

    const handleClose = () => {
        setOpenPopup(false);
    };

    return (
        <Dialog open={openPopup} onClose={handleClose}>
            <DialogTitle>
                <div>
                    <TextField
                        required
                        fullWidth
                        autoFocus
                        id="outlined-search"
                        label="Title"
                        style={{ width: '27em' }}
                    />
                </div>
            </DialogTitle>
            <DialogContent>
                <TextField
                    required
                    id="outlined-multiline-static"
                    label="Take a Note ..."
                    multiline
                    style={{ width: '34em' }}
                    rows={10}
                />
            </DialogContent>
            <DialogContent>
                <Button
                    variant="contained"
                    size="medium"
                    id="submit-button"
                    color="primary"
                >
                    Submit
                </Button>
            </DialogContent>
        </Dialog>
    );
}
