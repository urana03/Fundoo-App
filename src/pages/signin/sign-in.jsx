import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginApi } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
   mainsf:{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      justifyContent:'center',
      alignItems: 'center'
  },
  mainsfLogin:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '35%',
      height: '75%',
      border: '1px solid lightgray',
      borderRadius: 10,
      flexWrap:'wrap'
  },
  logosfIn:{
      display: 'flex',
      height: '5%',
      width: '80%',
      justifyContent: 'center'
  },
  firstsf:{
      display: 'flex',
      height: '7%',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '25px'
  },
  secondsf:{
      display: 'flex',
      height: '8%',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px'
  },
  emailsf:{
      display: 'flex',
      height: '20%',
      width: '80%',
      flexWrap: 'wrap'
  },
  passwordsf:{
      display: 'flex',
      height: '21%',
      width: '80%',
      flexWrap: 'wrap'
  },
  forgetEmail:{
      textDecoration: 'none',
      color:'#4c8bf5'
  },
  forgetPassword:{
    textDecoration: 'none',
    color:'#4c8bf5'
  },
  learnMore:{
    textDecoration: 'none',
    color:'#4c8bf5'
  },
  createAccount:{
    textDecoration: 'none',
    color:'#4c8bf5'
  },
  thirdsf:{
      display: 'flex',
      height:'10%',
      width: '80%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      position: 'relative',
      right: '10px',
  },
  thirdText:{
      display: 'flex',
      height: '50%',
      width: '90%',
      fontSize: '16px',
      color: '#454545',
      marginLeft:10
  },
  thirdLink:{
      display: 'flex',
      width: '50%',
      marginLeft:10
  },
  foursf:{
      display: 'flex',
      height: '15%',
      width: '80%',
      justifyContent: 'space-between',
      alignItems: 'center'
  
  },
  button:{
      borderRadius: '5px',
      backgroundColor:  '#4c8bf5',
      color: 'white',
      height: '60%',
      width: '20%',
      fontSize: '18px'
  },
 '@media only screen and (min-width: 320px) and (max-width:480px)':{
   mainsfLogin:{
       width: '100%',
       height:'100%',
       border:'none'
   },
   thirdText:{
       width: '100%',
       position: 'none',
       flexWrap: 'wrap',
       marginLeft: '10px'
   }
},
'@media only screen and (min-width: 481px) and (max-width:768px)':{
       mainsfLogin:{
           width: '80%',
           height:'85%'
       },
       thirdText:{
           width: '100%',
           position: 'none',
           flexWrap: 'wrap',
           marginLeft: '10px'
       }
},
'@media only screen and (min-width: 769px) and (max-width:1024px)':{
   mainsfLogin:{
       width: '80%',
       height:'85%'
   },
   thirdText:{
       width:'100%',
       position: 'none',
       flexWrap: 'wrap',
       marginLeft: '10px'
   }
}
})
function SignIn(){
   const classes = useStyles();
   const [signinObj,setSigninObj]= useState({email:'',password:''})
   const[regexObj,setRegexObj] = useState({emailBorder:false,emailHelper:'',passwordBorder:false,passwordHelper:''})
   const takeEmail=(e) => {
        setSigninObj(prevState =>({...prevState,email:e.target.value}))
   }
   const takePass=(e) => {
      setSigninObj(prevState =>({...prevState,password:e.target.value}))
 }
 const navigate = useNavigate()

 const createAccount = () => {
      navigate('/signup')
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
         console.log( response);
         navigate('/dashboard')
         localStorage.setItem('token',response.data.id)
      }).catch((error) => {
         console.log(error);
      })
   }
   
 }
    return(
     <div className={classes.mainsf}>
     <div className={classes.mainsfLogin}>
     <div className={classes.logosfIn}><img src="/assets/google.svg" alt="" height='100%' width='30%'/></div>
     <div className={classes.firstsf}>Sign in</div>
     <div className={classes.secondsf}>Use your Google Account</div>
     <div className={classes.emailsf}>
        <TextField onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} 
        label="Email or phone" variant="outlined" type="email" fullWidth/>
        <a href='#' className={classes.forgetEmail}>Forget Email?</a>
     </div>
     <div className={classes.passwordsf}>
        <TextField  onChange={takePass} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} 
        type="password" label='Enter your password' variant='outlined' fullWidth />
        <a href='#' className={classes.forgetPassword}>Forget Password?</a>
     </div>
     <div className={classes.thirdsf}>
      <span className={classes.thirdText}>Not your computer? Use a Private Window to sign in.</span>
     <span className={classes.thirdLink}><a href='#' className={classes.learnMore}>Learn more</a></span>
      </div>
      <div className={classes.foursf}>
         <span onClick={createAccount}><a href='#' id='sign-link' className={classes.createAccount}>Create account</a></span>
        <Button onClick={submit} variant="contained" sx={{textTransform:'none',fontSize:16}} size='small'>Login</Button> 
      </div>
     </div>
     </div>
    )
}

export default SignIn