import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, InputLabel, Input } from '@mui/material';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (picture) {
      formData.append('picture', picture);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle response here (e.g., redirect to another page, show a success message, etc.)
    } catch (error) {
      console.error('Error during sign up:', error);
      // Handle error here (e.g., show an error message)
    }
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/*<InputLabel htmlFor="picture">Upload Picture</InputLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            name="picture"
            label="picture"
            type="picture"
            id="picture"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
      />*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
