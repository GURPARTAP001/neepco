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


// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, DialogTitle, DialogContent, Dialog } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { useNavigate } from 'react-router-dom';

// export default function Navbar() {


//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//     <Dialog
//     open={open}
//     onClose={handleClose}
//     fullWidth
//     maxWidth={isMobile ? 'xs' : 'sm'}
//     sx={{
//       '& .MuiDialog-paper': {
//         backgroundColor: '#f5f5f5', // Customize background color
//         padding: theme.spacing(2),
//         borderRadius: theme.shape.borderRadius,
//       },
//     }}
//   >
//     <DialogTitle>Notification</DialogTitle>
//     <DialogContent>
//       <Typography variant="body1">
//         This is a notification message. You can put any content here, like text, images, or other elements.
//       </Typography>
//     </DialogContent>
//   </Dialog>
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   const menuOptions = [
//     { text: 'Vender Profile', onClick: () => { navigate('/Vender_profile') } },
//     { text: 'Analytics', onClick: () => {/* Navigation logic here */ } },
//     { text: 'Sign Out', onClick: () => {/* Navigation logic here */ } },
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

//   const handle_Typography_click = () => {
//     navigate('/');
//   };

//   return (
//     <>
//       <AppBar position="static" sx={{ background: "#C8CCD9", borderBottom: "1px solid black" }}>
//         <Toolbar sx={{ borderBottom: "1px solid black", color: "black" }}>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap style={{ flexGrow: 1 }} onClick={handle_Typography_click} sx={{ cursor: "pointer" }}>
//             NEEPCO
//           </Typography>
//           {isMobile ? (
//             <IconButton color="inherit">
//               <Badge badgeContent={4} color="secondary">
//                 <NotificationsIcon onClick={handleOpen} />
//               </Badge>
//             </IconButton>
//           ) : (
//             <>
//               <div style={{ position: 'relative', marginRight: theme.spacing(2) }}>
//                 <div style={{ position: 'absolute', left: "1%", top: '60%', transform: 'translateY(-50%)' }}>
//                   <SearchIcon />
//                 </div>
//                 <InputBase
//                   placeholder="Search…"
//                   style={{ paddingLeft: `calc(1em + ${theme.spacing(4)})`, border: "1px solid black", borderRadius: "10px" }}
//                   inputProps={{ 'aria-label': 'search' }}
//                 />
//               </div>
//               <IconButton color="inherit">
//                 <Badge badgeContent={4} color="secondary">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} >
//         {drawerList}
//       </Drawer>
//     </>
//   );
// }


import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, Alert } from '@mui/material';
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
    { text: 'Vender Profile', onClick: () => navigate('/Vender_profile') },
    { text: 'Analytics', onClick: () => {/* Navigation logic here */ } },
    { text: 'Sign Out', onClick: () => {/* Navigation logic here */ } },
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
      <AppBar position="static" sx={{ background: "#C8CCD9", borderBottom: "1px solid black" }}>
        <Toolbar sx={{ borderBottom: "1px solid black", color: "black" }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ flexGrow: 1 }} onClick={handleTypographyClick} sx={{ cursor: "pointer" }}>
            NEEPCO
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" onClick={handleNotificationOpen}>
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
                  style={{ paddingLeft: `calc(1em + ${theme.spacing(4)})`, border: "1px solid black", borderRadius: "10px" }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <IconButton color="inherit" onClick={handleNotificationOpen}>
                <Badge badgeContent={4} color="secondary">
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

      <Dialog open={notificationOpen} onClose={handleNotificationClose} >
        <DialogTitle >NEW NOTIFICATION'S :-</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{marginBottom:"8px"}}>
          <Alert severity="info">Tender No.:343 Has Been Alloted To You</Alert>
          </Typography>
          <Typography variant="body1" sx={{marginBottom:"8px"}}>
          <Alert severity="info">Tender No.:74343 Has Been Alloted To You</Alert>
          </Typography>
          <Typography variant="body1" sx={{marginBottom:"8px"}}>
          <Alert severity="info">Tender No.:784343 Has Been Alloted To You</Alert>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
