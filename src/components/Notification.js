import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Typography, useMediaQuery, useTheme } from '@mui/material';

const Notification = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Show Notification
        </Button>
  
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth={isMobile ? 'xs' : 'sm'}
          sx={{
            '& .MuiDialog-paper': {
              backgroundColor: '#f5f5f5', // Customize background color
              padding: theme.spacing(2),
              borderRadius: theme.shape.borderRadius,
            },
          }}
        >
          <DialogTitle>Notification</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              This is a notification message. You can put any content here, like text, images, or other elements.
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  
  export default Notification;
  