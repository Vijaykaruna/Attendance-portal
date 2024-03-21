import React from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';

const AddAttendance=()=>{
  return(
    <div className='container-aa'>
        <title>Add-Attendance</title>
        <div style={{textAlign:'left',margin:'5px 0px 0px 5px'}}>
          <button className='btn-log'><Link exact to='/staff' className='stf-link'>Back</Link></button>
        </div>
        <div className='form-cont-aa'>
          <div className='class-form-aa' style={{marginLeft:'15%',display:'flex',textDecoration:'underline',fontWeight:'bold'}}>
            <p> Class: XI</p>
            <p style={{marginLeft:'50%'}}>Total: 5</p>
          </div>
          <div className="date-input-aa"style={{textAlign:'right',marginRight:'5%'}}>
            <input style={{padding:'3px'}} id='date-aa' type="date"/>
            <input className='btn-date' id='submit-aa' type="submit"/>
          </div>
          <div className='outputs-aa'>
            <div className='output-head-aa'style={{display:'flex', justifyContent:'center'}}>
              <p style={{border:'1px solid gray',padding:'2% 7% 2% 7%',backgroundColor: 'rgb(69, 115, 155)'}}>Roll no</p>
              <p style={{border:'1px solid gray',padding:'2% 7% 2% 7%',backgroundColor: 'rgb(69, 115, 155)'}}>Name</p>
              <p style={{border:'1px solid gray',padding:'2% 9% 2% 9%',backgroundColor: 'rgb(69, 115, 155)'}}>Status</p>
            </div>
          <div className='outputs-ans-aa'style={{marginTop:'-1.3%'}}>  
            <div className='output-ans-aa'>
              <p className='r-aa'>21CS101</p>
              <p className='n-aa'>Akilan</p>
              <form className='sts-aa'>
                <input type='radio' value='Present' name='status-aa'/>
                <label>Present</label>
                <input type='radio' value='Absent'  name='status-aa'/>
                <label>Absent</label>
              </form>
            </div>
            <div className='output-ans-aa'>
              <p className='r-aa'>21CS102</p>
              <p className='n-aa'>Ramesh</p>
              <form className='sts-aa'>
                <input type='radio' value='Present'name='status-aa'/>
                <label>Present</label>
                <input type='radio' value='Absent'name='status-aa'/>
                <label>Absent</label>
              </form>
            </div>
            <div className='output-ans-aa'>
              <p className='r-aa'>21CS103</p>
              <p className='n-aa'>Praveen</p>
              <form className='sts-aa'>
                <input type='radio' value='Present'name='status-aa'/>
                <label>Present</label>
                <input type='radio' value='Absent'name='status-aa'/>
                <label>Absent</label>
              </form>
            </div>
            <div className='output-ans-aa'>
              <p className='r-aa'>21CS104</p>
              <p className='n-aa'>Vijay</p>
              <form className='sts-aa'>
                <input type='radio' value='Present'name='status-aa'/>
                <label>Present</label>
                <input type='radio' value='Absent' name='status-aa'/>
                <label>Absent</label>
              </form>
            </div>
            <div className='output-ans-aa'>
              <p className='r-aa'>21CS105</p>
              <p className='n-aa'>Vinoth</p>
              <form className='sts-aa'>
                <input type='radio' value='Present' name='status-aa'/>
                <label>Present</label>
                <input type='radio' value='Absent'name='status-aa'/>
                <label>Absent</label>
              </form>
            </div>
          </div>
          <div className='btn-aa'style={{textAlign:'center', marginTop:'5%',paddingBottom:'25px'}}>
                <button className='btn-log'>Submit</button>
              </div>
          </div>
        </div>
    </div>
  );
}
export default AddAttendance;