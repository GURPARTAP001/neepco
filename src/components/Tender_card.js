import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const TenderCard = ({ tender ,onView}) => {

      const navigate = useNavigate(); // Hook for navigation
    
      const handleBid = () => {
        // Pass the tender ID to the ProposalForm page if needed
        navigate('/proposal-form', { state: { tenderId: tender.id } });
      };
    
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', width: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="URL_TO_IMAGE" // Replace with your image URL
        alt="Tender Image"
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
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
        <Grid container justifyContent="flex-end">
          <Button size="small" color="primary" onClick={() => onView(tender)}>
            View
          </Button>
          <Button size="small" variant="contained" color="secondary" onClick={handleBid}>
            Send Proposal
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default TenderCard;
