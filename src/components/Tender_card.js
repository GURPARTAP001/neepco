// import React,{useState} from 'react';
// import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Vender_view from './Vender_view';


// const TenderCard = ({ tender }) => {
//   const [open, setOpen] = useState(false);
//   const tenderId = '123'; // Replace with actual ID

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//       const navigate = useNavigate(); // Hook for navigation
    
//       const handleBid = () => {
//         // Pass the tender ID to the ProposalForm page if needed
//         navigate('/proposal-form', { state: { tenderId: tender.id } });
//       };
//       // const handleOpen = () => {
//       //   // Pass the tender ID to the ProposalForm page if needed
//       //   navigate('/proposal-form', { state: { tender: tender } });
//       // };
    
//   return (
//     <Card sx={{ display: 'flex', alignItems: 'center', width: "100%",marginBottom:"10px" }}>
//       <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image="URL_TO_IMAGE" // Replace with your image URL
//         alt="Tender Image"
//       />
//       <CardContent sx={{ flex: '1 0 auto' }}>
//         <Typography variant="subtitle1">
//           Tender-Name:{tender.title}
//         </Typography>
//         <Typography variant="subtitle1">
//           Tender-No:{tender.number}
//         </Typography>
//         <Typography variant="subtitle2" color="text.secondary">
//           {tender.date}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Grid container justifyContent="flex-end">
//           <Button size="small" color="primary" onClick={handleOpen}>
//             View
//           </Button>
//           <Vender_view open={open} handleClose={handleClose} tenderId={tenderId} />
//           <Button size="small" variant="contained" color="secondary" onClick={handleBid}>
//             Send Proposal
//           </Button>
//         </Grid>
//       </CardActions>
//     </Card>
//   );
// };

// export default TenderCard;

import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Vender_view from './Vender_view';

const TenderCard = ({ tender }) => {
  const [open, setOpen] = useState(false);
  const tenderId = '123'; // Replace with actual ID
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleBid = () => {
    navigate('/proposal-form', { state: { tenderId: tender.id } });
  };

  const cardStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    width: "100%",
    marginBottom: "10px",
  };

  return (
    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        sx={{ width: isMobile ? '100%' : 151 }}
        image="https://th.bing.com/th?id=OIP.R2E0bLthrykd_-ETHkIShgAAAA&w=335&h=166&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=0.5" // Replace with your image URL
        alt="Tender Image"
      />
      <CardContent sx={{ flex: '1 0 auto', textAlign: isMobile ? 'center' : 'inherit' }}>
        <Typography variant="subtitle1">
          Tender-Name:{tender.title}
        </Typography>
        <Typography variant="subtitle1">
          Tender-No:{tender.number}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {tender.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent={isMobile ? 'center' : 'flex-end'}>
          <Button size="small" color="primary" onClick={handleOpen}>
            View
          </Button>
          <Vender_view open={open} handleClose={handleClose} tenderId={tenderId} />
          <Button size="small" variant="contained" color="secondary" onClick={handleBid}>
            Send Proposal
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default TenderCard;
