import React from 'react'
import {
    CssBaseline,
    Typography,
    Box,
    AppBar,
    Toolbar,
  } from "@mui/material";

const Navbar = () => {
  return (
    <>
        <CssBaseline />
      <Box sx={{ flexGrow: 1, marginBottom:'2rem' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Online Exam App
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
    </>
  )
}

export default Navbar