import axios from 'axios'
const headerConfig = {
    headers:{
        authorization:localStorage.getItem('token')
    }
}
export const addNoteApi = (noteObj) =>{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',noteObj,headerConfig)
    return response
}

export const getNoteList = () =>{
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
    return response
}

export const updateNoteList = (updateObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',updateObj,headerConfig)
    return response
}

export const updateNote = (updateNoteObj) => {
      let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',updateNoteObj,headerConfig)
      return response
}

export const archiveApi = (archiveObj) => {
     let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',archiveObj,headerConfig)
     return response
}

export const trashApi = (trashObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',trashObj,headerConfig)
    return response
}