import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Admin_tender_view_btn from './Admin_tender_view_btn';

const StyledCard = styled(Card)({
  display: 'flex',
  borderRadius: '10px',
  marginBottom: '20px',
  justifyContent: 'space-between',
  background: 'rgb(234, 239, 243)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

const CardDetailsBox = styled(Box)({
  width: '60%',
  height: '100%',
  '@media (max-width: 600px)': {
    width: '100%',
    textAlign: 'center',
  }
});

const CardActionsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '8px',
  alignItems: 'center',
  width: '20%',
  '@media (max-width: 600px)': {
    width: '100%',
    justifyContent: 'space-around',
    marginTop: '10px',
  }
});

export default function Admin_tender_card({ title, description, time, status, category }) {
    const [open, setOpen] = useState(false);
    const tenderId = '123'; // Replace with actual ID

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <StyledCard>
            <CardMedia
                component="img"
                sx={{ width: 150, borderRadius: '10px 0 0 10px', height: '100%' }}
                image="https://th.bing.com/th?id=ODL.236e670dc5db895549866c86c7d5f172&w=147&h=110&c=10&rs=1&qlt=99&o=6&dpr=1.5&pid=13.1"
                alt="Tender image"
            />
            <CardDetailsBox>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center" }}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardDetailsBox>
            <CardActionsBox>
                <Typography variant="subtitle2" color="text.secondary">
                    {time}
                </Typography>
                <Chip label={category} color="primary" />
                <Chip label={status} color={status === "open" ? "success" : "error"} />
                <Button variant="outlined" color="secondary" onClick={handleOpen}>View</Button>
                <Admin_tender_view_btn open={open} handleClose={handleClose} tenderId={tenderId} />
            </CardActionsBox>
        </StyledCard>
    );
}
