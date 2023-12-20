import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, InputLabel, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Admin_upload_tender = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('type', type);
    if (file) {
      formData.append('file', file);
    }

    try {
      /*const response = await axios.post('http://localhost:5000/api/tenders', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle success (e.g., showing a success message)*/
      navigate('/Admin_dashboard')
    } catch (error) {
      console.error('Error during tender upload:', error);
      // Handle error (e.g., showing an error message)
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Upload New Tender
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title of the Tender"
            name="title"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description of the Tender"
            id="description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="type"
            label="Type of the Tender"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <InputLabel htmlFor="file">Upload Picture of the Tender</InputLabel>
          <Input
            id="file"
            name="file"
            type="file"
            fullWidth
            onChange={handleFileChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Tender
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Admin_upload_tender;
