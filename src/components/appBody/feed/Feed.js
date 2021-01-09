import React, {useState, useEffect} from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './inputOptions/InputOptions';

import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './posts/Posts';
import FlipMove from "react-flip-move"

import db from "../../../firebase"
import firebase from "firebase"
import { useSelector } from 'react-redux';
import {selectUser} from "../../../features/userSlice"


function Feed ()
{
    const user = useSelector(selectUser)
    const [ posts, setPosts ] = useState( [] )
    const [ input, setInput ] = useState( "" )
    


    // create a real time lstener to datatbase
     useEffect( () =>
    {
        // creat a collection of chats
        db.collection( "posts" ).orderBy("timestamp", "desc").onSnapshot( snapshot => (
            setPosts( snapshot.docs.map( doc => ( {
                id: doc.id,
                data: doc.data()
            })))
        ))
    }, [] )
    

    // function to send our post we we click enter
    const sendPost = ( e ) =>
    {
        e.preventDefault()

        db.collection( "posts" ).add( {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        } )
        // console.log(sendPost)
        setInput("")
    }

    return (
        <div className="feed">
            {/* <h1>feed</h1> */ }
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost}  type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/* inputOptions has an icon and text */ }
                    <InputOptions Icon={ImageIcon} title="photo" color="#70b5f9"/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Writ article" color="#7fc15e"/>
                </div>
            </div>
            {/* posts */ }
            <div className="feed_posts">
                <FlipMove> 
                     {/* everytime we have a post we want ot render it on the screen */}
                { posts.map( ( {id, data: {name, description, message, photoUrl}} ) =>
                (
                    
                    <Posts
                        key={ id }
                        name={name}
                        description={ description }
                        message={ message }
                        photoUrl={photoUrl}
                    />

                ))}
                </FlipMove>
               
                
            </div>
        </div>
    )
}

export default Feed
