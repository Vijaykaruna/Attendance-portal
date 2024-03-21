import React from 'react';
import { useState} from 'react';
import './Login.css'
import image5 from '../images/image5.jpg';

function Login() {

    const [usertype, setUserType] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorUser,setErrorUser]=useState("");

    const checkEmail = (event) => {
        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event))) {
          setErrorEmail("! Invalid Email")
        }
        else {
          setErrorEmail("")
        }
      }
     
      const checkPassword = (event) => {
        let hasCaps = /[A-Z]/.test(event);
        let hasNums = /\d/.test(event)
        let hasSmallLetter = /[a-z]/.test(event)
        let hasSpecial = /[@#$%&*]/.test(event)
        let checkFirstAlphabet = event.charAt(0)
        if (!(checkFirstAlphabet >= "A" && checkFirstAlphabet <= "Z" || checkFirstAlphabet >= "a" && checkFirstAlphabet <= "z")) {
          setErrorPassword("! Password must start with alphabet")
        }
        else if (event.trim() && hasCaps && hasNums && hasSmallLetter && hasSpecial) {
          setErrorPassword("")
        }
        else {
          setErrorPassword("! Password not should be format");
        }
      }

      function NextPage(){
        if(usertype==='Admin'){
            window.location=('/admin');
        }
        else if(usertype==='Staff'){
          window.location=('/staff');
        }
        else if(usertype=='Student'){
          window.location=('/student');
        }
        else
        {
          setErrorUser('! Select user type');
        }
      }
  //#2b5abe
  return (
          
        <div className='container-log'>
          <title>Login Page</title>
          <div  className='log-img'>
             <img src={image5} alt='Student' style={{boxShadow:'10px 10px #2b5abe'}}/>
          </div>
        <div className="log-form">
  
          <div className="log-header-text">
            <h2 style={{textDecoration:'underline',color:'#2b5abe'}}>Login Here</h2>
          </div>

          <div className="inputs-log">
            <label className="input-text-log">User Type:</label>
            <div className="input-log">
              <select onChange={(event) => setUserType(event.target.value)} className="user-select" style={{width:'120px', marginLeft:'7%',height:'25px',fontWeight:'bold',borderColor:'#2b5abe'}}>
                <option >Select type</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Student">Student</option>
              </select>
              <p className='error-text-log'>{errorUser}</p>
            </div>
          </div>  

          <div className="inputs-log">
            <label className="input-text-log" style={{marginRight:'18%'}}type="email" >Email:</label>
            <div className="input-log">
              <input onChange={(event) => {
                checkEmail(event.target.value)
              }} type="text" className="form-control" id="log-input-1" placeholder="Enter your email" style={{height:'25px',fontWeight:'bold', borderColor:'#2b5abe'}}/>
              <p className='error-text-log'>{errorEmail}</p>
            </div>
          </div>

          <div className="inputs-log">
            <label className="input-text-log" type="password" >Password:</label>
            <div className="input-log">
              <input onChange={(event) => {
                checkPassword(event.target.value)
              }} type="password" className="form-control" id="log-input-2" placeholder="Enter your password"style={{height:'25px',fontWeight:'bold',borderColor:'#2b5abe'}}/>
              <p className='error-text-log'>{errorPassword}</p>
            </div>
          </div>

          <div className="inputs-log">
            <div className="btn-form-log">
              <button className='btn-log' id='submit-btn-log'type="submit" onClick={() => NextPage()}>Login</button>
            </div>
          </div>

        </div>
       </div>
      
  )
}

export default Login;