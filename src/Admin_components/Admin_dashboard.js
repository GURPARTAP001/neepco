import React from 'react'
import Nav_Bar from '../components/Nav_bar'
import Admin_nav from './Admin_nav';
import Admin_tender_container from './Admin_tender_container'
import { useNavigate } from 'react-router-dom';
function Admin_dashboard() {
  const navigate = useNavigate();
  return (
    
    <div >
        {/* <Nav_Bar/> */}
        <Admin_nav/>
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
            <Admin_tender_container/>
        </div>
      
    </div>
  )
}

export default Admin_dashboard
