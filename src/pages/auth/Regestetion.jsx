import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import firebaseConfig from '../../configaretion/FirebaseConfig';
import 'react-toastify/dist/ReactToastify.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getAuth,createUserWithEmailAndPassword, sendEmailVerification ,updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

import LoginImages from '../../component/Utilities/loginImage.webp'
import Images from '../../component/Utilities/Images';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Hourglass, Puff, ThreeDots } from 'react-loader-spinner';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Regestetion = () => {

  const [buffLoader, setbuffLoader] =useState(false)
  const [loader, setLoader] = useState(false);
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate()

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

      setLoader(true);
      setbuffLoader(true)

      const auth = getAuth();
        createUserWithEmailAndPassword(auth, values.signupmail, values.signUppassword)
         .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(auth.currentUser)
            .then(() => {
              updateProfile(auth.currentUser, {
                displayName: values.fullname, 
                photoURL: "https://example.com/user/profile.jpg"
              }).then(() => {
                  set(ref(db, 'users/' + userCredential.user.uid), {
                  username: userCredential.user.displayName,
                  email: userCredential.user.email,
                  profile_picture : "imageUrl"
                }).then(()=>{
                  setLoader(false)
                  setbuffLoader(false)
                  toast("Regestetion successfull")
                  setTimeout(()=>{
                    navigate("/")
                  },2000)
                });
              }).catch((error) => {
                console.log("filed");
                setbuffLoader(false)
              });
              console.log(values);
              console.log(userCredential);
              actions.resetForm()
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
          
            
    }

  })

  return (
    <>
      <div id="signUpSection">
        <Box sx={{ flexGrow: 1 }}>
          {
            buffLoader 
            &&   
          <div className="bufLoader">
            <div className="buf">
            <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#fff', '#fff']}
            />
            </div>
          </div>
          }
            
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        <ToastContainer />
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
                    <Button variant="contained" className='SignUpBtn' type='submit'>
                      
                      {
                        loader 
                        ?
                        
                        <ThreeDots
                        visible={true}
                        height="40"
                        width="80"
                        color="#fff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        />
                        :
                        <span>Sign Up</span>
                      }
                    </Button>
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
