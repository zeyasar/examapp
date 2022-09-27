import React from "react";
import {
  CardActionArea,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import student from '../assets/Student.png'
import teacher from '../assets/teacher.png'
import { useNavigate } from "react-router-dom";


const Home = () => {
 
  const navigate = useNavigate()

  
  const handleClick = (e) => {
    const title = e
    navigate('/login', {state:title}) 
  }
  return (
    <>
      
      <Container maxWidth="sm">
        
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 445 }}>
              <CardActionArea onClick={()=>handleClick('Öğrenci Girişi')}>
                <CardMedia
                  component="img"
                  height="240"
                  image={student}
                  alt="ogrenci"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Öğrenci Girişi
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={()=>handleClick('Öğretmen Girişi')}>
                <CardMedia
                  component="img"
                  height="240"
                  image={teacher}
                  alt="ogretmen"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Öğretmen Girişi
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
