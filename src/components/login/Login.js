import React,{useState} from 'react'
import { login } from '../../features/userSlice'
import { auth } from '../../firebase'
import {useDispatch} from "react-redux"

import "./Login.css"

function Login ()
{

   // Track name, email, password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [ profilePic, setProfilePic ] = useState( "" )
    const dispatch = useDispatch()

    // Registering when your not a membre 
    const register = () =>
    {
        // if there is no name return an alert
        if ( !name )
        {
         return alert("Please enter a full name!")
        }
        
        // create a user with a email and password
        auth.createUserWithEmailAndPassword( email, password )
            .then( ( userAuth ) =>
            {
                // then we want to update the user name and pic
                userAuth.user.updateProfile( {
                    displayName: name,
                    photoURL: profilePic,
                } )
                    // after that done we gonna do the follwing( push the user into th login using dispatch)
                    .then( () =>
                    {
                        dispatch( login( {
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        } ) )
                    } )
            } ).catch( error => alert( error ) )
    }

    // for login
    const loginToApp = ( e ) =>
    {
        e.preventDefault()

        auth.signInWithEmailAndPassword( email, password )
            .then( (userAuth) =>
            {
                dispatch( login( {
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        }).catch( error => alert( error ) );

    }

    return (
        <div className="login">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" alt="" />
            
            <form >
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />

                <button type="submit" onClick={loginToApp}>
                    Sign In
                </button>
            </form>

            <p>Not a member? 
                <span onClick={register}
                    className="login__register">Register Now</span>
            </p>

        </div>
    )
}

export default Login
