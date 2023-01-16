import React from 'react'
import './takenoteone.css'
import { InputAdornment, TextField } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import { Height } from '@mui/icons-material';

function TakeNoteOne(){
    return(
           <div className='addnote'>
            <div className='text'>
           <TextField
            variant='standard'
             id="search"
             placeholder='Take a note...'
             InputProps={{
              endAdornment: <InputAdornment position="end" sx={{gap:4}}>
             <CheckBoxOutlinedIcon />
             <PhotoOutlinedIcon />
             </InputAdornment>,
             sx:{height:35,width:550},
             disableUnderline:true
            }}
            />
           </div>
           </div>
    )
}

export default TakeNoteOne