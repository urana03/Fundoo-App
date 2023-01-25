import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from '../../pages/dasboard/dashboard'
import SignUp from '../../pages/sign-up/sign-up'
import SignIn from '../../pages/signin/sign-in'

function RouterFundoo(){
    return(
       <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
       </div>
    )
}

export default RouterFundoo