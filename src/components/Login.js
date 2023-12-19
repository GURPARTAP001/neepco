import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Nav_Bar from "./Nav_bar";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { ChatState } from "../ChatProvider";

function LoginPage() {
    const navigate = useNavigate();
    const [value, setValue] = useState("admin");
    const { user, setUser } = ChatState();
 /* const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });*/

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  console.log(value);

  /*const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };*/

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login button clicked for:", value);
    //console.log("Login details:", loginDetails);
    // Your login logic here
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async() => {


    try {
      const config = {headers:{"Content-type": "application/json",},};
      const { data } = await axios.post("http://localhost:4000/api/user/login",{email,password},config);
      console.log(JSON.stringify(data));
      localStorage.setItem("userInfo",JSON.stringify(data));

       const userInfo = JSON.parse(localStorage.getItem("userInfo"));
       setUser(userInfo);
      navigate("/Admin_dashboard");
    } catch (e) {
      console.log(e);
    }
}


  return (
    <Container component="main" maxWidth={false} disableGutters>
      {/*<Typography component="h1" variant="h3" sx={{ mt: 4, mb: 4 }}>
        NEEPCO
      </Typography>*/}

      {/* <Nav_Bar /> */}
      {/* Header Section */}
      <div
        style={{
          padding: "5rem", // Adds 20px of padding inside the div
          margin: "40px 60px", // Adds 10px of margin around the div
        }}
      >
        <Box sx={{ width: "100%" }}></Box>

        {/* Tabs for Admin and Vendor */}
        <Box sx={{ width: "100%" }}>
          {/*<Tabs
            value={value}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="admin" label="Admin"  />
            <Tab value="vendor" label="Vendor" />
      </Tabs>*/}
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

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={6} sx={{ p: 3 }}>
              <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
                Sign In as {value.charAt(0).toUpperCase() + value.slice(1)}
              </Typography>
              <Box component="form" onSubmit={handleLogin} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submitHandler}
                >
                  Sign In
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Since 1976, NEEPCO has been a cornerstone in power generation in
              India's North Eastern region. As a proud Schedule A- Miniratna
              Category-I CPSE under the Ministry of Power, Government of India,
              we specialize in:
              <br />
              <br />
              <br />
              Operating the largest hydroelectric power plant in the North East.
              <br />
              <br />
              Unique distinction of running both hydro and thermal power
              stations.
              <br />
              <br />
              Expertise in constructing and operating hydro projects in the
              challenging terrain of the North East.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default LoginPage;