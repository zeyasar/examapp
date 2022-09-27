import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StudentAnalyze from "./StudentAnalyze";

const TeacherHome = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid>
          <Typography
            variant="h5"
            style={{
              marginBottom: 25,
              fontWeight: "bold",
            }}
            sx={{ fontSize: { xs: "20px", sm: "25px" } }}
          >
            Öğrenci Eklemek İçin Tıklayın
          </Typography>
        </Grid>

        <Grid>
        <Link to={'/studentadd'} style={{textDecoration:'none'}}>
          <Button variant="contained" size="large" style={{ marginBottom: 25 }}>
            Öğrenci Ekle
          </Button>
          </Link>
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            style={{
              marginBottom: 25,
              fontWeight: "bold",
            }}
            sx={{ fontSize: { xs: "20px", sm: "25px" } }}
          >
            Öğrenci Analiz Ekranı
          </Typography>
        </Grid>

        <Grid>
          <StudentAnalyze/>
        </Grid>
      </Container>
    </>
  );
};

export default TeacherHome;
