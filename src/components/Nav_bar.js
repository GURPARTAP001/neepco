// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { useTheme } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';


// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const theme = useTheme();

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   const menuOptions = [
//     { text: 'Vender Profile', onClick: () => {navigate('/Vender_profile')} },
//     { text: 'Analytics', onClick: () => {/* Navigation logic here */} },
//     // ... other options
//   ];

//   const drawerList = (
//     <List>
//       {menuOptions.map((option) => (
//         <ListItem button key={option.text} onClick={option.onClick}>
//           <ListItemText primary={option.text} />
//         </ListItem>
//       ))}
//     </List>
//   );
//   const handle_Typography_click=()=>
//    { navigate('/')}
  

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap style={{ flexGrow: 1 }} onClick={handle_Typography_click} sx={{cursor:"pointer"}} >
//             NEEPCO
//           </Typography>
//           <div style={{ position: 'relative', marginRight: theme.spacing(2) }}>
//             <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               style={{ paddingLeft: `calc(1em + ${theme.spacing(4)})` }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//         {drawerList}
//       </Drawer>
//     </>
//   );
// }


import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuOptions = [
    { text: 'Vender Profile', onClick: () => {navigate('/Vender_profile')} },
    { text: 'Analytics', onClick: () => {/* Navigation logic here */} },
    { text: 'Sign Out', onClick: () => {/* Navigation logic here */} },
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

  const handle_Typography_click = () => {
    navigate('/');
  };

  return (
    <>
      <AppBar position="static" sx={{background:"#C8CCD9",borderBottom:"1px solid black"}}>
        <Toolbar sx={{borderBottom:"1px solid black" ,color:"black"}}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ flexGrow: 1 }} onClick={handle_Typography_click} sx={{cursor:"pointer"}}>
            NEEPCO
          </Typography>
          {isMobile ? (
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          ) : (
            <>
              <div style={{ position: 'relative', marginRight: theme.spacing(2) }}>
                <div style={{ position: 'absolute', left: "1%", top: '60%', transform: 'translateY(-50%)' }}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  style={{ paddingLeft: `calc(1em + ${theme.spacing(4)})` ,border:"1px solid black",borderRadius:"10px"}}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen}  onClose={toggleDrawer(false)} >
        {drawerList}
      </Drawer>
    </>
  );
}
