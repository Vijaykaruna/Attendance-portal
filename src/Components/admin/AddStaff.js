import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

const AddStaff=()=>{
  return(
    <div className='container-astf'>
        <title>Add Staff</title>
        <div style={{textAlign:'left',margin:'5px 0px 0px 5px'}}>
          <button className='btn-log'><Link exact to='/admin' className='stf-link'>Back</Link></button>
        </div>
        <div className='input-form-astf'>
           <h3 style={{textDecoration:'underline', fontSize:'xx-large', textAlign:'center'}}> Add Staff</h3>
           <div className='details-form-astf'>
            <div style={{display:'flex'}}>
              <div className='inputs-astf'>
                <p>First Name</p>
                <input type='text'style={{}}/>
              </div>
              <div className='inputs-astf'>
                <p>Last Name:</p>
                <input type='text'style={{}}/>
              </div>
              <div className='inputs-astf'>
                <p>ID :</p>
                <input type='text'style={{}}/>
              </div>
          </div>  
          <div style={{display:'flex'}}>
              <div className='inputs-astf'>
                <p>Class: </p>
                <input type='text'/>
              </div>
              <div className='inputs-astf'>
                <p>Date of Birth:</p>
                <input type='date'/>
              </div>
              <div className='inputs-astf'>
                <p>Gender:</p>
                <input type='text'style={{}}/>
              </div>
            </div>  
          <div style={{display:'flex'}}> 
              <div className='inputs-astf'>
                <p>Mobile No:</p>
                <input type='text'style={{}}/>
              </div>  
              <div className='inputs-astf'>
                <p>Set Username:</p>
                <input type='text'/>
              </div>   
              <div className='inputs-astf'>
                <p>Set Password:</p>
                <input type='text'/>
              </div>
            </div> 
              <div className='inputs-astf'>
                <p>Address:</p>
                <input type='text' style={{width:'40%',height:'35px'}}/>
              </div>
              <div className='btn-astf'style={{textAlign:'center', marginTop:'5%',paddingBottom:'25px'}}>
                <button className='btn-log'>Add</button>
              </div>
           </div>
        </div>
    </div>
  );
}
export default AddStaff;