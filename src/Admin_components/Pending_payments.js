// // Dashboard.js
// import React, { useState } from 'react';
// import { Button, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
// // import PaymentForm from './PaymentForm'; // You'll need to create this component
// import { useNavigate } from 'react-router-dom';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import PaymentIcon from '@mui/icons-material/Payment';
// export default function Pending_payments() {

//     const navigate = useNavigate();
//   const [pendingPayments, setPendingPayments] = useState([
//     // Populate with actual data fetched from your backend
//     { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
//     { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
//     { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
//     { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
//     { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
//     { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
//     // ... other pending payments
//   ]);
  
//   return (
//     <Grid  container spacing={2} justifyContent="center" style={{ marginTop: '1rem' }} >
//       <Grid item xs={12} >
//         <Typography variant="h3" align="center" gutterBottom>
//           Pending Payments
//         </Typography>
//       </Grid>
//       {pendingPayments.map((payment) => (
//         <Grid item xs={12} md={6} lg={4} key={payment.id} sx={{display:"flex",justifyContent:"center",width:"100vw"}}>
//           <Card raised >
//             <CardContent>
              // <Typography variant="h5">{payment.vendorName}</Typography>
              // <List>
              //   <ListItem>
              //     <ListItemIcon>
              //       <LocalPhoneIcon />
              //     </ListItemIcon>
              //     <ListItemText primary={`Phone: ${payment.phone}`} />
              //   </ListItem>
              //   <ListItem>
              //     <ListItemIcon>
              //       < AccountBoxIcon/>
              //     </ListItemIcon>
              //     <ListItemText primary={`PAN: ${payment.panNo}`} />
              //   </ListItem>
              //   <ListItem>
              //     <ListItemIcon>
              //       <PaymentIcon />
              //     </ListItemIcon>
              //     <ListItemText primary={`Account: ${payment.accountNo}`} />
              //   </ListItem>
              // </List>
              // <Button 
              //   variant="contained" 
              //   color="primary" 
              //   startIcon={<PaymentIcon />} 
              //   fullWidth 
              //   onClick={() => navigate('/Admin_payments_page')}
              // >
              //   Pay Now
              // </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaymentIcon from '@mui/icons-material/Payment';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Pending_payments() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  // const [pendingPayments, setPendingPayments] = useState([]);

  const [pendingPayments, setPendingPayments] = useState([
        // Populate with actual data fetched from your backend
        { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
        { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
        { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
        { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
        { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
        { id: 1, vendorName: 'Vendor A', phone: '1234567890', panNo: 'ABCDE1234F', accountNo: '1234567890123456' },
        // ... other pending payments
      ]);

  // useEffect(() => {
  //   axios.get("http://your-backend-api/pending-payments")
  //     .then(response => setPendingPayments(response.data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: '1rem' }}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          Pending Payments
        </Typography>
      </Grid>
      {pendingPayments.map((payment) => (
        <Grid item xs={12} md={6} lg={4} key={payment.id}>
          <Card raised sx={{ width: isMobile ? '90%' : '100%' }}>
            <CardContent>
            <Typography variant="h5">{payment.vendorName}</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocalPhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Phone: ${payment.phone}`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    < AccountBoxIcon/>
                  </ListItemIcon>
                  <ListItemText primary={`PAN: ${payment.panNo}`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Account: ${payment.accountNo}`} />
                </ListItem>
              </List>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<PaymentIcon />} 
                fullWidth 
                onClick={() => navigate('/Admin_payments_page')}
              >
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
