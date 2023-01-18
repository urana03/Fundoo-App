import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Header from '../../components/header-one/header'
import TakeNoteOne from '../../components/takenote-one/takenoteone'
import TakeNoteThree from '../../components/takenote-three/takenotethree'
import TakeNoteTwo from '../../components/takenote-two/takenotetwo'
import { getNoteList } from '../../services/dataService'

function Dashboard(){
    const [toggle,setToggle] = useState(false)
    const [noteList,setNoteList] = useState([])
    const listenToNoteOne = () => {
        setToggle(true) 
    }
    const listenToClose = () => {
        setToggle(false)
    }
    const getNoteMethod = () => {
        getNoteList().then((response)=>{
            console.log(response);
            setNoteList(response.data.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() =>{
     getNoteMethod() 
    },[])
    const autoRefresh = () => {
        getNoteMethod()
    }
    return(
    <div>
    <Header/>
    <div>{
        toggle ? <TakeNoteTwo listenToClose={listenToClose} autoRefresh={autoRefresh}/>:
        <TakeNoteOne listenToNoteOne={listenToNoteOne}/>
        }
        <div className='noteList-Dash'>
            {noteList.map((note) =>(<div><TakeNoteThree note={note}/></div>))}
        </div>
        </div>
    </div>
    )
}

export default Dashboard