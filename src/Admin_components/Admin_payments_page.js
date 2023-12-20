// import React, { useState } from 'react';
// import { TextField, Button, Grid, Paper, Typography, Card, CardContent } from '@mui/material';
// import Container from '../components/Container';
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import { ChatState } from "../ChatProvider";

// const Admin_payments_page = () => {
//   const navigate = useNavigate();
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     amount: '',
//   });

//   var admin_amount = paymentDetails.amount;

//   const { user } = ChatState();

//   const userId = JSON.parse(localStorage.getItem("userInfo"))._id;

//   console.log(userId);

//   console.log(user);

//   console.log(user.token);



//   const handleChange = (event) => {
//     setPaymentDetails({ ...paymentDetails, [event.target.name]: event.target.value });
//     admin_amount = paymentDetails.amount
//   };

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     /*try {
//       const config = {
//         headers:
//         {
//           "Content-type": "application/json",
//            Authorization: `Bearer ${user.token}`,
//         }
//          };
//       const { data } = await axios.post("http://localhost:4000/api/payment",{admin_amount},config);
//       console.log(JSON.stringify(data));
      
//     } catch (e) {
//       console.log(e);
//     }*/
//     console.log(paymentDetails);
//     navigate("/Admin_dashboard");
//   };

//   return (
//    <Paper style={{ padding: 16, margin: 'auto', maxWidth: 500,marginTop:"150px"}}>
//       <Typography variant="h6" align="center" margin="dense">
//         Make a Payment
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2} alignItems="center" justify="center">
          // <Grid item xs={12}>
          //   <TextField
          //     label="Card Number"
          //     name="cardNumber"
          //     fullWidth
          //     variant="outlined"
          //     value={paymentDetails.cardNumber}
          //     onChange={handleChange}
          //   />
          // </Grid>
          // <Grid item xs={6}>
          //   <TextField
          //     label="Expiry Date"
          //     name="expiryDate"
          //     fullWidth
          //     variant="outlined"
          //     value={paymentDetails.expiryDate}
          //     onChange={handleChange}
          //   />
          // </Grid>
          // <Grid item xs={6}>
          //   <TextField
          //     label="CVV"
          //     name="cvv"
          //     fullWidth
          //     variant="outlined"
          //     value={paymentDetails.cvv}
          //     onChange={handleChange}
          //   />
          // </Grid>
          // <Grid item xs={12}>
          //   <TextField
          //     label="Amount"
          //     name="amount"
          //     fullWidth
          //     variant="outlined"
          //     value={paymentDetails.amount}
          //     onChange={handleChange}
          //   />
          // </Grid>
          // <Grid item xs={12}>
          //   <Button type="submit" fullWidth variant="contained" color="primary">
          //     Pay
          //   </Button>
          // </Grid>
//         </Grid>
//       </form>
//     </Paper>

  
//   );
// };

// export default Admin_payments_page;

import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../ChatProvider";

const Admin_payments_page = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const { user } = ChatState();

  const handleChange = (event) => {
    setPaymentDetails({ ...paymentDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.post("http://your-backend-api/payment", paymentDetails, config);
      navigate("/Admin_dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper style={{ padding: 16, margin: 'auto', maxWidth: isMobile ? '100%' : 500, marginTop: "150px"}}>
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

