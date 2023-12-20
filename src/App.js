import './App.css';

import Container from './components/Container';
import Profile from './profile_components/Profile';
import Admin_dashboard from './Admin_components/Admin_dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav_Bar from './components/Nav_bar';
import Send_proposal_page from './components/Send_proposal_page';
import Login from './components/Login';
import Admin_payments_page from './Admin_components/Admin_payments_page';
import Pending_payments from './Admin_components/Pending_payments';
import SignIn from './components/SignIn';
import Admin_nav from './Admin_components/Admin_nav';
import Admin_upload_tender from './Admin_components/Admin_upload_tender';
import Admin_tender_view_btn from './Admin_components/Admin_tender_view_btn';



function App() {
  return (
    <div className="App">
      
      {/* <SignIn/> */}
       
      {/* <Admin_dashboard/> */}
      {/* <Profile/> */}

      <Router>
        {/* <Login/> */}
      {/* <Nav_Bar/> */}
      <Admin_nav/>
      {/* <Admin_dashboard/> */}
      {/* <Profile/> */}
      <Routes>
        <Route path="/" element={<Container/> } />
        <Route path="/Admin_dashboard" element={<Admin_dashboard/> } />
        <Route path="/proposal-form" element={ <Send_proposal_page/>} />
        <Route path="Pending_payments" element={ <Pending_payments/>} />
        <Route path="/Admin_payments_page" element={ <Admin_payments_page/>} />
        <Route path="/Vender_profile" element={ <Profile/>} />
        <Route path="/Login" element={ <Login/>} />
        <Route path="/Upload_tenders" element={ <Admin_upload_tender/>}/>
        <Route path="/SignUp" element={ <SignIn/>}/>
         {/* Add other routes as needed */}
       </Routes> 
    </Router> 
      
    </div>
  );
}

export default App;
