import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%', // Reduced width
  maxWidth: '400px', // Smaller maximum width
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

const sampleTender = {
  title: "New Highway Project",
  description: "Construction of a new highway connecting two major cities.",
  amount: "$5,000,000",
  lastDate: "2023-12-31",
  duration: "24 months",
  image: "https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?rs=1&pid=ImgDetMain" // Replace with an actual image URL
};

const Vender_view = ({ open, handleClose, tenderId }) => {
  const [tender, setTender] = useState(sampleTender);

  useEffect(() => {
    // Uncomment and update the following line once your backend is ready
    axios.get(`http://your-backend-api/tenders/${tenderId}`)
      .then(response => {
        setTender(response.data);
      })
      .catch(error => console.error('Error fetching tender details:', error));
  }, [open, tenderId]);

  return (
    <Modal open={open} onClose={handleClose} >
      <Box sx={style}>
        <Typography variant="h5" component="h2" gutterBottom>
          {tender.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
          {tender.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Amount:</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>{tender.amount}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Last Date:</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>{tender.lastDate}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Duration:</Typography>
        <Typography variant="body1">{tender.duration}</Typography>
        {tender.image && (
          <Box component="img" src={tender.image} sx={{ width: '100%', borderRadius: '4px', mt: 2 }} />
        )}
      </Box>
    </Modal>
  );
};

export default Vender_view;


// import React, { useState, useEffect } from 'react';
// import { Modal, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
// import axios from 'axios';

// const sampleTender = {
//   title: "New Highway Project",
//   description: "Construction of a new highway connecting two major cities.",
//   amount: "$5,000,000",
//   lastDate: "2023-12-31",
//   duration: "24 months",
//   image: "https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?rs=1&pid=ImgDetMain" // Replace with an actual image URL
// };

// const Vender_view = ({ open, handleClose, tenderId }) => {
//   const [tender, setTender] = useState(sampleTender);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   useEffect(() => {
//     // Uncomment and update the following line once your backend is ready
//     axios.get(`http://your-backend-api/tenders/${tenderId}`)
//       .then(response => {
//         setTender(response.data);
//       })
//       .catch(error => console.error('Error fetching tender details:', error));
//   }, [open, tenderId]);

//   const modalStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: isMobile ? '90%' : '70%',
//     maxWidth: isMobile ? '300px' : '400px',
//     bgcolor: 'background.paper',
//     borderRadius: '8px',
//     boxShadow: 24,
//     p: 4,
//     overflowY: 'auto',
//   };

//   return (
//     <Modal open={open} onClose={handleClose}>
//       <Box sx={modalStyle}>
//         <Typography variant="h5" component="h2" gutterBottom>
//           {tender.title}
//         </Typography>
//         <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
//           {tender.description}
//         </Typography>
//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Amount:</Typography>
//         <Typography variant="body1" sx={{ mb: 1 }}>{tender.amount}</Typography>
//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Last Date:</Typography>
//         <Typography variant="body1" sx={{ mb: 1 }}>{tender.lastDate}</Typography>
//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Duration:</Typography>
//         <Typography variant="body1">{tender.duration}</Typography>
//         {tender.image && (
//           <Box component="img" src={tender.image} sx={{ width: '100%', borderRadius: '4px', mt: 2 }} />
//         )}
//       </Box>
//     </Modal>
//   );
// };

// export default Vender_view;
