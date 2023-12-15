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
    <Box sx={{ width:"90%" ,backgroundColor:"red",marginTop:"13px"}} margin={1}>
      
        <Grid >
          <Item >
            <Features_center/>
          </Item>
        </Grid>
        
      
    </Box>
  );
}
