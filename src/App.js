import './css/sb-admin-2.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Portal from './Portal';
import Dashboard from './Dashboard';
import Students from './Students';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewStudent from './ViewStudent';
import Teachers from './Teachers';
import CreateTeacher from './CreateTeacher';
import EditTeacher from './EditTeacher';
import ViewTeacher from './ViewTeacher';
import Login from './login_component';
import SignUp from './signup_component';
import UserDetails from './userDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} /> */}
          {/* <Route path="/" element={<UserDetails/>} /> */}
          <Route path="/" element={<Portal />} >

            <Route path="portal/dashboard" element={<Dashboard />} />

            <Route path="portal/students" element={<Students />} />
            <Route path="portal/create-student" element={<CreateStudent />} />
            <Route path="portal/students/edit/:id" element={<EditStudent />} />
            <Route path="portal/students/:id" element={<ViewStudent />} />

            <Route path="portal/teachers" element={<Teachers />} />
            <Route path="portal/create-teacher" element={<CreateTeacher />} />
            <Route path="portal/teachers/edit/:id" element={<EditTeacher />} />
            <Route path="portal/teachers/:id" element={<ViewTeacher />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
