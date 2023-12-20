import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNotificationOpen = () => {
    setNotificationOpen(true);
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuOptions = [
    { text: 'Vender Profile', onClick: () => {navigate('/Vender_profile')} },
    { text: 'Analytics', onClick: () => {/* Navigation logic here */} },
    { text: 'Sign Out', onClick: () => {navigate('./Login')} },
    // ... other options
  ];

  const drawerList = (
    <List>
      {menuOptions.map((option) => (
        <ListItem button key={option.text} onClick={option.onClick}>
          <ListItemText primary={option.text} />
        </ListItem>
      ))}
    </List>
  );

  const handleTypographyClick = () => {
    navigate('/');
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#C8CCD9", borderBottom: "1px solid black" ,color:"black"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap onClick={handleTypographyClick} sx={{ flexGrow: 1, cursor: "pointer" }}>
          
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/North_Eastern_Electric_Power_Corporation_Logo.svg/1200px-North_Eastern_Electric_Power_Corporation_Logo.svg.png" alt="symbol" style={{width:"60px",height:"45px",marginBottom:"-10px",marginLeft:"50px", backgroundColor:"#C8CCD9"}} />

          </Typography>
          {isMobile ? (
            <IconButton color="inherit" onClick={handleNotificationOpen}>
              <Badge  color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          ) : (
            <>
              {/* <div style={{ position: 'relative', marginRight: theme.spacing(2) }}>
                <SearchIcon style={{ position: 'absolute', left: "1%", top: '50%', transform: 'translateY(-50%)' }} />
                <InputBase
                  placeholder="Search…"
                  style={{ paddingLeft: `calc(1em + ${theme.spacing(4)})`, border: "1px solid black", borderRadius: "10px" }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div> */}
              <IconButton color="inherit" onClick={handleNotificationOpen}>
                <Badge  color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>

      <Dialog open={notificationOpen} onClose={handleNotificationClose}>
        <DialogTitle>New Notification</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This is a notification message. You can customize it as needed.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
