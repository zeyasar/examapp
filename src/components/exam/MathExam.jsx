import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import data from "../../data/matematik.json";
import { Link } from "react-router-dom";

function MathExam() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [countdown, setCountdown] = useState(true);

  const optionClicked = () => {
    if (currentQuestion + 1 < data.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setCountdown(false)
    }, 600000);
  }, [])
  
  

  return (
    <Container maxWidth="sm">
      {countdown ? (
        <>
          <Typography gutterBottom variant="h3" component="div">
            Matematik Testi
          </Typography>
          {showResults ? (
            <>
              <h1>Tebrikler Bitirdiniz</h1>
              <Link to={"/student"} style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large">
                  Test Sayfası
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="div">
                Soru: {currentQuestion + 1}/ {data.length}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {data[currentQuestion].soru}
              </Typography>

              <List>
                {data[currentQuestion].cevaplar.map((option, index) => {
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton onClick={optionClicked}>
                        <ListItemIcon>
                          <MoreVertIcon />
                        </ListItemIcon>
                        <ListItemText> {option} </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </>
          )}
        </>
      ) : (
        <Box>
          <Typography gutterBottom variant="h3" component="div">
            Test Hakkınız Bitmiştir!!!
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default MathExam;
