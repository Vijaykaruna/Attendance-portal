import React from 'react'
import './Admin.css';
import { Link } from 'react-router-dom';

const Admin=()=>{
    return ( 
        <div className='container-ad' style={{backgroundColor:'rgba(0, 0, 0, 0.096)', height:'90vh'}}>
            <title>Admin Page</title>
            <div className='ad-cont-form'style={{display:'flex'}}>
              <div className='left-cont-ad' style={{border:'1px solid gray',paddingBottom:'9%',paddingLeft:'7%',paddingRight:'7%'}}>
              <h2>Admin page:</h2>
               <div className='btn-form-ad' style={{display:'grid',paddingTop:'150%'}}>
                  <button className='btn-opn'><Link exact to ="/add-staff" className='stf-link'>Add Staff</Link></button>
                  <button className='btn-opn'><Link exact to ="/staff-report" className='stf-link'>Staff Reports</Link></button>
                  <button className='btn-opn'><Link exact to ="/view-complaint" className='stf-link'>View Complaint</Link></button>
                </div>
              </div>
              <div className='right-cont-ad'>
                  <div className='ad-boxes'style={{display:'flex'}}>
                    <div className='ad-box' style={{backgroundColor:'green'}}>
                      <h3>Total Student</h3>
                      <h3 style={{textAlign:'center'}}>25</h3>
                    </div>
                    <div className='ad-box'style={{backgroundColor:'red'}}>
                      <h3>Total Staff</h3>
                      <h3 style={{textAlign:'center'}}>11</h3>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    );
}
export default Admin;