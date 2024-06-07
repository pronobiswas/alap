import React from 'react'
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import MenuBar from '../MenuBar';

const RootLayout = () => {
    
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid xs={1}>
            <MenuBar/>
          </Grid>
          <Grid xs={10}>
            <Outlet/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default RootLayout
