// ProposalForm.js
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the hook from react-router-dom

const Send_proposal_page = ({ tenderId }) => {
  const [proposal, setProposal] = useState({}); // Initialize the proposal state
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProposal(prevProposal => ({ ...prevProposal, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend endpoint
      const response = await axios.post('YOUR_BACKEND_ENDPOINT', proposal);
      console.log(response.data);
      navigate('/success'); // Navigate to success page or handle as needed
    } catch (error) {
      console.error('Error submitting proposal:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        {/* Render TextField components for each form field */}
        {/* For example: */}
        <TextField
          label="Proposal Title"
          name="title"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        {/* Add other fields similarly and a submit button */}
        <Button type="submit" variant="contained" color="primary">
          Submit Proposal
        </Button>
      </form>
    </Container>
  );
};

export default Send_proposal_page;
