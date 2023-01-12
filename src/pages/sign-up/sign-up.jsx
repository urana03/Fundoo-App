import React from "react";
import './sign-up.css'
import TextField from '@mui/material/TextField';

function SignUp(){
    return(

      <div className='main'>
           <div className='main-register'>
            <div className='form'>
            <div className='logo'><img src="/assets/google.svg" alt="" height='100%' width='30%'/></div>
            <div className='logo-text'>Create your Google Acount</div>
            <div className='full-name'>
                <TextField type="text"  id="firstname" label='First name' variant='outlined'/>
                <TextField type="text" id="lastname" label="Last name" variant="outlined" />
            </div>
            <div className='username'>
                <TextField type="text" label="Username" id="username" variant="outlined" fullWidth/>
                <small>You can use letters,numbers & periods</small>
            </div>
            <div className="first-link"><a href="">Use my current email address instead</a></div>
            <div className="password-input">
               <TextField type="password" id="pass" variant="outlined" label="Password" />
               <TextField type="password" id="confirm" variant="outlined" label="Confirm" />
               <small>Use 8 or more characters with a mix of letters, numbers & symbols</small>
            </div>
            <div className='four'>
              <span id='create-account'><a href='#'>Sign  in instead</a></span>
              <button>Sign Up</button>
            </div>
            </div>
            <div className='account-img'>
              <div className='a-img'><img src="/assets/account.svg"  /></div>
              <span className="text-img">One account. All of google working 
              <br/>for you.</span>
            </div>
           </div>
      </div>

    )
}

export default SignUp