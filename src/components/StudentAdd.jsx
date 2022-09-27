import { 
  Grid,
  TextField,
  Button,
  Stack,
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody 
} from '@mui/material'
import React, { useState } from 'react'
import data from '../data/student-data.json' 
import { v4 as uuidv4 } from 'uuid';

const StudentAdd = () => {
  const [mydata, setMydata] = useState(data)
  const [info, setInfo] = useState({
    name: '',
    surname:'',
    matematik: '',
    trafik:'',
    cografya:'',
    id: uuidv4()
  })

  const handleChange = (e)=>{
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    setMydata([...mydata,info])
    setInfo({
      name: '',
      surname:'',
      matematik: '',
      trafik:'',
      cografya:'',
      id: uuidv4()
    })

  }
 
  
  return (
    <div className='studentadd'>
      <Grid container
      textAlign="center"
      verticalalign="middle"
      direction="column"
      style={{ width: "300px" }} 
    >
      <h2 className="contact-header">Öğrenci Ekle</h2>
      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form 
        onSubmit={handleFormSubmit}
        >
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="name"
              value={info.name}
              onChange={handleChange}
              placeholder="Ad"
            />
            <TextField
              variant="outlined"
              name="surname"
              value={info.surname}
              onChange={handleChange}
              placeholder="Soyad"
            />
            <TextField
              variant="outlined"
              name="matematik"
              value={info.matematik}
              onChange={handleChange}
              placeholder="Matematik"
            />
            <TextField
              variant="outlined"
              name="trafik"
              value={info.trafik}
              onChange={handleChange}
              placeholder="Trafik"
            />
            <TextField
              variant="outlined"
              name="cografya"
              value={info.cografya}
              onChange={handleChange}
              placeholder="Coğrafya"
            />
            <Button variant="contained" type="submit" value="submit">
              ADD
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
    <TableContainer component={Paper} sx={{marginRight:'1rem'}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ad</TableCell>
              <TableCell>Soyad</TableCell>
              <TableCell>Matematik</TableCell>
              <TableCell>Trafik</TableCell>
              <TableCell>Coğrafya</TableCell>
            </TableRow>
          </TableHead>        
         
          <TableBody>
                 {mydata.map((item,index) => (
                  <TableRow key={index}>
                    <TableCell textalign="center">{item.name}  </TableCell>
                    <TableCell textalign="center">{item.surname}</TableCell>
                    <TableCell textalign="center">{item.matematik}</TableCell> 
                    <TableCell textalign="center">{item.trafik}</TableCell>
                    <TableCell textalign="center">{item.cografya}</TableCell>
                  </TableRow>
                 )
                 )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default StudentAdd