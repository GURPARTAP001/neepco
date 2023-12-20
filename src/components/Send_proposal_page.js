

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, styled, useMediaQuery } from '@mui/material';
import axios from 'axios';
import Navbar from './Nav_bar';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: 'auto',
  maxWidth: 500,
}));

export default function ProposalSubmissionForm() {
  const [formData, setFormData] = useState({
    vendorName: '',
    phoneNo: '',
    completionTime: '',
    price: '',
    quotationDoc: null,
  });

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, quotationDoc: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post('YOUR_BACKEND_API_URL', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Additional success handling
    } catch (error) {
      console.error('Error submitting form:', error);
      // Error handling
    }
  };
  
  

  return (
   
<>
<Navbar/>
     <div style={{
      backgroundImage: 'url("https://www.powertransformernews.com/wp-content/uploads/2019/03/substation-1705954_640-480x320.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '96vh', // This makes sure that the background covers the full height of the page
      padding: '20px',
    }}>

    <StyledPaper >
      <Typography variant="h4" align="center" gutterBottom>
        Proposal Submission
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Vendor Name"
          name="vendorName"
          value={formData.vendorName}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Completion Time"
          name="completionTime"
          value={formData.completionTime}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <input
          accept="application/pdf"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span" style={{ marginTop: 20 }}>
            Upload Quotation Document
          </Button>
        </label>
        <Typography style={{ marginTop: 10 }}>
          {formData.quotationDoc ? formData.quotationDoc.name : "No file chosen"}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 30 }}
        >
          Submit Proposal
        </Button>
      </form>
    </StyledPaper>
    </div>
    </>
  );
  }
