
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Features_center from './Features_center';
import Nav_Bar from "./Nav_bar";
import Image_crosal from './Image_crosal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '8px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
}));

export default function Container() {
  return (
    <>
    <Nav_Bar/>
    <Image_crosal/>
    
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:"97.1%" ,
        padding: '20px',
        backgroundColor: '#C8CCD9',
        overflow: 'hidden',
        minHeight:"100vh",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Item>
            <Features_center />
          </Item>
        </Grid>
        {/* You can add more <Grid> items here if needed */}
      </Grid>
    </Box>
    </>
  );
}

// import React from 'react';
// import { styled, useTheme } from '@mui/material';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';
// import Features_center from './Features_center';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   borderRadius: '8px',
//   boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
// }));

// export default function Container() {
//   const theme = useTheme();

//   return (
//     <Box 
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         padding: '20px',
//         backgroundColor: 'transparent',
//         overflow: 'hidden',
//         [theme.breakpoints.up('sm')]: {
//           width: '95%',
//         },
//         [theme.breakpoints.up('lg')]: {
//           width: '80%',
//         },
//       }}
//     >
//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} sm={8} md={6} lg={4}>
//           <Item>
//             <Features_center/>
//           </Item>
//         </Grid>
//         {/* You can add more <Grid> items here if needed */}
//       </Grid>
//     </Box>
//   );
// }

