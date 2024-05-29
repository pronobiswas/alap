
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


const Login = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6} className='center'>
            
              <div className="loginBox">
                <h1 className='loginHeadding'>
                Login to your account!
                </h1>
                <div className="logInWithGoogle">
                  <span className='logInWithGoogleIcon'><FcGoogle /></span>
                  <span className='logInWithGoogleTxt'>Login with Google</span>
                </div>
                <div className="inputTxt">
                  <TextField id="outlined-basic" label="Email Address" variant="standard" className='inputItem'/>
                </div>
                <div className="inputTxt">
                  <TextField id="outlined-basic" label="Password" variant="standard" className='inputItem'/>
                </div>
                <Button variant="contained" className='loginBtn'>LogIn to Continue</Button>
                <p>
                  Don’t have an account ? <Link to="/reg">Sign Up</Link>
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
    </>
  )
}

export default Login
