import React from 'react'
import Nav_Bar from '../components/Nav_bar'
import Admin_tender_container from './Admin_tender_container'

function Admin_dashboard() {
  return (
    <div >
        <Nav_Bar/>
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
            <Admin_tender_container/>
        </div>
      
    </div>
  )
}

export default Admin_dashboard
