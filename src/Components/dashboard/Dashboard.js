import Logo from '../images/Logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard(){
return (
  <div className='container-db'>
    <nav style={{display:'flex', backgroundColor:'#2b5abe'}}>
      <div style={{display:'flex'}}>
        <img src={Logo} alt='logo' width={120} height={85}/>
        <h2 style={{color:'white',whiteSpace:'nowrap',textOverflow:'clip'}}>Student Attendance Management System</h2>
      </div>
        <div className='nav-items'>
          <button className='btn-nav'><NavLink activeClassName="active" exact to ="/helpus" className='nav-link'>Help us</NavLink></button>
          <button className='btn-nav'><NavLink activeClassName="active" exact to ="/about" className='nav-link'>About</NavLink></button>
          <button className='btn-nav'><NavLink activeClassName="active" exact to ="/" className='nav-link'>Log Out</NavLink></button>
        </div>
    </nav>
    
  </div>
);
}
export default Dashboard;