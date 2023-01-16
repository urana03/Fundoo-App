import React, { useState } from "react";
import './sign-up.css'
import TextField from '@mui/material/TextField';
import { signupApi } from "../../services/userService";
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp(){
  const [signupObj,setSignupObj] = useState({firstName:'',lastName:'',email:'',password:'',service:'advance'})
  const [regexObj,setRegexObj] =useState({firstNameBorder:false,firstNameHelper:'',lastNameBorder:false,lastNameHelper:'',
                                            emailBorder:false,emailHelper:'',passwordBorder:false,passwordHelper:'',confirmBorder:false,confirmHelper:''})
    const takeFirstname = (e) => {
           setSignupObj(prevState =>({...prevState,firstName:e.target.value}))
    }
    const takeLastname = (e) => {
      setSignupObj(prevState =>({...prevState,lastName:e.target.value}))
    }
    const takeUsername = (e) => {
      setSignupObj(prevState =>({...prevState,email:e.target.value}))
    }
    const takePassword = (e) => {
      setSignupObj(prevState => ({...prevState,password:e.target.value}))
    }
    const takeConfirm =(e) => {
      setSignupObj(prevState =>({...prevState,confirm:e.target.value}))
    }
    const submit= () => {
       let firstnameTest = firstnameRegex.test(signupObj.firstName)
       let lastnameTest = lastnameRegex.test(signupObj.lastName)
       let usernameTest = emailRegex.test(signupObj.email)
       let passwordTest = passwordRegex.test(signupObj.password)
       let confirmTest =  signupObj.confirm
       let confirmPass = signupObj.password
       if(firstnameTest === false){
          setRegexObj(prevState => ({
            ...prevState,
            firstNameBorder:true,
            firstNameHelper:'Enter valid first name'
          }))
       }
       else if(firstnameTest === true){
        setRegexObj(prevState => ({
          ...prevState,
          firstNameBorder:false,
          firstNameHelper:''
        }))
       }
       if(lastnameTest === false){
        setRegexObj(prevState => ({
          ...prevState,
          lastNameBorder:true,
          lastNameHelper:'Enter valid last name'
        }))
     }
     else if(lastnameTest === true){
      setRegexObj(prevState => ({
        ...prevState,
        lastNameBorder:false,
        lastNameHelper:''
      }))
     }
     if(usernameTest === false){
      setRegexObj(prevState => ({
        ...prevState,
        emailBorder:true,
        emailHelper:'Enter valid username'
      }))
   }
   else if(usernameTest === true){
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
 if(confirmTest != confirmPass ){
  setRegexObj(prevState => ({
    ...prevState,
    confirmBorder:true,
    confirmHelper:'Enter valid confirmation'
  }))
}
else if(confirmTest === confirmPass){
setRegexObj(prevState => ({
  ...prevState,
  confirmBorder:false,
  confirmHelper:''
}))
}
if(firstnameTest === true && lastnameTest === true && usernameTest === true && passwordTest === true && confirmTest === confirmPass ){
        signupApi(signupObj).then((response) =>{
          console.log(response);
        }).catch((error) =>{
            console.log(error);
          })
}
  }
    return(

      <div className='main'>
           <div className='main-register'>
            <div className='form'>
            <div className='logo'><img src="/assets/google.svg" alt="" height='100%' width='30%'/></div>
            <div className='logo-text'>Create your Google Acount</div>
            <div className='full-name'>
                <TextField type="text" onChange={takeFirstname} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} id="firstname" label='First name' variant='outlined' />
                <TextField type="text" onChange={takeLastname} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} id="lastname" label="Last name" variant="outlined" />
            </div>
            <div className='username'>
                <TextField type="text" onChange={takeUsername} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Username" id="username" variant="outlined" fullWidth/>
                <small>You can use letters,numbers & periods</small>
            </div>
            <div className="first-link"><a href="">Use my current email address instead</a></div>
            <div className="password-input">
               <TextField type="password" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} id="pass" variant="outlined" label="Password" />
               <TextField type="password" onChange={takeConfirm} error={regexObj.confirmBorder} helperText={regexObj.confirmHelper} id="confirm" variant="outlined" label="Confirm" />
               <small>Use 8 or more characters with a mix of letters, numbers & symbols</small>
            </div>
            <div className='four'>
              <span id='create-account'><a href='#'>Sign  in instead</a></span>
              <button onClick={submit}>Sign Up</button>
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