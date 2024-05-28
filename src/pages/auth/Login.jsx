
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


const Login = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <Item>
              <div className="menubar">
                <h1>
                  Get started with easily register
                </h1>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" className='inputTxt'/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" className='inputTxt'/>
                
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
