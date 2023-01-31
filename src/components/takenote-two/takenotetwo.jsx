import React, { useState } from 'react'
import { InputAdornment, Paper, TextField } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { addNoteApi } from '../../services/dataService';
import Button from '@mui/material/Button';
import ColorPopper from '../color-popper/colorpopper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   mainNoteTwo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40vw',
      height: '33vh',
      marginLeft: '35%'
   },
   titleAndPin: {
      display: 'flex',
      width: '90%',
      height: '35%',
      alignItems: 'center'
   },
   takeNote: {
      display: 'flex',
      width: '90%',
      height: '35%',
      alignItems: 'center'
   },
   bottomIcons: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      height: '30%',
      gap: '6.5%'
   },
   close: {
      display: 'flex',
      height: '50%',
      width: '6%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position:'relative',
      left:'10%'
   },
   '@media only screen and (min-width: 320px) and (max-width: 480px)': {
      mainNoteTwo: {
         display: 'flex',
         width: '78%',
         marginLeft: '20%'
      },
      close: {
         display: 'flex',
         position: 'relative',
         left: '4%'
      },
      bottomIcons: {
         display: 'flex',
         height: '30%',
         display: 'flex',
         flexWrap: 'wrap',
         gap: '3.5%'
      }
   },
   '@media only screen and (min-width: 481px) and (max-width: 768px)': {
      mainNoteTwo: {
         display: 'flex',
         width: '78%',
         marginLeft: '18%'
      },
      close: {
         display: 'flex',
         position: 'relative',
         left: '8%'
      },
      bottomIcons: {
         display: 'flex',
         height: '30%',
         display: 'flex',
         flexWrap: 'wrap',
         gap: '5%'
      }
   },
   '@media only screen and (min-width: 769px) and (max-width: 1024px)': {
      mainNoteTwo: {
         display: 'flex',
         width: '78%',
         marginLeft: '18%'
      },
      close: {
         display: 'flex',
         position: 'relative',
         left:'10%'
      },
      bottomIcons: {
         display: 'flex',
         height: '30%',
         display: 'flex',
         flexWrap: 'wrap'
      }
   }
})

function TakeNoteTwo(props) {

   const [detailsObj, setdetailsObj] = useState({ title: '', description: '', color: '', isArchived: false })

   const titleHandler = (e) => {
      setdetailsObj(prevState => ({ ...prevState, title: e.target.value }))
   }
   const takenoteHandler = (e) => {
      setdetailsObj(prevState => ({ ...prevState, description: e.target.value }))
   }
   const listenToColor = (colour) => {
      setdetailsObj(prevState => ({ ...prevState, color: colour }))
   }
   const makeArchive = () => {
      setdetailsObj(prevState => ({ ...prevState, isArchived: true }))
   }

   const createNote = () => {
      console.log(detailsObj)
      addNoteApi(detailsObj).then((response) => {
         console.log(response)
      }).catch((error) => {
         console.log(error)
      })
      props.autoRefresh()
      props.listenToClose()
   }
   const classes = useStyles();

   return (

      <Paper
         className={classes.mainNoteTwo}
         elevation={2}
         style={{ backgroundColor: detailsObj.color }}>
         <div className={classes.titleAndPin}>
            <TextField
               fullWidth
               className={classes.titleNoteTwo}
               onChange={titleHandler}
               variant='standard'
               placeholder='Title'
               InputProps={{
                  endAdornment: <InputAdornment position='end'>
                     <PushPinOutlinedIcon />
                  </InputAdornment>,
                  disableUnderline: true,
               }}
            />
         </div>
         <div className={classes.takeNote}>
            <TextField
               fullWidth
               className={classes.takeNoteTwo}
               onChange={takenoteHandler}
               variant='standard'
               placeholder='Take a note...'
               InputProps={{
                  disableUnderline: true,
               }}
            />
         </div>
         <div className={classes.bottomIcons} >
            <AddAlertOutlinedIcon fontSize='inherit' />
            <PersonAddAltOutlinedIcon fontSize='inherit' />
            <ColorPopper listenToColor={listenToColor} action='create' />
            <InsertPhotoOutlinedIcon fontSize='inherit' />
            <ArchiveOutlinedIcon fontSize='inherit' onClick={makeArchive} />
            <MoreVertOutlinedIcon fontSize='inherit' />
            <UndoOutlinedIcon fontSize='inherit' />
            <RedoOutlinedIcon fontSize='inherit' />
            <Button className={classes.close} onClick={createNote} sx={{ textTransform: 'none', color: 'inherit' }}>Close</Button>
         </div>
      </Paper>

   )
}

export default TakeNoteTwo