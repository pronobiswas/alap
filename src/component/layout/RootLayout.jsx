import React from 'react'
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Login from '../../pages/auth/Login';
import MenuBar from '../MenuBar';

const RootLayout = () => {
    
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid>
            <MenuBar/>
          </Grid>
          <Grid>
            <Outlet/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default RootLayout
