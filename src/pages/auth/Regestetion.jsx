import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

  const auth = getAuth();

  const emailRegx = "^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$"
  const formik = useFormik({
    initialValues: {
      signupmail: '',
      signUppassword: '',
      fullname: '',
    },

    validationSchema: Yup.object({
    
      signupmail: Yup.string()
      .email('Invalid email address')
      .matches(emailRegx , "Enter Your Full mail")
      .required('Required'),
  
      signUppassword: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(5, "minum 5 charecter")
        .required('Required')
    }),

    onSubmit: (values,actions) => {
      // alert(JSON.stringify(values, null, 2));
      
      signInWithEmailAndPassword(auth, signupmail, signUppassword)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(userCredential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

        actions.resetForm();
    }
  })

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
                  <form onSubmit={formik.handleSubmit}>

                    <div className="inputTxt">
                      <TextField 
                      id="signupmail" 
                      label="Email Address" 
                      variant="standard" 
                      name="signupmail"
                      type="email"
                      onChange={formik.handleChange} 
                      value={formik.values.signupmail} 
                      className='inputItem'/>
                      {formik.touched.signupmail && formik.errors.signupmail ? (
                      <div>{formik.errors.signupmail}</div>
                      ) : null}
                    </div>
                    <div className="inputTxt">
                      <TextField 
                        id="fullname" 
                        label="fullname" 
                        variant="standard" 
                        name="fullname"
                        type="text"
                        onChange={formik.handleChange} 
                        value={formik.values.fullname} 
                        className='inputItem'/>
                    </div>
                    <div className="inputTxt">
                      <TextField 
                      id="signUppassword" 
                      label="signUppassword" 
                      variant="standard" 
                      name="signUppassword"
                      type="password"
                      onChange={formik.handleChange} 
                      value={formik.values.signUppassword} 
                      className='inputItem'/>
                      {formik.touched.signUppassword && formik.errors.signUppassword ? (
                      <div>{formik.errors.signUppassword}</div>
                      ) : null}
                    </div>
                    <Button variant="contained" className='SignUpBtn' type='submit'>Sign Up</Button>
                  </form>
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
