import React from 'react'
import { MdNotificationsActive } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdSms } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Avatar } from '@mui/material';



const MenuBar = () => {
  return (
    <>
      <div id="menuComponent">
          <Avatar
              alt="aemy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60 }}
            />
        <ul>
          <li><span><IoHomeSharp /></span></li>
          <li><span><MdSms /></span></li>
          <li><span><MdNotificationsActive /></span></li>
          <li><span><IoIosSettings /></span></li>
          <li><span><IoMdLogOut /></span></li>
          
        </ul>
      </div>
    </>
  )
}

export default MenuBar
