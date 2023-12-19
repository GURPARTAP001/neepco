import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tender_card from './Tender_card';
import  { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
// import axios from 'axios'; // Import axios for making HTTP requests


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
  const [value, setValue] = React.useState(0);

  // state of the card
  const [open, setOpen] = useState(false); // State for dialog visibility
  const [selectedTender, setSelectedTender] = useState(null); // State for selected tender

  // const [tenders, setTenders] = useState([]); // State for storing tenders list

  const tenders = [
    { id: 1, title: 'Road Construction', description: 'Construction of new roads in the city center.' },
    { id: 2, title: 'School Renovation', description: 'Renovation of the old school buildings.' },
    { id: 3, title: 'college Renovation', description: 'Renovation of the old school buildings.' },
    { id: 4, title: 'Dam Renovation', description: 'Renovation of the old school buildings.' },
    { id: 5, title: 'Canal Renovation', description: 'Renovation of the old school buildings.' },
    { id: 6, title: 'Bus Renovation', description: 'Renovation of the old school buildings.' },
    { id: 7, title: 'Steel Renovation', description: 'Renovation of the old school buildings.' },
    { id: 8, title: 'Iron Renovation', description: 'Renovation of the old school buildings.' },
    // ... add more static tenders if needed
];

// Fetch tenders from backend on component mount
  //**** */ useEffect(() => {
  //     const fetchTenders = async () => {
  //         try {
  //             const response = await axios.get('YOUR_BACKEND_API_URL'); // Replace with your API URL
  //             setTenders(response.data); // Assuming response.data contains tenders
  //         } catch (error) {
  //             console.error('Error fetching tenders:', error);
  //         }
  //     };

  //     fetchTenders();
  // }, []);

  // Open dialog with selected tender details
  const handleView = (tender) => {
    setSelectedTender(tender);
    setOpen(true);
};

// Close the dialog
const handleClose = () => {
    setOpen(false);
};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper',width:"100%" }} >
      <AppBar position="static" centered >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
          
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
    {tenders.map((tender) => ( // Ensure you are mapping over the tenders array
      <Tender_card
        key={tender.id}
        tender={tender}
        onView={handleView} // Pass handleView correctly
      />
    ))}
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{selectedTender?.title}</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Description</Typography>
        <Typography paragraph>{selectedTender?.description}</Typography>
        {/* You can add more details here, like tender ID, submission dates, etc. */}
      </DialogContent>
    </Dialog>
  </div>
</TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          APPLIED TENDER
         
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          PAYMENTS
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}