<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Nav_Bar from "./Nav_bar";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import { ChatState } from "../ChatProvider";

// function LoginPage() {
//     const navigate = useNavigate();
//     const [value, setValue] = useState("admin");
//     const { user, setUser } = ChatState();
//   const [loginDetails, setLoginDetails] = useState({
//     username: "",
//     password: "",
//   });

//   const handleTabChange = (newValue) => {
//     setValue(newValue);
//   };

//   console.log(value);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setLoginDetails({ ...loginDetails, [name]: value });
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();
//     console.log("Login button clicked for:", value);
//     console.log("Login details:", loginDetails);
//     Your login logic here
//   }

//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const submitHandler = async() => {


//     try {
//       const config = {headers:{"Content-type": "application/json",},};
//       const { data } = await axios.post("http://localhost:4000/api/user/login",{email,password},config);
//       console.log(JSON.stringify(data));
//       localStorage.setItem("userInfo",JSON.stringify(data));

//        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//        setUser(userInfo);
//       navigate("/Admin_dashboard");
//     } catch (e) {
//       console.log(e);
//     }
// }


//   return (
//     <Container component="main" maxWidth={false} disableGutters>
//       {/*<Typography component="h1" variant="h3" sx={{ mt: 4, mb: 4 }}>
//         NEEPCO
//       </Typography>*/}

//       {/* <Nav_Bar /> */}
//       {/* Header Section */}
//       <div
//         style={{
//           padding: "5rem", // Adds 20px of padding inside the div
//           margin: "40px 60px", // Adds 10px of margin around the div
//         }}
//       >
//         <Box sx={{ width: "100%" }}></Box>

//         {/* Tabs for Admin and Vendor */}
//         <Box sx={{ width: "100%" }}>
//           {/*<Tabs
//             value={value}
//             onChange={handleTabChange}
//             textColor="primary"
//             indicatorColor="secondary"
//             aria-label="secondary tabs example"
//           >
//             <Tab value="admin" label="Admin"  />
//             <Tab value="vendor" label="Vendor" />
//       </Tabs>*/}
//       <div style={{ display: "flex", justifyContent: "center" }}>
//             <Button
//               variant={value === "admin" ? "contained" : "outlined"}
//               onClick={() => handleTabChange("admin")}
//               style={{ marginRight: "16px" }}
//             >
//               Admin
//             </Button>
//             <Button
//               variant={value === "vendor" ? "contained" : "outlined"}
//               onClick={() => handleTabChange("vendor")}
//             >
//               Vendor
//             </Button>
//           </div>
//         </Box>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6}>
//             <Paper elevation={6} sx={{ p: 3 }}>
//               <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
//                 Sign In as {value.charAt(0).toUpperCase() + value.slice(1)}
//               </Typography>
//               <Box component="form" onSubmit={handleLogin} noValidate>
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="username"
//                   label="Username"
//                   name="username"
//                   autoComplete="username"
//                   autoFocus
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                   onClick={submitHandler}
//                 >
//                   Sign In
//                 </Button>
//                 <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', cursor: 'pointer', color: 'primary.main' }}
//     onClick={() => navigate('/SignUp')} // Replace with your route
//   >
//     Already have an account? Click here
//   </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="body1" sx={{ mt: 3 }}>
//               Since 1976, NEEPCO has been a cornerstone in power generation in
//               India's North Eastern region. As a proud Schedule A- Miniratna
//               Category-I CPSE under the Ministry of Power, Government of India,
//               we specialize in:
//               <br />
//               <br />
//               <br />
//               Operating the largest hydroelectric power plant in the North East.
//               <br />
//               <br />
//               Unique distinction of running both hydro and thermal power
//               stations.
//               <br />
//               <br />
//               Expertise in constructing and operating hydro projects in the
//               challenging terrain of the North East.
//             </Typography>
//           </Grid>
//         </Grid>
//       </div>
//     </Container>
//   );
// }

// export default LoginPage;

// import React, { useState } from 'react';
// import { useTheme, useMediaQuery } from '@mui/material';
// import Container from '@mui/material/Container';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function LoginPage() {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
//   const [value, setValue] = useState('admin');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleTabChange = (newValue) => {
//     setValue(newValue);
//   };

//   const submitHandler = async () => {
//     try {
//       const config = { headers: { 'Content-type': 'application/json' } };
//       const { data } = await axios.post('http://localhost:4000/api/user/login', { email, password }, config);
//       console.log(JSON.stringify(data));
//       localStorage.setItem('userInfo', JSON.stringify(data));
//       navigate('/Admin_dashboard');
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <Container component="main" maxWidth={false} disableGutters>
//       <div style={{ padding: isMobile ? '2rem' : '5rem', margin: isMobile ? '20px 30px' : '40px 60px' }}>
//         <Box sx={{ width: '100%' }}></Box>

//         <Box sx={{ width: '100%', marginBottom: 3 }}>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <Button
//               variant={value === 'admin' ? 'contained' : 'outlined'}
//               onClick={() => handleTabChange('admin')}
//               style={{ marginRight: '16px' }}
//             >
//               Admin
//             </Button>
//             <Button
//               variant={value === 'vendor' ? 'contained' : 'outlined'}
//               onClick={() => handleTabChange('vendor')}
//             >
//               Vendor
//             </Button>
//           </div>
//         </Box>

//         <Grid container spacing={isMobile ? 2 : 3}>
//           <Grid item xs={12} md={6}>
//             <Paper elevation={6} sx={{ p: 3 }}>
//               <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
//                 Sign In as {value.charAt(0).toUpperCase() + value.slice(1)}
//               </Typography>
//               <Box component="form" onSubmit={submitHandler} noValidate>
//               <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="username"
//                   label="Username"
//                   name="username"
//                   autoComplete="username"
//                   autoFocus
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign In
//                 </Button>
//                 <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', cursor: 'pointer', color: 'primary.main' }}
//                   onClick={() => navigate('/SignUp')} // Replace with your route
//                 >
//                   Already have an account? Click here
//                 </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//           <Typography variant="body1" sx={{ mt: 3 }}>
//               Since 1976, NEEPCO has been a cornerstone in power generation in
//               India's North Eastern region. As a proud Schedule A- Miniratna
//               Category-I CPSE under the Ministry of Power, Government of India,
//               we specialize in:
//               <br />
//               <br />
//               <br />
//               Operating the largest hydroelectric power plant in the North East.
//               <br />
//               <br />
//               Unique distinction of running both hydro and thermal power
//               stations.
//               <br />
//               <br />
//               Expertise in constructing and operating hydro projects in the
//               challenging terrain of the North East.
//             </Typography>
//           </Grid>
//         </Grid>
//       </div>
//     </Container>
//   );
// }

// export default LoginPage;

import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery, Container, TextField, Button, Typography, Grid, Paper, Box, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
=======
import React, { useState, useEffect } from "react";
import { useTheme, useMediaQuery, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
/*import Nav_Bar from "./Nav_bar";
import Tabs from "@mui/material/Tabs"; // Import Tabs
import Tab from "@mui/material/Tab";
import { ChatState } from "../ChatProvider";*/
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
>>>>>>> f7eeef8010d8e995ddba7336cc135b53372e28e3

function LoginPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [value, setValue] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberedCredentials = localStorage.getItem("rememberedCredentials");
    if (rememberedCredentials) {
      const credentials = JSON.parse(rememberedCredentials);
      setEmail(credentials.email);
      setPassword(credentials.password);
      setRememberMe(true);
    }
  }, []);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { "Content-type": "application/json" } };
      const { data } = await axios.post(
        "http://localhost:4000/api/user/login",
        { email, password },
        config
      );
      console.log(JSON.stringify(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(value === "admin" ? "/Admin_dashboard" : "/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="main-loginpage">
        <div className="header-login">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/North_Eastern_Electric_Power_Corporation_Logo.svg/1200px-North_Eastern_Electric_Power_Corporation_Logo.svg.png"
            alt="MARQUE"
            width="45vw"
            height="45vh"
            style={{
              marginTop: "0px",
              marginLeft: "0.75rem",
            }}
          />
          <h3 style={{ textAlign: "right" }}>
            NORTH EASTERN ELECTRIC POWER CORPORATION LIMITED
          </h3>
        </div>

        <Carousel fade interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/26/39/35/2639354b6de462f1fe9e25053c103d1b.jpg"
              alt="img1 "
              style={{ height: "500px", objectFit: "cover", marginTop: "auto" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/b6/66/1a/b6661a90d51c8c47f97e2f7c7b5dbb14.jpg"
              alt="img2 "
              style={{ height: "500px", objectFit: "cover", marginTop: "auto" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/aa/b5/bd/aab5bd54e7c458320d0bd3d996a04f22.jpg"
              alt=" alt3"
              style={{ height: "500px", objectFit: "cover", marginTop: "auto" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/24/a5/ac/24a5acc39a2b83a389966dee6eefdc76.jpg"
              alt=" alt4"
              style={{ height: "500px", objectFit: "cover", marginTop: "auto" }}
            />
          </Carousel.Item>
        </Carousel>
        <div
          className="bodylogin"
          style={{
            marginTop: "20px",
            marginLeft: "140px",
            marginRight: "160px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "4rem",
              textEmphasis: "black",
              fontFamily: "sans-serif",
            }}
          >
            NEEPCO
          </h2>
          <p style={{ textAlign: "justify", fontSize: "medium" }}>
            {" "}
            Pioneering Power Generation in India's North East
          </p>
          <p>
            Founded in 1976, NEEPCO has been powering the North Eastern region
            of India as a premier power generation enterprise. As a Schedule
            A-Miniratna Category-I CPSE, we operate under the Ministry of Power,
            Government of India, specializing in hydro and thermal power
            generation in the challenging terrains of the North East.Operating
            under the Ministry of Power, Government of India, NEEPCO is
            dedicated to harnessing the vast power potential of the region,
            specializing in hydro, thermal, and solar power production.
          </p>
          <h2 style={{ color: "green" }}>
            Our Mission : Harnessing India's vast power potential through
            eco-friendly and planned development of power projects.
          </h2>
          <p>
            Operators of the largest hydro power station in the North Eastern
            region. Unique as the only CPSU managing both hydro and thermal
            power plants. Pioneers in executing hydro projects in the
            geotechnically challenging landscapes of the North East.
            <br />
            With its Corporate Office is located in Shillong, the capital of
            Meghalaya, NEEPCO is equipped with a wealth of construction and
            operations experience and our human resource is committed to harness
            the huge power potential of the country with minimal impact on the
            environment .
          </p>
          <br />
          <h2 style={{ color: "green" }}>
            About Us : MOST Trusted power generation company{" "}
          </h2>
          <p>
            NEEPCO has been a trusted power generation company in the North
            Eastern region of India and beyond since 1976, working closely with
            the Ministry of Power and the north eastern states to act in their
            best interest in tapping the enormous power potential of the region
            and the country.The company plays a pivotal role in power generation
            and development, contributing significantly to the economic growth
            of the northeastern states.
            <br />
            North Eastern Electric Power Corporation Limited (NEEPCO) is a
            premier power-generating company in India that operates primarily in
            the northeastern region of the country.
          </p>
        </div>

        <Container component="main" maxWidth={false} disableGutters>
          <div
            style={{
              padding: isMobile ? "2rem" : "5rem",
              margin: isMobile ? "20px 30px" : "40px 60px",
            }}
          >
            <Box sx={{ width: "100%" }}></Box>

            <Box sx={{ width: "100%", marginBottom: 3 }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant={value === "admin" ? "contained" : "outlined"}
                  onClick={() => handleTabChange("admin")}
                  style={{ marginRight: "16px" }}
                >
                  Admin
                </Button>
                <Button
                  variant={value === "vendor" ? "contained" : "outlined"}
                  onClick={() => handleTabChange("vendor")}
                >
                  Vendor
                </Button>
              </div>
            </Box>

            <Grid container spacing={isMobile ? 2 : 3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={6} sx={{ p: 3 }}>
                  <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
                    Sign In as {value.charAt(0).toUpperCase() + value.slice(1)}
                  </Typography>
                  <Box component="form" onSubmit={submitHandler} noValidate>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          color="primary"
                        />
                      }
                      label="Remember Me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 2,
                        textAlign: "center",
                        cursor: "pointer",
                        color: "primary.main",
                      }}
                      onClick={() => navigate("/SignUp")}
                    >
                      Don't have an account? Click here
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  sx={{ mt: 3, pl: 3 }}
                  className="bodylogin"
                >
                  <h2>
                    <b>Vendor </b>
                  </h2>
                  <p>
                    1. Open the website and find "Vendor Login" in the
                    navigation. <br />
                    2. Enter your credentials and complete security steps.{" "}
                    <br />
                    3. Access the vendor dashboard for management.
                    <br /> 4. Logout securely when finished.
                  </p>
                  <h2>
                    <b>Admin Login</b>
                  </h2>
                  <p>
                    1. Locate "Admin Login" on the homepage.
                    <br />
                    2. Enter admin credentials and fulfill security
                    requirements.
                    <br />
                    3. Access the admin control panel for site management.
                    <br />
                    4. Logout securely after completing tasks.
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Container>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <ul className="footer-list">
                <li>Home</li>
                <li>Reservoir Status</li>
                <li>RTI</li>
                <li>Vigilance</li>
                <li>R&D</li>
                <li>Property Return</li>
              </ul>
            </div>
            <div className="footer-section">
              <ul className="footer-list">
                <li>Ex-Employee Desk</li>
                <li>Public Grievance</li>
                <li>MSEs & Startups</li>
                <li>Contractual Vendors</li>
                <li>Offer Works</li>
                <li>Guideline for Release of 75% of Arbitral Awards</li>
              </ul>
            </div>
            <div className="footer-section">
              <ul className="footer-list">
                <li>Integrity Pact</li>
                <li>Feedback</li>
                <li>Generation</li>
                <li>Awards</li>
                <li>BEE Painting Competition</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-section">
              <ul className="footer-list">
                <li>Integrity Pledge</li>
                <li>Archived News</li>
                <li>Help</li>
              </ul>
              <div className="footer-policies">
                <span>Website Policies</span>
                <span>Disclaimer</span>
                <span>Privacy Statement</span>
              </div>
              <div className="footer-certifications">
                <span>ISO 9001, ISO 14001, ISO 27001 and ISO 45001</span>
                <span>CIN: U40101ML1976GOI001658</span>
              </div>
              <div className="footer-stats">
                <span>No. of Visitors: 4798573</span>
                <span>Last Updated: 20/12/2023</span>
              </div>
            </div>
            <div className="footer-logo">
              <img
                src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/12/NEEPCO-Logo.jpg"
                alt="Company Logo"
              />
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              Copyright © 2017 North Eastern Electric Power Corporation Ltd.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
