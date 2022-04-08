import React from 'react'
import {Dialog, DialogActions} from '@material-ui/core';
import { DialogContent, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import './Popup.css';



export default function Popup(props) {
    
    const {title, childern, openPopup, setOpenPopup} = props;
    
    const handleClose = () => {
        setOpenPopup(false);
      };

    return (
        <Dialog open={openPopup} onClose={handleClose}>
            <DialogTitle>
                <TextField id="outlined-search" label="Title"  sx={{ m: 1, width: '43ch' }}/>
            </DialogTitle>
            
            <DialogContent>
                <TextField
                    id="outlined-multiline-static"
                    label="Take a Note..."
                    multiline
                    rows={10}
                    sx={{ m: 1, width: '60ch' }}
                />
                
            </DialogContent>
            <DialogContent>
            <Button variant="contained" size="medium" id="submit-button">
                    Submit
                </Button>
            </DialogContent>
            
        </Dialog>
    )

}