import React from "react";
import { Outlet, Navigate } from 'react-router-dom';



const StudentPrivate = () => {

  const currentUser = localStorage.getItem('user')
  

  return currentUser ? <Outlet/> : <Navigate to= '/'/>
}

export default StudentPrivate;