import React from 'react'
import './Student.css'
import user_icon from '../images/profile.png';

const StudentPage = () => {

  return (
    <div className="container-std">
        <title>Student Page</title>
        <div className="std-cont-form" style={{display:'flex'}}>
            <div className="left-cont-std">
               <h2 style={{textDecoration:'underline', color:'#2b5abe',textShadow:'2px 2px 4px white'}}>MY PROFILE</h2>
                <img src={user_icon} alt="profile" width={100}style={{boxShadow: '7px 10px Lightblue'}} />
                <p>Name : Vijay</p>
                <p>Roll No :21CS104 </p>
                <p>Class: XI</p>
                <p>D.O.B: 18/sep/2003</p>
                <p>Gender: Male</p>
                <p>Mob No : 9876543210</p>
                <p>Email : vijay123@gmail.com</p>
                <p>Address : Thanjavur,Tamil Nadu</p>
            </div>
            <div className="right-cont-std" style={{padding:'5% 5% 3% 5%'}}>
                <p style={{textDecoration:'underline'}}>MY ATTENDANCE</p>
                <div className="date-input-std"style={{textAlign:'right',marginBottom:'3%'}}>
                    <input style={{padding:'3px'}} id='date-std' type="date"/>
                    <input className='btn-date' id='submit-std' type="submit"/>
                </div>
                <div className='outputs-std'>
                <table className='output-table-std'>
                        <tr className='output-head-std' style={{backgroundColor:'#7eb4c2'}}>
                            <th>Working Days</th>
                            <th>Present</th>
                            <th>Absent</th>
                        </tr>
                        <tr className='output-ans-std'>
                            <td>ans</td>
                            <td>ans</td>
                            <td>ans</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentPage;
