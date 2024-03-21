import React from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';

const AddStudent=()=>{
  return(
    <div className='container-as'>
        <title>Add Student</title>
        <div style={{textAlign:'left',margin:'5px 0px 0px 5px'}}>
          <button className='btn-log'><Link exact to='/staff' className='stf-link'>Back</Link></button>
        </div>
        <div className='input-form-as'>
           <h2 style={{textDecoration:'underline', fontSize:'xx-large', textAlign:'center'}}> Add Student</h2>
           <div className='details-form-as'>
            <div style={{display:'flex'}}>
              <div className='inputs-as'>
                <p>Roll-No:</p>
                <input type='text'style={{}}/>
              </div>
              <div className='inputs-as'>
                <p>First Name:</p>
                <input type='text'style={{}}/>
              </div>
              <div className='inputs-as'>
                <p>Last Name:</p>
                <input type='text'style={{}}/>
              </div>
          </div>  
          <div style={{display:'flex'}}>
              <div className='inputs-as'>
                <p>Class: </p>
                <input type='text'/>
              </div>
              <div className='inputs-as'>
                <p>Date of Birth:</p>
                <input type='date'/>
              </div>
              <div className='inputs-as'>
                <p>Gender:</p>
                <input type='text'style={{}}/>
              </div>
            </div>  
          <div style={{display:'flex'}}> 
              <div className='inputs-as'>
                <p>Mobile No:</p>
                <input type='text'style={{}}/>
              </div>  
              <div className='inputs-as'>
                <p>Set Username:</p>
                <input type='text'/>
              </div>   
              <div className='inputs-as'>
                <p>Set Password:</p>
                <input type='text'/>
              </div>
            </div> 
              <div className='inputs-as'>
                <p>Address:</p>
                <input type='text' style={{width:'40%',height:'35px'}}/>
              </div>
              <div className='btn-as'style={{textAlign:'center', marginTop:'5%',paddingBottom:'25px'}}>
                <button className='btn-log'>Add</button>
              </div>
           </div>
        </div>
    </div>
  );
}
export default AddStudent;