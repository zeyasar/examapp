import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import TeacherHome from "../components/TeacherHome";
import StudentHome from "../components/StudentHome";
import StudentAdd from "../components/StudentAdd";
import MathExam from "../components/exam/MathExam";
import TrafficExam from "../components/exam/TrafficExam";
import GeoExam from "../components/exam/GeoExam";
import PrivateRouter from "./PrivateRouter";
import StudentPrivate from "./StudentPrivate";


const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teacher" element={<PrivateRouter />}>
            <Route path="" element={<TeacherHome />} />
          </Route>
          <Route path="/studentadd" element={<PrivateRouter />}>
            <Route path="" element={<StudentAdd />} />
          </Route>
          <Route path="/student" element={<StudentPrivate />}>
          <Route path="" element={<StudentHome />} />
          </Route>
          <Route path="/student/math" element={<StudentPrivate />}>
          <Route path="" element={<MathExam />} />
          </Route>
          <Route path="/student/traffic" element={<StudentPrivate />}>
          <Route path="" element={<TrafficExam />} />
          </Route>
          <Route path="/student/geography" element={<StudentPrivate />}>
          <Route path="" element={<GeoExam />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
