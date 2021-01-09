import React, {useEffect} from 'react';
// import { Counter } from './features/Counter';
import './App.css';
import Header from "./components/header/Header"
import Sidebar from './components/appBody/sidebar/Sidebar';
import Feed from './components/appBody/feed/Feed';
import Widgets from './components/appBody/widgets/Widgets';
import { login, logOut, selectUser } from "./features/userSlice"
import {useDispatch, useSelector} from "react-redux"
import Login from './components/login/Login';
import { auth } from './firebase';

function App ()
{
  
  // pull the user from our counter
  const user = useSelector( selectUser )
  const dispatch = useDispatch()
  
  // When the app componenet load we fire off a pice of code 
  useEffect(() => {
    
    // onAuthStateChanged ==> listne to any Auth change, when we load the page and if were login it will get the informations
    auth.onAuthStateChanged( userAuth =>
    {
      if ( userAuth )
      {
        // if the userAuth is there the user is loged in, we will render all theses info 
        dispatch( login( {
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))

      } else
      {
        // the user is logout
        dispatch(logOut())

      }
    })
  }, [])
  
  return (
    <div className="app">
      {/* Header */ }
      <Header />

      {/* If there is no user we want to render the login page, otherwise render the rest  */}
      
      {!user ? ( <Login /> ) : (
      <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
      </div>
      ) }

    </div>
  );
}

export default App;



// our useEffect here is how we stay log in when we referesh the page, it goes and fetches for all theses informations 