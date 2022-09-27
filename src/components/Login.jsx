import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import data from '../data/student-data.json' 

function Login() {
  const location = useLocation()
  const header = location.state
  // console.log(header)
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (header==='Öğretmen Girişi') {
      if (inputs.userName.toLowerCase() ==='admin' && inputs.password==='123456') {
        localStorage.setItem('user', 'admin')
        navigate('/teacher')
      }
    }else{
      if(data.filter(item=>item.name.toLowerCase() === inputs.userName.toLowerCase()).length >=1){
        localStorage.setItem('user', inputs.userName)
        navigate('/student')
      }
    }
  };

  return (
    <div className="App">
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Card
          sx={{
            width: {
              xs: 300,
              sm: 500,
              md: 600,
              lg: 600,
              xl: 600,
            },
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
              sx={{
                width: {
                  xs: 200,
                  sm: 400,
                  md: 400,
                  lg: 400,
                  xl: 400,
                },
              }}
            >
              <Typography
                variant="h5"
                style={{
                  marginBottom: 25,
                  fontWeight: "bold",
                }}
                sx={{ fontSize: { xs: "20px", sm: "25px" } }}
              >
                {header}
              </Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid
                sx={{
                  width: {
                    xs: 200,
                    sm: 400,
                    md: 400,
                    lg: 400,
                    xl: 400,
                  },
                }}
              >
                <Grid item xs={10} style={{ marginBottom: 15 }}>
                  <TextField
                    value={inputs.userName}
                    onChange={handleChange}
                    type={"text"}
                    placeholder="Kullanıcı Adı"
                    label="User Name"
                    variant="outlined"
                    name="userName"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    value={inputs.password}
                    onChange={handleChange}
                    type={"password"}
                    placeholder="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={10}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginBottom: 15, marginTop: 15 }}
                    disabled={
                      inputs.userName.length < 5 || inputs.userName.length > 20
                    }
                    
                  >
                    Login
                  </Button>
                </Grid>
                <Typography style={{ marginBottom: 10 }}>
                  Forgot password ?
                </Typography>
                <Typography>Do you have an account ?Sign Up</Typography>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Login;