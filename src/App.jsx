import React from 'react'
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route, RouterProvider
  } from "react-router-dom";
import Login from './pages/auth/Login';
import ErrorPage from './pages/errorPage/ErrorPage';
import RootLayout from './component/layout/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/>}>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
        <Route path='/' element={<Login/>}/>
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
