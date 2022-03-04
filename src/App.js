import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Courses from "./components/courses/Courses";
import Login from "./components/login/Login";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Studentenroll from "./components/enrollmentform/Studentenroll";
import EmpApprove from "./components/empapprove/EmpApprove";
import AllStudents from "./components/student/AllStudents";
import Employenroll from "./components/enrollmentform/Employenroll";
// import Footer from "./components/footer/Footer";
import EmployeeUpdate from './components/employee/EmployeeUpdate';
import EmployeeUpdateform from './components/employee/EmployeeUpdateform';
import StudentProfile from "./components/student/StudentProfile";
import SimpleContainer from "./components/searchpage/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path='/'  element={<Home/>} exact/>
          <Route path="/courses" element={<Courses/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/allstudents' element={<AllStudents />} />
          <Route path="/stud-profile/:studid" element={<StudentProfile />}  />
          <Route path="/empapprove" element={<EmpApprove />} />
          <Route path="/studentenroll" element={<Studentenroll/>} />
          <Route path="/employenroll" element={<Employenroll/>} />
          <Route path="/emp-update" element={<EmployeeUpdate />} />
          <Route path="/emp-updateform/:name" element={<EmployeeUpdateform />} />
          <Route path="/search" element={<SimpleContainer />} />
         
        </Routes>
        
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
