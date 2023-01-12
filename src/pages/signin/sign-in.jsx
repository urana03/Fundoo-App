import React,{useState} from 'react'
import  './sign-in.css'
import TextField from '@mui/material/TextField';
import { loginApi } from '../../services/userService';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn(){
   const [signinObj,setSigninObj]= useState({email:'',password:''})
   const[regexObj,setRegexObj] = useState({emailBorder:false,emailHelper:'',passwordBorder:false,passwordHelper:''})
   const takeEmail=(e) => {
        setSigninObj(prevState =>({...prevState,email:e.target.value}))
   }
   const takePass=(e) => {
      setSigninObj(prevState =>({...prevState,password:e.target.value}))
 }
 const submit =() => {
   let emailTest = emailRegex.test(signinObj.email)
   let passwordTest = passwordRegex.test(signinObj.password)
   if(emailTest === false){
      setRegexObj(prevState => ({
         ...prevState,
         emailBorder:true,
         emailHelper:'Enter valid email'
      }))
   }
   else if(emailTest === true){
      setRegexObj(prevState => ({
         ...prevState,
         emailBorder:false,
         emailHelper:''
      }))
   }
   if(passwordTest === false){
      setRegexObj(prevState => ({
         ...prevState,
         passwordBorder:true,
         passwordHelper:'Enter valid password'
      }))
   }
   else if(passwordTest === true){
      setRegexObj(prevState => ({
         ...prevState,
         passwordBorder:false,
         passwordHelper:''
      }))
   }
   if(emailTest===true && passwordTest===true){
      loginApi(signinObj).then((response) =>{
         console.log(response);
      }).catch((error) => {
         console.log(error);
      })
   }
   
 }
    return(
     <div className='main'>
     <div className='main-login'>
     <div className='logo-in'><img src="/assets/google.svg" alt="" height='100%' width='30%'/></div>
     <div className='first'>Sign in</div>
     <div className='second'>Use your Google Account</div>
     <div className='email'>
        <TextField onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email or phone" variant="outlined" type="email" fullWidth/>
        <a href='#'>Forget Email?</a>
     </div>
     <div className='password'>
        <TextField  onChange={takePass} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} type="password" label='Enter your password' variant='outlined' fullWidth />
        <a href='#'>Forget Password?</a>
     </div>
     <div className='third'>
      <span id='third-text'>Not your computer? Use a Private Window to sign in.</span>
     <span id='third-link'><a href='#'>Learn more</a></span>
      </div>
      <div className='four'>
         <span id='create-account'><a href='#'>Create account</a></span>
       <button onClick={submit}>Sign in</button>
      </div>
     </div>
     </div>
    )
}

export default SignIn