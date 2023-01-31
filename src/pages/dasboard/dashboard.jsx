import React, { useEffect, useState } from 'react'
// import './dashboard.css'
import TakeNoteOne from '../../components/takenote-one/takenoteone'
import TakeNoteThree from '../../components/takenote-three/takenotethree'
import TakeNoteTwo from '../../components/takenote-two/takenotetwo'
import { getNoteList } from '../../services/dataService'
import MiniDrawer from '../../components/drawer/drawer'
import PrimarySearchAppBar from '../../components/mui-design/header-mui'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    noteListDash:{
        display:'flex',
        width: '80vw',
        height: 'auto',
        position: 'relative',
        top: '60px',
        left: '16%',
        flexWrap: 'wrap',
        marginLeft: '20px' 
    },
    '@media only screen and (min-width: 320px) and (max-width: 480px)':{
        noteListDash:{
             display: 'flex',
             flexDirection: 'column',
             width: '75%'
        }
    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)':{
        noteListDash:{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width:'80%'
           }
    },
    '@media only screen and (min-width: 769px) and (max-width: 1024px)':{
        noteListDash:{
            display:'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width:'80%'
        }
    }
    
})

function Dashboard(){
    const classes = useStyles();
    const [toggle,setToggle] = useState(false)
    const [noteList,setNoteList] = useState([])
    const[drawerToggle,setDrawerToggle] = useState(false)
    const[drawerPredefined,setDrawerPredefined] =useState('Notes')
    const listenToNoteOne = () => {
        setToggle(true) 
    }
    const listenToClose = () => {
        setToggle(false)
    }
    const getNoteMethod = () => {
        getNoteList().then((response)=>{
            let filterNotes = []
            if(drawerPredefined === 'Notes'){
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === false){
                        return notes
                    }
                })
            }
            else if(drawerPredefined === 'Archive'){
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === true && notes.isDeleted === false){
                        return notes
                    }
                })
            }
           else if(drawerPredefined === 'Trash'){
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === true){
                        return notes
                    }
                })
            }
            console.log(response);
            setNoteList(filterNotes)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() =>{
     getNoteMethod() 
    },[drawerPredefined])
    const autoRefresh = () => {
        getNoteMethod()
    }
    const listenToHeader = () => {
      setDrawerToggle(!drawerToggle)
    }
    const listenToDrawer = (option) => {
         setDrawerPredefined(option)
    }
    return(
    <div>
    <PrimarySearchAppBar listenToHeader={listenToHeader}/>
    <MiniDrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer}/>
    <div>{
        toggle ? <TakeNoteTwo listenToClose={listenToClose} autoRefresh={autoRefresh} />:
        <TakeNoteOne listenToNoteOne={listenToNoteOne} />
        }
        <div className={classes.noteListDash}>
            {noteList.map((note) =>(<div><TakeNoteThree note={note} autoRefresh={autoRefresh}/></div>))}
        </div>
        </div>
    </div>
    )
}

export default Dashboard