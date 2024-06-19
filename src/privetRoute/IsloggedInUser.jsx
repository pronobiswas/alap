import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Login from '../pages/auth/Login';

const IsloggedInUser = () => {
    const loggdata  = useSelector((state) => state.loggedinUderData.value);
  return loggdata ? <Outlet/> : <Login/>
  
}

export default IsloggedInUser
