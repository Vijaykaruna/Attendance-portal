import React from 'react';
import image4 from '../images/image4.jpg';


function Feedback(){

  return (
    <body>
      <div className='container-hu' style={{display:'flex',marginTop:'3%', fontSize:'larger'}} >
        <title>Help-Us Page</title>
        <div className='hu-img'>
           <img src={image4} alt='feedback'width={700} height={450} style={{boxShadow:'10px 10px #2b5abe', width:'100%'}}/>
        </div>
        <div className='hu-form' style={{textAlign:'center',marginLeft:'5%',marginTop:'3%',padding:'auto'}}>
          <h2 style={{textDecoration:'underline',color:'#2b5abe'}}>Help us</h2>
          <p style={{fontWeight:'bold'}}>Describe the problem you're having</p>
          <textarea placeholder='write...' style={{width:'150%', height:'13%',marginBottom:'5%', borderRadius:'10px',borderColor:'#2b5abe',fontSize:'large'}}/>
          <button className='btn-log' type='submit'onClick={()=>alert('Thank You...!')}>Submit</button>
        </div>
      </div>
    </body>
  );
}
export default Feedback;