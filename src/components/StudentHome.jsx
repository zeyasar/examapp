import React from 'react'
import { 
  Button,
  Container, 
  Grid, 
  Typography, 
} from "@mui/material";
import { Link } from 'react-router-dom';


const StudentHome = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid>
          <Typography
            variant="h5"
            style={{
              marginBottom: 25,
            }}
            sx={{ fontSize: { xs: "20px", sm: "25px" } }}
          >
            Değerli öğrencimiz aşagıdaki ders butonlarına tıkladığınızda önünüze o derse ait soru ekranı gelecek. 10 adet soru için 10 dakika zamanınız var. 10 dk sonra ekran kapanacaktır. 
          </Typography>
        </Grid>

        <Grid>
        <Link to={'/student/math'} style={{textDecoration:'none'}}>
          <Button variant="contained" size="large" sx={{marginRight:'1rem'}}>
            Matematik
          </Button>
          </Link>
          <Link to={'/student/traffic'} style={{textDecoration:'none'}}>
          <Button variant="contained" size="large" sx={{marginRight:'1rem'}}>
            Trafik
          </Button>
          </Link>
          <Link to={'/student/geography'} style={{textDecoration:'none'}}>
          <Button variant="contained" size="large" sx={{marginRight:'1rem'}}>
            Coğrafya
          </Button>
          </Link>
        </Grid>
      </Container>
    </>
  )
}

export default StudentHome