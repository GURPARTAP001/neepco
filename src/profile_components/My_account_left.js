import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Doc_upload from './Profile_upload_doc/Doc_upload';

function My_account_left() {
  //this is the state for the upload doc button to store its state
  const [showForm, setShowForm] = useState(false);

  //this states are to be used in the upload doc function
  const [open, setOpen] = useState(false);

    //this function is for the upload doc btn
    const handleClickOpen = () => {
        setOpen(true);
    };

      //this function is for the upload doc btn
    const handleClose = () => {
        setOpen(false);
    };

  const handle_upload_doc=()=>{
    setShowForm(!showForm);

  }
  return (
    <div>
        <Box sx={{ background: "rgb(221, 225, 229)",display:"flex",flexDirection:"column",alignItems:"center",width:"40vw",height:"85vh",marginTop:"10px",borderRadius:"10px",marginLeft:"15px" }}>
        <Avatar
          alt="vender picture"
          src="./images/a1.jpg"
          sx={{ width: 200, height: 200 ,marginTop:"5px"}}
        />
        <Box sx={{background:"rgb(206, 211, 215)",width:"80%",padding:"10px",marginTop:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Typography component="div" variant="h6">
          Name:hjgfdfgf sharma
        </Typography>
        <Typography component="div" variant="h6">
          Email:sfsa@gmail.com
        </Typography>
        <Typography component="div" variant="h6">
          Phone No.:453678433
        </Typography>
        <Typography component="div" variant="h6">
          Vender-type:steel vender
        </Typography>
        </Box >
        <Box>
        <Button variant="contained" color="primary" onClick={handleClickOpen}
        sx={{marginTop:"10px"}}>
                Verify Your Self
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>Vendor Document Upload</DialogTitle>
                <DialogContent>
                    <Doc_upload />
                </DialogContent>
            </Dialog>

        </Box>
       

      </Box>
      
    </div>
  )
}

export default My_account_left
