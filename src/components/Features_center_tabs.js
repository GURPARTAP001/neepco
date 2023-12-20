


import { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { AppBar, Tabs, Tab, Typography, Box, Dialog, DialogTitle, DialogContent, Paper, styled } from '@mui/material';
import Tender_card from './Tender_card';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Features_center_tabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedTender, setSelectedTender] = useState(null);

  const tenders = [
    {
      id: '1',
      title: 'Road Construction Project',
      description: 'A project to construct a new highway connecting two major cities, spanning over 100 miles.',
      amount: '$10,000,000',
      lastDate: '2023-08-15',
      duration: '36 months',
      image: 'https://example.com/road-construction.jpg', // Replace with actual image URL
    },
    {
      id: '2',
      title: 'School Renovation',
      description: 'Renovation of old school buildings to provide better facilities and infrastructure.',
      amount: '$2,000,000',
      lastDate: '2023-12-01',
      duration: '12 months',
      image: 'https://example.com/school-renovation.jpg', // Replace with actual image URL
    },
    {
      id: '3',
      title: 'Urban Park Development',
      description: 'Development of a new urban park with modern amenities and green spaces.',
      amount: '$5,500,000',
      lastDate: '2023-09-10',
      duration: '18 months',
      image: 'https://example.com/urban-park.jpg', // Replace with actual image URL
    },
    {
      id: '3',
      title: 'Urban Park Development',
      description: 'Development of a new urban park with modern amenities and green spaces.',
      amount: '$5,500,000',
      lastDate: '2023-09-10',
      duration: '18 months',
      image: 'https://example.com/urban-park.jpg', // Replace with actual image URL
    },
    {
      id: '3',
      title: 'Urban Park Development',
      description: 'Development of a new urban park with modern amenities and green spaces.',
      amount: '$5,500,000',
      lastDate: '2023-09-10',
      duration: '18 months',
      image: 'https://example.com/urban-park.jpg', // Replace with actual image URL
    },
    {
      id: '3',
      title: 'Urban Park Development',
      description: 'Development of a new urban park with modern amenities and green spaces.',
      amount: '$5,500,000',
      lastDate: '2023-09-10',
      duration: '18 months',
      image: 'https://example.com/urban-park.jpg', // Replace with actual image URL
    },
    {
      id: '3',
      title: 'Urban Park Development',
      description: 'Development of a new urban park with modern amenities and green spaces.',
      amount: '$5,500,000',
      lastDate: '2023-09-10',
      duration: '18 months',
      image: 'https://example.com/urban-park.jpg', // Replace with actual image URL
    },
    // Add more tenders as needed
  ];

  const Applied_tenders = [
    {
      id: '1',
      title: 'Road Construction Project',
      description: 'A project to construct a new highway connecting two major cities, spanning over 100 miles.',
      amount: '$10,000,000',
      lastDate: '2023-08-15',
      duration: '36 months',
      image: 'https://example.com/road-construction.jpg', // Replace with actual image URL
    },
    {
      id: '2',
      title: 'School Renovation',
      description: 'Renovation of old school buildings to provide better facilities and infrastructure.',
      amount: '$2,000,000',
      lastDate: '2023-12-01',
      duration: '12 months',
      image: 'https://example.com/school-renovation.jpg', // Replace with actual image URL
    },
    
    
    {
      id: '3',
      title: 'Urban Park Development',
      description: 'Development of a new urban park with modern amenities and green spaces.',
      amount: '$5,500,000',
      lastDate: '2023-09-10',
      duration: '18 months',
      image: 'https://example.com/urban-park.jpg', // Replace with actual image URL
    },
   
   
  ];

  const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    padding: theme.spacing(2),
  }));

  const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  }));

  const handleView = (tender) => {
    setSelectedTender(tender);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//   useEffect(() => {
//     const fetchTenders = async () => {
//         try {
//             const response = await axios.get('YOUR_BACKEND_API_URL');
//             setTenders(response.data);
//         } catch (error) {
//             console.error('Error fetching tenders:', error);
//         }
//     };

//     fetchTenders();
// }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static" centered >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
          sx={{backgroundColor:"red"}}
        >
          <Tab label="OPEN TENDER" {...a11yProps(0)} />
          <Tab label="APPLIED TENDER" {...a11yProps(1)} />
          <Tab label="PAYMENTS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            {tenders.map((tender) => (
              <Tender_card
                key={tender.id}
                tender={tender}
                onView={handleView}
              />
            ))}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
              <StyledDialogTitle>{selectedTender?.title}</StyledDialogTitle>
              <StyledDialogContent>
                <Typography variant="h6">Description</Typography>
                <Typography paragraph>{selectedTender?.description}</Typography>
              </StyledDialogContent>
            </Dialog>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div>
            {Applied_tenders.map((tender) => (
              <Tender_card
                key={tender.id}
                tender={tender}
                onView={handleView}
              />
            ))}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
              <StyledDialogTitle>{selectedTender?.title}</StyledDialogTitle>
              <StyledDialogContent>
                <Typography variant="h6">Description</Typography>
                <Typography paragraph>{selectedTender?.description}</Typography>
              </StyledDialogContent>
            </Dialog>
          </div>

          APPLIED TENDER
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>


          PAYMENTS
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}



// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme, useMediaQuery } from '@mui/material';
// import { AppBar, Tabs, Tab, Typography, Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
// import Tender_card from './Tender_card';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default function Features_center_tabs() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [value, setValue] = useState(0);
//   const [open, setOpen] = useState(false); 
//   const [selectedTender, setSelectedTender] = useState(null); 

//   const tenders = [
//     // ... your static tenders data ...
//   ];

  // Uncomment and complete for backend integration
  // useEffect(() => {
  //     const fetchTenders = async () => {
  //         try {
  //             const response = await axios.get('YOUR_BACKEND_API_URL');
  //             setTenders(response.data);
  //         } catch (error) {
  //             console.error('Error fetching tenders:', error);
  //         }
  //     };

  //     fetchTenders();
  // }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const handleView = (tender) => {
//     setSelectedTender(tender);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
//       <AppBar position="static" centered >
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant={isMobile ? "scrollable" : "fullWidth"}
//           scrollButtons={isMobile ? "on" : "off"}
//           aria-label="full width tabs example"
//         >
//           <Tab label="OPEN TENDER" {...a11yProps(0)} />
//           <Tab label="APPLIED TENDER" {...a11yProps(1)} />
//           <Tab label="PAYMENTS" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           <div>
//             {tenders.map((tender) => (
//               <Tender_card key={tender.id} tender={tender} onView={handleView} />
//             ))}
//             <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//               <DialogTitle>{selectedTender?.title}</DialogTitle>
//               <DialogContent>
//                 <Typography variant="h6">Description</Typography>
//                 <Typography paragraph>{selectedTender?.description}</Typography>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           APPLIED TENDER
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           PAYMENTS
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }
