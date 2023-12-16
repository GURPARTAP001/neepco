import './App.css';
import Nav_Bar from './components/Nav_bar';
import Container from './components/Container';
import Profile from './profile_components/profile';

function App() {
  return (
    <div className="App">
      <>
      <Profile/>
      {/* <Nav_Bar/>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Container/> */}
      {/* </div> */}
      </>
    </div>
  );
}

export default App;
