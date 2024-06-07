import React from 'react'
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route, RouterProvider
  } from "react-router-dom";
import Login from './pages/auth/Login';
import ErrorPage from './pages/errorPage/ErrorPage';
import RootLayout from './component/layout/RootLayout';
import Regestetion from './pages/auth/Regestetion';
import HomePage from './pages/homePage/HomePage'
import Masages from './pages/masages/Masages';
import Profiles from './pages/profiles/Profiles';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/>}>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/masages' element={<Masages/>}/>
          <Route path='/profile' element={<Profiles/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/reg' element={<Regestetion/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
