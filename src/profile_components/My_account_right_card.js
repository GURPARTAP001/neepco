// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';

// export default function My_account_right_card({ title, description,time }) {
//     const theme = useTheme();

//     return (
//         <Card sx={{ display: 'flex', borderRadius: "10px", marginBottom: "20px", justifyContent:"space-between",height:"70px",background:"rgb(221, 225, 229)",marginInline:"5px",background:"white" }}>
//             <CardMedia
//                 component="img"
//                 sx={{ width: 150 ,marginLeft:"0" ,borderRadius:"10px"}}
//                 image="https://th.bing.com/th?id=ODL.236e670dc5db895549866c86c7d5f172&w=147&h=110&c=10&rs=1&qlt=99&o=6&dpr=1.5&pid=13.1"
//                 alt="Live from space album cover"
//             />
//             <Box sx={{width:"60%",height:"100%" }}>
//                 <CardContent sx={{ display:"flex" ,flexDirection:"column" ,alignItems:"start",marginTop:"1px"}}>
//                     <Typography component="div" variant="h5"sx={{marginTop:"-10px" }}>
//                         {title}
//                     </Typography>
//                     <Typography variant="h7" color="text.secondary" component="div">
//                         {description}
//                     </Typography>
                    
//                 </CardContent>
//             </Box>
//             <Box sx={{ display: 'flex',justifyContent:"space-between",marginRight:"8px",alignItems:"center",width:"24%" }}>
//             <Typography variant="subtitle2" color="text.secondary" component="div">
//                         {time}
//                     </Typography>
//                     <Button variant="outlined" color="secondary" sx={{ background:"white"}}>Reviews</Button>
//             </Box>

//         </Card>
//     );
// }


import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function My_account_right_card({ title, description, time }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const cardStyles = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        borderRadius: "10px",
        marginBottom: "20px",
        justifyContent: "space-between",
        height: isMobile ? 'auto' : '70px',
        background: "white",
        marginInline: "5px",
    };

    const contentBoxStyles = {
        width: isMobile ? '100%' : '60%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginTop: isMobile ? '10px' : '1px',
    };

    const detailsBoxStyles = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: isMobile ? '100%' : '24%',
        marginRight: isMobile ? '0' : '8px',
        marginTop: isMobile ? '10px' : '0',
    };

    return (
        <Card sx={cardStyles}>
            <CardMedia
                component="img"
                sx={{ width: isMobile ? '100%' : 150, marginLeft: isMobile ? '0' : '0', borderRadius: '10px' }}
                image="https://th.bing.com/th?id=ODL.236e670dc5db895549866c86c7d5f172&w=147&h=110&c=10&rs=1&qlt=99&o=6&dpr=1.5&pid=13.1"
                alt="Live from space album cover"
            />
            <Box sx={contentBoxStyles}>
                <CardContent>
                    <Typography component="div" variant={isMobile ? 'h6' : 'h5'}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={detailsBoxStyles}>
                <Typography variant="subtitle2" color="text.secondary">
                    {time}
                </Typography>
                {/* <Button variant="outlined" color="secondary" sx={{ background: "white", marginTop: isMobile ? '10px' : '0' }}>Reviews</Button> */}
            </Box>
        </Card>
    );
}
