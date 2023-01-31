import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signupApi } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
  mainSu:{
    display:'flex',
    width: '100vw',
    height: '100vh',
    justifyContent:'center',
    alignItems: 'center'
    
},
mainSuRegister:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '53%',
    height: '80%',
    border: '1px solid lightgray',
    borderRadius: '10px'
},
formSu:{
    display: 'flex',
    height: '98%',
    width: '65%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5%'
},
logoSu:{
    display: 'flex',
    flexDirection: 'row',
    height:'5%',
    width: '85%',
    justifyContent: 'flex-start',
    position: 'relative',
    right: '23px'
},
logoSuText:{
    display: 'flex',
    height: '7%',
    width: '85%',
    fontSize: '24px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
},
fullSuName:{
    display: 'flex',
    flexDirection: 'row',
    height: '11%',
    width: '85%',
    gap: '3%',
    justifyContent:'flex-start'
},
firstNameSu:{
     display: 'flex',
     width: '50%'
},
lastNameSu:{
    display: 'flex',
    width: '50%'
},
usernameSu:{
    display: 'flex',
    flexFlow: 'row wrap',
    height: '12%',
    width: '85%'
},
firstSuLink:{
    display: 'flex',
    height: '9%',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center' 
},
passwordSuInput:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '3%',
    height: '12%',
    width: '85%',
    justifyContent: 'flex-start'
},
passoneSu:{
    display: 'flex',
    width: '48%'
},
passtwoSu:{
    display: 'flex',
    width: '48%'
},
passSuText:{
    height: '25%',
    width: '85%'
},
small:{
    display: 'flex',
    color: '#454545',
    position: 'relative',
    left: '7px'
},
accountSuImg:{
    display: 'flex',
    height: '100%',
    width: '36%',
    flexDirection: 'column',
    justifyContent: 'center'
},
aSuImh:{
    height: '32%',
    width: '95%'
},
textSuImg:{
    height: '10%',
    width: '100%'
},
fourSu:{
    display: 'flex',
    height: '19%',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    right: '2.5%'
},
 button:{
    borderRadius: '5px',
    backgroundColor: '#4c8bf5',
    color: 'white',
    height: '50%',
    width: '18%',
    fontSize: '18px'
},
createInstead:{
    textDecoration: 'none',
    color:'#4c8bf5'
  },
  useMyEmail:{
    textDecoration: 'none',
    color:'#4c8bf5'
  },
'@media only screen and (min-width: 320px) and (max-width: 480px)':{
  mainSuRegister:{
    width: '100%',
    height: '100%',
    border: 'none'
  },
  formSu:{
    height: '90%',
    width: '100%',
    top: '4%'
  },
  logoSu:{
    height: 'auto',
    width: '66%',
    position: 'relative',
    right: '10%'
  },
  logoSuText:{
    flexWrap: 'wrap',
    height: '9%',
    width: '88%',
    fontSize: '1.4rem',
    position: 'relative',
    left: '2%'
  },
  fullSuName:{
    display: 'flex',
    flexDirection: 'column',
    height: '20%',
    gap: '2%'
  },
  firstNameSu:{
    width: '100%'
  },
  lastNameSu:{
    width: '100%'
  },
  passwordSuInput:{
    height: '32%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '2%'
  },
  passoneSu:{
    width: '100%'
  },
  passTwoSu:{
    width: '100%'
  },
  fourSu:{
    width: '87%',
    left: '0.8%',
    bottom: '4%'
  },
  accountSuImg:{
    display: 'none'
  }
},
'@media only screen and (min-width: 481px) and (max-width: 768px)':{
    mainSuRegister:{
      width: '100%',
      height: '100%',
      border: 'none'
    },
    formSu:{
      height: '90%',
      width: '90%',
      border: '1px solid lightgray',
      borderRadius: '10px'
    },
    logoSu:{
      width: '50%',
      height: 'auto',
      position: 'relative',
      right: '17.5%'
    },
    accountSuImg:{
        display: 'none'
      }
},
'@media only screen and (min-width: 769px) and (max-width: 1024px)':{
mainSuRegister:{
    width: '85%',
    height: '85%'
  },
  logoSu:{
    width: '66%',
    height: 'auto',
    position: 'relative',
    right: '10%'
  }
}
})

function SignUp(){
  const classes = useStyles();
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

    const navigate = useNavigate()

    const signAccount = () => {
      navigate('/')
    }
    // const takeConfirm =(e) => {
    //   setSignupObj(prevState =>({...prevState,confirm:e.target.value}))
    // }
    const submit= () => {
       let firstnameTest = firstnameRegex.test(signupObj.firstName)
       let lastnameTest = lastnameRegex.test(signupObj.lastName)
       let usernameTest = emailRegex.test(signupObj.email)
       let passwordTest = passwordRegex.test(signupObj.password)
      //  let confirmTest =  signupObj.confirm
      //  let confirmPass = signupObj.password
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
//  if(confirmTest != confirmPass ){
//   setRegexObj(prevState => ({
//     ...prevState,
//     confirmBorder:true,
//     confirmHelper:'Enter valid confirmation'
//   }))
// }
// else if(confirmTest === confirmPass){
// setRegexObj(prevState => ({
//   ...prevState,
//   confirmBorder:false,
//   confirmHelper:''
// }))
// }
 if(firstnameTest === true && lastnameTest === true && usernameTest === true && passwordTest === true){
        signupApi(signupObj).then((response) =>{
          console.log(response);
          navigate('/')
        }).catch((error) =>{
            console.log(error);
          })
}
  }
    return(

      <div className={classes.mainSu}>
           <div className={classes.mainSuRegister}>
            <div className={classes.formSu}>
            <div className={classes.logoSu}><img src="/assets/google.svg" alt="" height='100%' width='30%'/></div>
            <div className={classes.logoSuText}>Create your Google Acount</div>
            <div className={classes.fullSuName}>
              <div className={classes.firstNameSu}>
                <TextField type="text" onChange={takeFirstname} error={regexObj.firstNameBorder} fullWidth
                helperText={regexObj.firstNameHelper} id="firstname" label='First name' variant='outlined' size='small' />
                </div>
                <div className={classes.lastNameSu}>
                <TextField type="text" onChange={takeLastname} error={regexObj.lastNameBorder} fullWidth
                helperText={regexObj.lastNameHelper} id="lastname" label="Last name" variant="outlined" size='small' />
                </div>
            </div>
            <div className={classes.usernameSu}>
                <TextField type="text" onChange={takeUsername} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Username" id="username" variant="outlined" fullWidth size='small'/>
                <small>You can use letters,numbers & periods</small>
            </div>
            <div className={classes.firstSuLink}><a href="" className={classes.useMyEmail}>Use my current email address instead</a></div>
            <div className={classes.passwordSuInput}>
              <div className={classes.passoneSu}>
               <TextField type="password" onChange={takePassword} error={regexObj.passwordBorder} fullWidth 
               helperText={regexObj.passwordHelper} id="pass" variant="outlined" label="Password" size='small' />
               </div>
               <div className={classes.passtwoSu}>
               <TextField type="password"  error={regexObj.confirmBorder} fullWidth
               helperText={regexObj.confirmHelper} id="confirm" variant="outlined" label="Confirm" size='small' />
               </div>
               <small>Use 8 or more characters with a mix of letters, numbers & symbols</small>
            </div>
            <div className={classes.fourSu}>
              <span  onClick={signAccount}><a href='#' className={classes.createInstead}>Sign  in instead</a></span>
              <Button onClick={submit} variant="contained" sx={{textTransform:'none',fontSize:16}}>Register</Button>
            </div>
            </div>
            <div className={classes.accountSuImg}>
              <div className={classes.aSuImg}><img src="/assets/account.svg"  /></div>
              <span className={classes.textSuImg}>One account. All of google working 
              <br/>for you.</span>
            </div>
           </div>
      </div>

    )
}

export default SignUp