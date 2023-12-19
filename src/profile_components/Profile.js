import React from 'react';
import Nav_Bar from '../components/Nav_bar';
import My_account_left from './My_account_left';
import { Box } from '@mui/material';
import My_profile_right from './My_profile_right';


function Profile() {
  
  return (
    <div>
       {/* <Nav_Bar/> */}
       <div style={{display:"flex",width:"95%",marginInline:"auto",justifyContent:"center",alignItems:"center",height:"90vh",marginTop:"10px"}}>
       <My_account_left/>
       <My_profile_right/>
       </div>


    </div>
  )
}

export default Profile
