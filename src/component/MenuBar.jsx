import React, { useEffect } from 'react'
import { MdNotificationsActive } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdSms } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'




const MenuBar = () => {
const auth = getAuth();
const dispatch = useDispatch();
const navigate = useNavigate();
const loggdata  = useSelector((state) => state.loggedinUderData.value);

 
let handleSignout=()=>{
  signOut(auth).then(() => {
    navigate('/')
    localStorage.removeItem("loggedInUser")
    dispatch(loggedInUser(null))
  }).catch((error) => {
    // An error happened.
  });
}

let moveProfile=()=>{
  navigate('/profile')
}
  
  return (
    <>
      <div id="menuComponent">
        <div onClick={moveProfile}>
          <Avatar
            className='center myAvatar'
              alt={loggdata ? loggdata.displayName : "Guest" }
              
              src="/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60 }}
            />
            <p>{loggdata ? loggdata.displayName : "Guest" }</p>
        </div>
        <ul>
          <li>
            <Link to={"/home"}>
              <span><IoHomeSharp /></span>
            </Link>
          </li>
          <li>
            <Link to={"/masages"}>
              <span><MdSms /></span>
            </Link>
          </li>
          <li><span><MdNotificationsActive /></span></li>
          <li><span><IoIosSettings /></span></li>
          <li >
            <span onClick={handleSignout}><IoMdLogOut /></span>
          </li>
          
          
        </ul>
      </div>
    </>
  )
}

export default MenuBar
