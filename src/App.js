import './App.css';
import SignIn from './pages/signin/sign-in';
import SignUp from './pages/sign-up/sign-up';
import Header from './components/header-one/header';
import TakeNoteOne from './components/takenote-one/takenoteone';
import TakeNoteTwo from './components/takenote-two/takenotetwo';
import TakeNoteThree from './components/takenote-three/takenotethree';
import Dashboard from './pages/dasboard/dashboard';
import PrimarySearchAppBar from './components/mui-design/header-mui';
import RouterFundoo from './components/router/router';

function App() {
  return (
    <div className="App">
              {/* <SignIn /> */}
              {/* <SignUp />     */}
             {/* <Header />     */}
            {/* <TakeNoteOne/> */}  
             {/* <TakeNoteTwo/>   */}
             {/* <TakeNoteThree/>    */}
                {/* <Dashboard/>     */}
               {/* <PrimarySearchAppBar/> */}
               <RouterFundoo/>
    </div> 
  );
}

export default App;
