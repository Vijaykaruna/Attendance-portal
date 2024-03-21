import './App.css';
import About from './Components/about/About';
import Login from './Components/login/Login'
import Student from './Components/student/Student';
import Admin from './Components/admin/Admin'
import Dashboard from './Components/dashboard/Dashboard';
import HelpUs from './Components/helpUs/HelpUs';
import Staff from './Components/staff/Staff';
import AddStudent from './Components/staff/AddStudent';
import AddAttendance from './Components/staff/AddAttendance';
import AttendanceReports from './Components/staff/AttendanceReports';
import AddStaff from './Components/admin/AddStaff'
import StaffReport from './Components/admin/StaffReport'
import ViewComplaint from './Components/admin/ViewComplaint'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
       <Router>
        <Dashboard/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/helpus' element={<HelpUs/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/staff' element={<Staff/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/add-student' element={<AddStudent/>}/>
            <Route path='/add-attendance' element={<AddAttendance/>}/>
            <Route path='/attendance-reports' element={<AttendanceReports/>}/>
            <Route path='/add-staff' element={<AddStaff/>}/>
            <Route path='/staff-report' element={<StaffReport/>}/>
            <Route path='/view-complaint' element={<ViewComplaint/>}/>
          </Routes>
        </div>
       </Router>
    </div>
  );
}

export default App;
