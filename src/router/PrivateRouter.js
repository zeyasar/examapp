import React from "react";
import { Outlet, Navigate } from 'react-router-dom';



const PrivateRouter = () => {

  const currentUser = localStorage.getItem('user')
  

  return currentUser ==='admin' ? <Outlet/> : <Navigate to= '/'/>
}

export default PrivateRouter;