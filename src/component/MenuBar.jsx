import React from 'react'
import { MdNotificationsActive } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdSms } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';



const MenuBar = () => {
  return (
    <>
      <div id="menuComponent">
          <Avatar
            className='center myAvatar'
              alt="aemy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60 }}
            />
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
          <li><span><IoMdLogOut /></span></li>
          
        </ul>
      </div>
    </>
  )
}

export default MenuBar
