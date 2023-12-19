// // ProposalForm.js
// import React, { useState } from 'react';
// import { TextField, Button, Container } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import the hook from react-router-dom

// const Send_proposal_page = ({ tenderId }) => {
//   const [proposal, setProposal] = useState({}); // Initialize the proposal state
//   const navigate = useNavigate(); // Hook for navigation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProposal(prevProposal => ({ ...prevProposal, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend endpoint
//       const response = await axios.post('YOUR_BACKEND_ENDPOINT', proposal);
//       console.log(response.data);
//       navigate('/success'); // Navigate to success page or handle as needed
//     } catch (error) {
//       console.error('Error submitting proposal:', error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit}>
//         {/* Render TextField components for each form field */}
//         {/* For example: */}
//         <TextField
//           label="Proposal Title"
//           name="title"
//           fullWidth
//           margin="normal"
//           onChange={handleChange}
//         />
//         {/* Add other fields similarly and a submit button */}
//         <Button type="submit" variant="contained" color="primary">
//           Submit Proposal
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default Send_proposal_page;


import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, styled, useMediaQuery } from '@mui/material';
import axios from 'axios';

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
    <StyledPaper>
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
  );
  }
