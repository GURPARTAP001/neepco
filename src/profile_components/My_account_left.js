import React, { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, Typography, Avatar, Button, useMediaQuery, useTheme } from '@mui/material';
import Doc_upload from './Profile_upload_doc/Doc_upload';

function My_account_left() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{
        background: "rgb(221, 225, 229)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: isMobile ? '100%' : '40vw',
        height: isMobile ? 'auto' : '85vh',
        marginTop: "10px",
        borderRadius: "10px",
        marginLeft: isMobile ? '0' : '15px'
      }}>
        <Avatar
          alt="Vendor picture"
          src="./images/a1.jpg"
          sx={{ width: isMobile ? 150 : 200, height: isMobile ? 150 : 200, marginTop: "5px" }}
        />
        <Box sx={{
          background: "rgb(206, 211, 215)",
          width: "80%",
          padding: "10px",
          marginTop: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
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
        </Box>
        <Button variant="contained" color="primary" onClick={handleClickOpen}
          sx={{ marginTop: "10px" }}>
          Verify Yourself
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Vendor Document Upload</DialogTitle>
          <DialogContent>
            <Doc_upload />
          </DialogContent>
        </Dialog>
      </Box>
    </div>
  );
}

export default My_account_left;


