import React from 'react'
import { InputAdornment, TextField } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     noteonemain: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'40vw',
        height:'6vh',
        marginLeft:'35%'
     },
     noteonetext:{
        display:'flex',
        height:'100%',
        width:'90%',
        alignItems:'center',
        marginRight:'4%'
     },
     adorn:{
      gap:'20%'
     },
    '@media only screen and (min-width: 320px) and (max-width: 480px)':{
        noteonemain:{
           display:'flex',
           width:'78%',
           marginLeft:'20%'
        }, 
        adorn:{
         gap:'10%'
        } 
     },
     '@media only screen and (min-width: 481px) and (max-width: 768px)':{
      noteonemain:{
         display:'flex',
         width:'78%',
         marginLeft:'18%'
      }, 
      adorn:{
       gap:'10%'
      } 
     },
     '@media only screen and (min-width: 768px) and (max-width: 1024px)':{
      noteonemain:{
         display:'flex',
         width:'78%',
         marginLeft:'18%'
      }, 
      adorn:{
       gap:'10%'
      } 
     }
})

function TakeNoteOne(props){
    const classes = useStyles();
    const openNoteTwo = () => {
        props.listenToNoteOne()
    }
    return(
           <Paper  onClick={openNoteTwo}
           className={classes.noteonemain}
           elevation={2}
           >
            <div className={classes.noteonetext}>  
           <TextField
            fullWidth
            variant='standard'
             id="search"
             placeholder='Take a note...'
             InputProps={{
              endAdornment: <InputAdornment className={classes.adorn} position="end" >
             <CheckBoxOutlinedIcon />
             <BrushOutlinedIcon/>
             <PhotoOutlinedIcon />
             </InputAdornment>,
             disableUnderline:true
            }}
            />
           </div>
           </Paper>
    )
}
export default TakeNoteOne