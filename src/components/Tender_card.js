import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function Tender_card({ title, description,time }) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', borderRadius: "10px", marginBottom: "20px", justifyContent:"space-between",height:"70px",background:"rgb(221, 225, 229)" }}>
            <CardMedia
                component="img"
                sx={{ width: 150 ,marginLeft:"0" ,borderRadius:"10px"}}
                image="https://th.bing.com/th?id=ODL.236e670dc5db895549866c86c7d5f172&w=147&h=110&c=10&rs=1&qlt=99&o=6&dpr=1.5&pid=13.1"
                alt="Live from space album cover"
            />
            <Box sx={{width:"60%",height:"100%" }}>
                <CardContent sx={{ display:"flex" ,flexDirection:"column" ,alignItems:"start",marginTop:"1px"}}>
                    <Typography component="div" variant="h5"sx={{marginTop:"-10px" }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        {description}
                    </Typography>
                    
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex',justifyContent:"space-between",marginRight:"8px",alignItems:"center",width:"24%" }}>
            <Typography variant="subtitle2" color="text.secondary" component="div">
                        {time}
                    </Typography>
                <Button variant="outlined" color="secondary" sx={{ background:"white"}}>View</Button>
                <Button variant="contained" color="success">Bid</Button>
            </Box>

        </Card>
    );
}
