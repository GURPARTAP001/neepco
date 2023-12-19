import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import axios from 'axios'; // Make sure axios is installed

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

const Admin_tender_view_btn = ({ open, handleClose, tenderId }) => {
  const [tender, setTender] = useState(null);

  useEffect(() => {
    if (open && tenderId) {
      // Replace with your actual backend endpoint
      axios.get(`http://your-backend-api/tenders/${tenderId}`)
        .then(response => {
          setTender(response.data);
        })
        .catch(error => console.error('Error fetching tender details:', error));
    }
  }, [open, tenderId]);

  if (!tender) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2" gutterBottom>
          {tender.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
          {tender.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Amount:</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>{tender.amount}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Last Date:</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>{tender.lastDate}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Duration:</Typography>
        <Typography variant="body1">{tender.duration}</Typography>
        {/* Add image if exists */}
        {tender.image && (
          <Box component="img" src={tender.image} sx={{ width: '100%', borderRadius: '4px', mt: 2 }} />
        )}
      </Box>
    </Modal>
  );
};

export default Admin_tender_view_btn;
