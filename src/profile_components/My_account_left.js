import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function My_account_left() {
  return (
    <div>
        <Box sx={{ background: "rgb(221, 225, 229)",display:"flex",flexDirection:"column",alignItems:"center",width:"40vw",height:"85vh",marginTop:"10px",borderRadius:"10px",marginLeft:"15px" }}>
        <Avatar
          alt="vender picture"
          src="./images/a1.jpg"
          sx={{ width: 200, height: 200 ,marginTop:"5px"}}
        />
        <Box sx={{background:"rgb(206, 211, 215)",width:"80%",padding:"10px",marginTop:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Typography component="div" variant="h6">
          Name:hjgfdfgf sharma
        </Typography>
        <Typography component="div" variant="h6">
          Email:sfsa@gmail.com
        </Typography>
        <Typography component="div" variant="h6">
          Phone No.:453678433
        </Typography>
        <Typography component="div" variant="h6">
          Vender-type:steel vender
        </Typography>
        </Box >
        <Box>
        <Button variant="outlined" color="error" sx={{marginTop:"10px"}}>Upload Documents</Button>

        </Box>
       

      </Box>
      
    </div>
  )
}

export default My_account_left
