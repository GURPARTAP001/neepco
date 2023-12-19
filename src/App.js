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


function App() {
  return (
    <div className="App">
       
      {/* <Admin_dashboard/> */}
      {/* <Profile/> */}

       <Router>
       <Nav_Bar/>
      {/* <Admin_dashboard/> */}
      {/* <Profile/> */}
      <Routes>
        {/* <Route path="/" element={<Container/> } /> */}
        <Route path="/" element={<Login/>} />
        <Route path="/Admin_dashboard" element={<Admin_dashboard/> } />
        
        
        {/* <Route path="/proposal-form" element={ <Send_proposal_page/>} /> */}
        <Route path="Pending_payments" element={ <Pending_payments/>} />
        <Route path="/Admin_payments_page" element={ <Admin_payments_page/>} />
        {/* <Route path="/Vender_profile" element={ <Profile/>} /> */}
         {/* Add other routes as needed */}
       </Routes>
    </Router>
      
    </div>
  );
}

export default App;
