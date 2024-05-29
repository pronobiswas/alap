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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/>}>
          <Route path='/home' element={<HomePage/>}/>
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
