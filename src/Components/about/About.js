import React from 'react';
import image3 from '../images/image3.jpg';

function About(){
  return(
         <div style={{fontSize:'larger',display:'flex',marginTop:'3%'}}>
            <title>About-Attendance portal</title>
            <div className='abt-img'>
              <img src={image3} alt="about" width={700} height={450} style={{boxShadow:'10px 10px #2b5abe'}}/>
            </div>
            <div style={{marginTop:'3%'}} >
              <h1 style={{marginLeft:'3%', textDecoration:'underline',color:'#2b5abe'}}>About</h1>
              <p style={{marginTop:'5%',marginLeft:'4%',textShadow:'2px 2px 4px black'}}>An online attendance management system is a software that tracks and manages the attendance records of students. It stores all the individual details of the students digitally on the cloud.Such a system also reduces staff workload and helps to manage attendance by analyzing student absences,  looking for solutions,  eliminating duplicate data entry.
 </p>
            </div>
           
         </div> 
 );
}
 export default About;