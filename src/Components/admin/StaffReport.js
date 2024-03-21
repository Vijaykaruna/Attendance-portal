import React from "react";
import './Admin.css';
import { Link } from 'react-router-dom';

const StaffReports=()=>{
    return(
        <div className="container-sr" style={{backgroundColor:'rgba(0, 0, 0, 0.096)',padding:'2% 2% 4.8% 2%'}}>
            <title>Staff-Reports</title>
         <div className='input-form-sr'>
         <div style={{textAlign:'left',margin:'0px 0px 0px 5px'}}>
          <button className='btn-log'><Link exact to='/admin' className='stf-link'>Back</Link></button>
        </div>
           <h3 style={{marginLeft:'3%'}}>Staff List</h3>
              <table className='output-table-sr'>
                <tr className='output-head-sr'style={{backgroundColor:'#7eb4c2'}}>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Edit</th>
                </tr>
                <tr className='output-ans-sr'>
                  <td>11BM21</td>
                  <td>XVY</td>
                  <td>XII-Bio-Maths</td>
                  <td><a href="#">Delete</a></td>
                </tr>
                <tr className='output-ans-sr'>
                  <td>11BM22</td>
                  <td>YYY</td>
                  <td>XI-Bio-Maths</td>
                  <td><a href="#">Delete</a></td>
                </tr>
                <tr className='output-ans-sr'>
                  <td>11CS21</td>
                  <td>XXX</td>
                  <td>XII-Computer-Maths</td>
                  <td><a href="#">Delete</a></td>
                </tr>
                <tr className='output-ans-sr'>
                  <td>11CS22</td>
                  <td>ZZZ</td>
                  <td>XI-Computer-Maths</td>
                  <td><a href="#">Delete</a></td>
                </tr>
                <tr className='output-ans-sr'>
                  <td>11BS21</td>
                  <td>ZYX</td>
                  <td>XII-Bio-Science</td>
                  <td><a href="#">Delete</a></td>
                </tr>
                <tr className='output-ans-sr'>
                  <td>11BS22</td>
                  <td>YZX</td>
                  <td>XI-Bio-Science</td>
                  <td><a href="#">Delete</a></td>
                </tr>
              </table>
           </div>
        </div>
    );
}
export default StaffReports;