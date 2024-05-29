import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import Button from '@mui/material/Button';



import LoginImages from '../../component/Utilities/loginImage.webp'
import Images from '../../component/Utilities/Images';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Regestetion = () => {
  return (
    <>
      <div id="signUpSection">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6} className='center'>
              
                <div className="loginBox">
                  <h1 className='loginHeadding'>
                    Get started with easily register
                  </h1>
                  <p>Free register and you can enjoy it</p>
                  <div className="inputTxt">
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" className='inputItem'/>
                  </div>
                  <div className="inputTxt">
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" className='inputItem'/>
                  </div>
                  <div className="inputTxt">
                    <TextField id="outlined-basic" label="Password" variant="outlined" className='inputItem'/>
                  </div>
                  <Button variant="contained" className='SignUpBtn'>Sign Up</Button>
                  <p>
                    Alredy have an account ? <Link to="/">Sign In</Link>
                  </p>
                </div>
              
            </Grid>
            <Grid item xs={6}>
              <div className="loginImgBox">
                <Images source={LoginImages} alt="logIn Images" styleing="loginImg"/>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Regestetion
