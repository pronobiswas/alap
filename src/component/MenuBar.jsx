import React from 'react'
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
const loggdata = useSelector((state) => state.loggedinUderData.value);
const dispatch = useDispatch();
const navigate = useNavigate()

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate("/")
      localStorage.removeItem("loggedInUser");
      dispatch(loggdata(null))
      console.log(loggdata);
    }).catch((error) => {
      // An error happened.
      console.log("signOut korte pari nai")
    });
  }
  return (
    <>
      <div id="menuComponent">
          <Avatar
            className='center myAvatar'
              alt={loggdata.displayName}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60 }}
            />
            <p>{loggdata.displayName}</p>
        <ul>
          <li>
            <Link to={"/profile"}>
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
          <li onClick={handleSignOut}>
            <span><IoMdLogOut /></span>
          </li>
          
          
        </ul>
      </div>
    </>
  )
}

export default MenuBar
