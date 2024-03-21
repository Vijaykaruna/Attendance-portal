import React from 'react'
import './Staff.css';
import user_icon from '../images/profile.png'; 
import { Link } from 'react-router-dom';

const Staff=()=>{
  return (
    <div className='container-stf'>
      <title>Staff Page</title>
      <div className='stf-cont-form' style={{display:'flex'}}>
         <div className='left-cont-stf'>
         <h2 style={{textDecoration:'underline', color:'#2b5abe',textShadow:'2px 2px 4px white'}}>MY PROFILE</h2>
                <img src={user_icon} alt="profile" width={100}style={{boxShadow: '7px 10px Lightblue'}} />
                <p>Name : xxx</p>
                <p>ID : 11CS21 </p>
                <p>Class: XI</p>
                <p>Mob No : 9090909090</p>
                <p>Email : abc123@gmail.com</p>
                <p>Address : Coimbatore,Tamil Nadu</p>
                <div className='btn-form-stf' style={{display:'grid'}}>
                  <button className='btn-opn'><Link exact to ="/add-student" className='stf-link'>Add Student</Link></button>
                  <button className='btn-opn'><Link exact to ="/add-attendance" className='stf-link'>Add attendance</Link></button>
                  <button className='btn-opn'><Link exact to ="/attendance-reports" className='stf-link'>Attendance Reports</Link></button>
                </div>
         </div>
         <div className='right-cont-stf' style={{padding:'3% 5% 3% 10%'}}>
            <div className='output-stf'>
            <h2>Student List</h2>
              <table className='output-table-stf'>
                <tr className='output-head-stf'style={{backgroundColor:'#7eb4c2'}}>
                  <th>Roll no</th>
                  <th>Name</th>
                  <th>Edit</th>
                </tr>
                <tr className='output-ans-stf'>
                  <td>21CS101</td>
                  <td>Akilan</td>
                  <td><a href='#'>Delete</a></td>
                </tr>
                <tr className='output-ans-stf'>
                  <td>21CS102</td>
                  <td>Praveen</td>
                  <td><a href='#'>Delete</a></td>
                </tr>
                <tr className='output-ans-stf'>
                  <td>21CS103</td>
                  <td>Ramesh</td>
                  <td><a href='#'>Delete</a></td>
                </tr>
                <tr className='output-ans-stf'>
                  <td>21CS104</td>
                  <td>Vijay</td>
                  <td><a href='#'>Delete</a></td>
                </tr>
                <tr className='output-ans-stf'>
                  <td>21CS105</td>
                  <td>Vinoth</td>
                  <td><a href='#'>Delete</a></td>
                </tr>
              </table>
            </div>
         </div>
      </div>
    </div>
  )
}
export default Staff;