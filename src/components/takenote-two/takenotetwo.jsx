import React from 'react'
import './takenotetwo.css'
import { InputAdornment, TextField } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';

function TakeNoteTwo(){
    return(
        <div className='notetwo-main'>
           <div className='titleandpin'>
            <TextField
             variant='standard'
             placeholder='Title'
             InputProps={{
                endAdornment:<InputAdornment position='end'>
                 <PushPinOutlinedIcon/>
                </InputAdornment>,
                disableUnderline:true,
                sx:{height:40,width:550}
             }}
            />
           </div>
           <div className='takenote'>
           <TextField
             variant='standard'
             placeholder='Take a note...'
             InputProps={{
                disableUnderline:true,
                sx:{height:52,width:550}
             }}
            />
           </div>
           <div className='bottom-icons'>
            <AddAlertOutlinedIcon fontSize='inherit'/>
            <PersonAddAltOutlinedIcon fontSize='inherit'/>
            <ColorLensOutlinedIcon fontSize='inherit'/>
            <InsertPhotoOutlinedIcon fontSize='inherit'/>
            <ArchiveOutlinedIcon fontSize='inherit'/>
            <MoreVertOutlinedIcon fontSize='inherit'/>
            <UndoOutlinedIcon fontSize='inherit'/>
            <RedoOutlinedIcon fontSize='inherit'/>
            <span className='close'><a href='#'>Close</a></span>
           </div>
        </div>

    )
}

export default TakeNoteTwo