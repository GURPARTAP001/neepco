//need to add tabs here
import React from 'react'
import Features_center_tabs from './Features_center_tabs'

function Features_center() {
  return (
    <div  >
      <Features_center_tabs/>
    </div>
  )
}

export default Features_center


// import React from 'react';
// import { useTheme, useMediaQuery } from '@mui/material';
// import Features_center_tabs from './Features_center_tabs';

// function Features_center() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const containerStyle = {
//     padding: isMobile ? '10px' : '20px',
//     margin: isMobile ? '0' : 'auto',
//     maxWidth: isMobile ? '100%' : '800px', // Adjust this based on your design preference
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   };

//   return (
//     <div style={containerStyle}>
//       <Features_center_tabs />
//     </div>
//   )
// }

// export default Features_center;
