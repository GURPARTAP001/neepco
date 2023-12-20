import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Nav_Bar from '../components/Nav_bar';
import My_account_left from './My_account_left';
import My_profile_right from './My_profile_right';

function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '95%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: isMobile ? 'auto' : '90vh',
    marginTop: '10px',
    gap: isMobile ? theme.spacing(2) : 0,
  };

  return (
    <div>
      <Nav_Bar/>
      <Box style={containerStyle}>
        <My_account_left />
        <My_profile_right />
      </Box>
    </div>
  )
}

export default Profile;
