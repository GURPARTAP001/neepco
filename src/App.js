import './App.css';
import Nav_Bar from './components/Nav_bar';
import Container from './components/Container';
import Profile from './profile_components/Profile';
import Admin_dashboard from './Admin_components/Admin_dashboard';


function App() {
  return (
    <div className="App">
      <>
      {/* <Admin_dashboard/> */}
      <Profile/>
       {/* <Nav_Bar/>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Container/> 
      </div> */}
      </>
    </div>
  );
}

export default App;
