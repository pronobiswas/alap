
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getAuth, signInWithEmailAndPassword, signInWithPopup,sendEmailVerification, GoogleAuthProvider,sendPasswordResetEmail,signOut  } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";
// const db = getDatabase();
import { useNavigate } from 'react-router-dom';

import LoginImages from '../../component/Utilities/loginImage.webp'
import Images from '../../component/Utilities/Images';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [forgetMail, setforgetMail] = useState("")
  const emailRegx = "^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$"
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
    
      email: Yup.string()
      .email('Invalid email address')
      .matches(emailRegx , "regx check korchi")
      .required('Required'),
  
      password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(5, "minum 5 charecter")
        .required('Required')
    }),

    onSubmit: (values,actions) => {
      // alert(JSON.stringify(values, null, 2));
      signInWithEmailAndPassword(auth, values.email,values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("loggedInUser" , JSON.stringify(user))
          if(user.emailVerified){
            navigate("/home") 
          }else{
            toast("verify your mail")
          }
        })
        .catch((error) => {
          console.log("problem ache");
          toast("Creadential Error");
        });
    }

  });

  const handleGoogleSignin = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigate("/home") 
      console.log(user);
    }).catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("user pai nai");
      // ...
    });
  }
  const handlereset=()=>{
    sendPasswordResetEmail(auth, forgetMail)
  .then(() => {
    toast("forget mail send hoiche")
    console.log(email);
  })
  .catch((error) => {

    toast("reset a problem ache")
    console.log(email);
    // ..
  });
  }
  
   
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Grid container>

          <Grid item xs={6} className='center'>
            
              <div className="loginBox">
                <h1 className='loginHeadding'>
                  Login to your account!
                </h1>
                <div onClick={handleGoogleSignin} className="logInWithGoogle">
                  <span className='logInWithGoogleIcon'><FcGoogle /></span>
                  <span className='logInWithGoogleTxt'>Login with Google</span>
                </div>

                <form onSubmit={formik.handleSubmit}>
                {/* //email TextField */}
                  <div className="inputTxt">  
                    <TextField 
                    id="email" 
                    label="Email Address" 
                    variant="standard" 
                    name="email"
                    type="email"
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    className='inputItem'/>

                    {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                    ) : null}

                  </div>
                  {/* password input fild */}
                  <div className="inputTxt">
                    <TextField 
                    id="password" 
                    name="password" 
                    type="password"
                    onChange={formik.handleChange} 
                    value={formik.values.password}
                    label="Password" 
                    variant="standard" 
                    className='inputItem'/>
                    {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <Button variant="contained" className='loginBtn' type='submit'>LogIn to Continue</Button>

                  <span onClick={handleOpen} className='forgotPass'>Forgot Password?</span>

                </form>

                <p>
                  Don’t have an account ! <Link to="/reg">Sign Up</Link>
                </p>
              </div>
            
          </Grid>
          <Grid item xs={6}>
            <div className="loginImgBox">
              <Images source={LoginImages} alt="logIn Images" styleing="loginImg"/>
            </div>
          </Grid>

        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom:10}}>
              Enter Your Email Address
            </Typography>
            <div className="forgotMailInput">  
                    <TextField 
                    id="email" 
                    label="Email Address" 
                    variant="standard" 
                    name="email"
                    type="email"
                    onChange={(e)=>setforgetMail(e.target.value)}
                    value={forgetMail} 
                    className='inputItem'/>
            </div>   
            <Button onClick={handlereset} variant="contained" color="success" type='submit'>Reset Password</Button>
          </Box>
        </Modal>
        
        
      </Box>
    </>
  )
}

export default Login
