import React from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';
const AttendanceReports=()=>{
  return(
    <div className='container-ar' style={{backgroundColor:'rgba(0, 0, 0, 0.096)',padding:'2% 2% 4.8% 2%'}}>
        <title>AttendanceReports</title>
        <div className='input-form-ar'>
        <div style={{textAlign:'left',margin:'5px 0px 0px 5px'}}>
          <button className='btn-log'><Link exact to='/staff' className='stf-link'>Back</Link></button>
        </div>
           <h2 style={{marginLeft:'3%'}}>Student List</h2>
              <table className='output-table-ar'>
                <tr className='output-head-ar'style={{backgroundColor:'#7eb4c2'}}>
                  <th>Roll no</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
                <tr className='output-ans-ar'>
                  <td>21CS101</td>
                  <td>Akilan</td>
                  <td className='sts-ar'>Present</td>
                </tr>
                <tr className='output-ans-ar'>
                  <td>21CS102</td>
                  <td>Praveen</td>
                  <td className='sts-ar'>Present</td>
                </tr>
                <tr className='output-ans-ar'>
                  <td>21CS103</td>
                  <td>Ramesh</td>
                  <td className='sts-ar'>Absent</td>
                </tr>
                <tr className='output-ans-ar'>
                  <td>21CS104</td>
                  <td>Vijay</td>
                  <td className='sts-ar'>Present</td>
                </tr>
                <tr className='output-ans-ar'>
                  <td>21CS105</td>
                  <td>Vinoth</td>
                  <td className='sts-ar'>Present</td>
                </tr>
              </table>
           </div>
    </div>
  );
}
export default AttendanceReports;