const initialState = {title:'Keep'}

export const DrawerReducer = (state = initialState,action) => {
    console.log(action);
    switch (action.type) {
       case 'Notes':
        return {...state,title:'Notes'}
        break;
        case 'Reminder':
        return {...state,title:'Reminder'}
        break;
        case 'Edit-labels':
        return {...state,title:'Edit'}
        break;
        case 'Archive':
        return {...state,title:'Archive'}
        break;
        case 'Trash':
        return {...state,title:'Trash'}
        default:
            return initialState
    }
}
