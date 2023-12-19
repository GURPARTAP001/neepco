// import React from 'react'
// import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import My_account_right_card from './My_account_right_card';

// function My_profile_right() {
//   return (
//     <div>
//       <Box sx={{background: "rgb(221, 225, 229)",width:"50vw",height:"85vh",marginTop:"10px",borderRadius:"10px",marginLeft:"15px",display:"flex",justifyContent:"center"}}>
//       <Box sx={{ width: '95%'  }}>
//       <Box sx={{ my: 3, mx: 2 }}>
//         <Grid container alignItems="center">
//           <Grid item xs>
//             <Typography gutterBottom variant="h4" component="div" sx={{textAlign:"center"}}>
//               PAST COMPLETED TENDERS
//             </Typography>
//           </Grid>
          
//         </Grid>
//       </Box>
//       <Divider variant="middle" />
//       <Box sx={{ m: 2 ,display:"flex",flexDirection:"column",alignItems:"center"}}>
//         <Typography gutterBottom variant="body1">
//           Select year
//         </Typography>
//         <Stack direction="row" spacing={1}>
//           <Chip label="2020" />
//           <Chip color="primary" label="2021" />
//           <Chip label="2022" />
//           <Chip label="2023" />
//         </Stack>
//       </Box>
//       <Box sx={{padding:"10px" ,overflowY:"auto",height:"65%"}}>
        // <My_account_right_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm"/>
        // <My_account_right_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm"/>
        // <My_account_right_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm"/>
        // <My_account_right_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm"/>
        // <My_account_right_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm"/>
        // <My_account_right_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm"/>
//       </Box>
//     </Box>
        
//       </Box>
//     </div>
//   )
// }

// export default My_profile_right

import React, { useState, useEffect } from 'react';
import { Box, Chip, Typography, Divider, Stack, Grid, useTheme, useMediaQuery } from '@mui/material';
import My_account_right_card from './My_account_right_card';
import axios from 'axios';

// Sample data to simulate backend response
const sampleTenders = [
  {
    id: '1',
    title: 'Tender-Name: Hydro Plant 1',
    description: 'Tender-No.: 123456',
    time: 'Dec 15, 3:31pm'
  },
  {
    id: '2',
    title: 'Tender-Name: Hydro Plant 2',
    description: 'Tender-No.: 654321',
    time: 'Jan 10, 2:30pm'
  },
  // Add more sample tenders as needed
];

function My_profile_right() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
        try {
            const response = await axios.get('YOUR_BACKEND_API_URL');
            setTenders(response.data);
        } catch (error) {
            console.error('Error fetching tenders:', error);
        }
    };

    fetchTenders();
}, [])

  return (
    <div>
      <Box sx={{
        background: "rgb(221, 225, 229)",
        width: isMobile ? '100%' : '50vw',
        height: isMobile ? 'auto' : '85vh',
        marginTop: "10px",
        borderRadius: "10px",
        marginLeft: isMobile ? '0' : '15px',
        display: "flex",
        justifyContent: "center"
      }}>
        <Box sx={{ width: '95%' }}>
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant={isMobile ? 'h5' : 'h4'} component="div" sx={{ textAlign: "center" }}>
                  PAST COMPLETED TENDERS
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography gutterBottom variant="body1">
              Select year
            </Typography>
            <Stack direction={isMobile ? 'column' : 'row'} spacing={1}>
              <Chip label="2020" />
              <Chip color="primary" label="2021" />
              <Chip label="2022" />
              <Chip label="2023" />
            </Stack>
          </Box>
          <Box sx={{ padding: "10px", overflowY: "auto", height: isMobile ? 'auto' : '65%' }}>
            {tenders.map((tender) => (
              <My_account_right_card 
                key={tender.id} 
                title={tender.title} 
                description={tender.description} 
                time={tender.time} 
              />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default My_profile_right;
