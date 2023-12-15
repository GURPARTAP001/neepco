import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Profile_left from './Profile_left';
import Analytics_right from './Analytics_right';
import Features_center from './Features_center';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Container() {
  return (
    <Box sx={{ flexGrow: 1 }} margin={1}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>
            Profile
             <Profile_left/>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            FEATURES
            <Features_center/>
          </Item>
        </Grid>
        <Grid xs>
          <Item>
            ANALYTICS 
            <Analytics_right/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
