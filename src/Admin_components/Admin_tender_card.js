import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import Admin_tender_view_btn from './Admin_tender_view_btn';


export default function Admin_tender_card({ title, description, time, status,category }) {
    const theme = useTheme();
    // const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const tenderId = '123'; // Replace with actual ID
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    


    return (
        <Card sx={{ display: 'flex', borderRadius: "10px", marginBottom: "20px", justifyContent: "space-between", height: "70px", background: "rgb(234, 239, 243)" }}>
            <CardMedia
                component="img"
                sx={{ width: 150, marginLeft: "0", borderRadius: "10px" }}
                image="https://th.bing.com/th?id=ODL.236e670dc5db895549866c86c7d5f172&w=147&h=110&c=10&rs=1&qlt=99&o=6&dpr=1.5&pid=13.1"
                alt="Live from space album cover"
            />
            <Box sx={{ width: "60%", height: "100%" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginTop: "1px" }}>
                    <Typography component="div" variant="h5" sx={{ marginTop: "-10px" }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        {description}
                    </Typography>

                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "space-between", marginRight: "8px", alignItems: "center", width: "20%"}}>
                <Typography variant="subtitle2" color="text.secondary" component="div" >
                    {time}
                </Typography>
                <Chip label={category} color="primary" />
                <Chip label={status} color={status==="open"? "success":"error"} />
                <Button variant="outlined" color="secondary" sx={{ background: "white" }}onClick={handleOpen}>View</Button>
                <Admin_tender_view_btn open={open} handleClose={handleClose} tenderId={tenderId} />

            </Box>

        </Card>
    );
}
