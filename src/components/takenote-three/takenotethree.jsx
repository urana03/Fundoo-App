import React,{useState} from 'react'
import { InputAdornment, TextField, Paper } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ColorPopper from '../color-popper/colorpopper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import { archiveApi, trashApi, updateNote } from '../../services/dataService';


  const useStyles = makeStyles({
        mainNoteThree:{
            display:'flex',
            flexDirection:'column',
            width:'18vw',
            height:'25vh',
            justifyContent:'center',
            alignItems:'center',
            marginRight:10,
            marginBottom:10
        },
        titleThree:{
         display: 'flex',
         width: '95%',
         height: '35%',
         alignItems:'center',
         marginLeft:'1.5%'
        },
        takeANoteThree: {
         display: 'flex',
         width: '93%',
         height: '40%',
         alignItems: 'center'
        },
        bottomThreeIcons:{
         display: 'flex',
         flexDirection:'row',
         alignItems: 'center',
         width: '93%',
         height: '25%',
         gap:'12%'
      },
      ModalNoteThree:{
         display:'flex',
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center',
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         width:'32vw',
         height: '28vh',
         bgcolor: 'background.paper',
         border: '2px solid #000',
         boxShadow: 24,
         p: 4,
         gap:'5%'
      },
      modalTitle:{
         display:'flex',
         alignItems:'center',
         height:'35%',
         width:'92%',
         marginRight:'2%'
      },
      modalTakeNote:{
         display:'flex',
         alignItems:'center',
         height:'35%',
         width:'92%'
      },
      modalIcons:{
         display:'flex',
         height:'30%',
         width:'92%',
         alignItems:'center',
         gap:'5%'
      },
      '@media only screen and (min-width: 320px) and (max-width: 480px)':{
         mainNoteThree:{
            width:'100%'
         }
      },
      '@media only screen and (min-width: 481px) and (max-width: 768px)':{
         mainNoteThree:{
            width:'48vw'
         }
      },
      '@media only screen and (min-width: 769px) and (max-width: 1024px)':{
         mainNoteThree:{
            width:'33vw'
         }
      }
 
      })

function TakeNoteThree(props){
   const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalText,setModalText] = useState({title:'',description:'',noteId:''})
    
    const handleOpen = (data) =>{
        setOpen(true)
        setModalText({title:data.title,description:data.description,noteId:data.id})
      };
    
      const handleClose = () => {
      setOpen(false);
      updateNote(modalText).then((response) =>{
         console.log(response);
      }).catch((error) => {
         console.log(error)
      })
      props.autoRefresh()
     }
    
    const modalTitleHandler = (e) => {
        setModalText((prevState) =>({
           ...prevState,title:e.target.value
        }))
    }
    const modalTakenoteHandler = (e) => {
       setModalText((prevState) => ({
          ...prevState,description:e.target.value
       }))
    }
    const archiveHandler = () => {
        let inputArchive = {noteIdList:[props.note.id],isArchived:true}
        archiveApi(inputArchive).then((response) => {
              console.log(response)
        }).catch((error) => {
              console.log(error)
        })
    }
    
    const trashHandler= () => {
         let trashObj = {noteIdList:[props.note.id],isDeleted:true}
         trashApi(trashObj).then((response) =>{
            console.log(response)
         }).catch((error) => {
            console.log(error)
         })
    }
    return(
        <Paper 
          elevation={1}
          className={classes.mainNoteThree}
         style={{backgroundColor:props.note.color}}>
           <div className={classes.titleThree} onClick={() => handleOpen(props.note)}>
            <span>{props.note.title}</span>
           </div>
           <div className={classes.takeANoteThree} onClick={() => handleOpen(props.note)}>
            <span>{props.note.description}</span>
           </div>
           <div className={classes.bottomThreeIcons}>
            <AddAlertOutlinedIcon fontSize='inherit'/>
            <PersonAddAltOutlinedIcon fontSize='inherit'/>
            <ColorPopper action='update' id={props.note.id} />
            <DeleteOutlineOutlinedIcon fontSize='inherit' onClick={trashHandler}/>
            <ArchiveOutlinedIcon fontSize='inherit'  onClick={archiveHandler}/>
            <MoreVertOutlinedIcon fontSize='inherit'/>
           </div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.ModalNoteThree}  style={{backgroundColor:props.note.color}}>
              <div className={classes.modalTitle}>
              <TextField
             fullWidth 
             onChange={modalTitleHandler}
             variant='standard'
             defaultValue={modalText.title}
             InputProps={{
                endAdornment:<InputAdornment position='end'>
                 <PushPinOutlinedIcon/>
                </InputAdornment>,
                 disableUnderline:true
             }}
            />
            </div>            
            <div className={classes.modalTakeNote}>
            <TextField
            fullWidth
            onChange={modalTakenoteHandler}
             variant='standard'
             defaultValue={modalText.description}
             InputProps={{
                disableUnderline:true
             }}
            />
            </div>
            <div className={classes.modalIcons} style={{display:'flex',gap:27}}>
            <AddAlertOutlinedIcon fontSize='inherit'/>
            <PersonAddAltOutlinedIcon fontSize='inherit'/>
            <ColorPopper />
            <InsertPhotoOutlinedIcon fontSize='inherit'/>
            <ArchiveOutlinedIcon fontSize='inherit'/> 
            <MoreVertOutlinedIcon fontSize='inherit'/>
            <UndoOutlinedIcon fontSize='inherit'/>
            <RedoOutlinedIcon fontSize='inherit'/>
            <Button  onClick={handleClose} sx={{textTransform:'none',left:'4%',color:'inherit'}}>Close</Button>
              </div>
            </Box>
          </Modal>
        </Paper>
    )
}

export default TakeNoteThree