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
        <TabPanel value={value} index={0} dir={theme.direction}  >
         <Tender_card title="Tender-Name:hydro plant1" description="Tender-No.:dfghjkjhgfdfghj" time="dec 15,3:31pm" category="Goods"/>
         <Tender_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm" category="Services"/>
         <Tender_card title="Tender-Name:hydro plant3" description="Tender-No.:fdfghj" time="dec 15,3:31pm" category="Goods"/>
         <Tender_card title="Tender-Name:hydro plant1" description="Tender-No.:dfghjkjhgfdfghj" time="dec 15,3:31pm" category="Services"/>
         <Tender_card title="Tender-Name:hydro plant2" description="Tender-No.:hjhgfhgfdfghj" time="dec 15,3:31pm" category="Services"/>
         <Tender_card title="Tender-Name:hydro plant3" description="Tender-No.:fdfghj" time="dec 15,3:31pm" category="Goods"/>
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
