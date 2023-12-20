import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


export default function Admin_nav() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuOptions = [
    { text: 'Create New Tender', onClick: () => {navigate('/Upload_tenders')} },
    { text: 'Pending Payments', onClick: () => {navigate('/Pending_payments')} },
    { text: 'Analytics', onClick: () => {navigate('/analytics')} },
    { text: 'Sign Out', onClick: () => {navigate('../Login')} },
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
  const handle_Typography_click=()=>
   { navigate('/')}
  

  return (
    <>
      <AppBar position="static" sx={{background:"#C8CCD9",borderBottom:"1px solid black"}}>
        <Toolbar sx={{borderBottom:"1px solid black",color:"black"}}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ flexGrow: 1 }} onClick={handle_Typography_click} sx={{cursor:"pointer"}} >
            <img src="ttps://neepco.co.in/sites/all/themes/neepco_new/img/logo.png" alt="symbol" />
          </Typography>
          <div style={{ position: 'relative', marginRight: theme.spacing(2) }}>
            <div style={{ position: 'absolute', left: "1%", top: '60%', transform: 'translateY(-50%)' }}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              style={{ paddingLeft: `calc(1em + ${theme.spacing(4)})`,border:"1px solid black",borderRadius:"10px" ,}}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}  >
        {drawerList}
      </Drawer>
    </>
  );
}
