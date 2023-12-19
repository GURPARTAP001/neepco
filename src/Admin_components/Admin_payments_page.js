import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import Container from '../components/Container';

const Admin_payments_page = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const handleChange = (event) => {
    setPaymentDetails({ ...paymentDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Payment processing logic goes here
    console.log(paymentDetails);
  };

  return (
   <Paper style={{ padding: 16, margin: 'auto', maxWidth: 500,marginTop:"150px"}}>
      <Typography variant="h6" align="center" margin="dense">
        Make a Payment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              name="cardNumber"
              fullWidth
              variant="outlined"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Expiry Date"
              name="expiryDate"
              fullWidth
              variant="outlined"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVV"
              name="cvv"
              fullWidth
              variant="outlined"
              value={paymentDetails.cvv}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Amount"
              name="amount"
              fullWidth
              variant="outlined"
              value={paymentDetails.amount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Pay
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>

  
  );
};

export default Admin_payments_page;
