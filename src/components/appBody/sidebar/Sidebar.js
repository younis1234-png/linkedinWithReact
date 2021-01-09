import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
import { selectUser } from "../../../features/userSlice"
import {useDispatch, useSelector} from "react-redux"

function Sidebar ()
{

    // get the information from our user
    const user = useSelector( selectUser )
    const dispatch = useDispatch()

    // function to render somethings (is not always we gonna need a component)
    const recentItem = ( topic ) =>
    (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            {/* what very the topic is gonna be the p */ }
            <p>{topic}</p>
        </div>
    )

    return (


        <div className="sidebar">
            <div className="sidebar__top">
                {/* backgrond img */}
                <img src="https://images.unsplash.com/photo-1553450078-234c10c53b2f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=401&q=80" alt="" />
                <Avatar src={ user.photoUrl } className="sidebar__avatar" >
                    {/* // use the first caracter in the email */}
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post </p>
                    <p className="sidebar__statNumber">
                        2,600
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
                {recentItem("html")}
                { recentItem( "php" ) }
                
            </div>
        </div>
    )
}

export default Sidebar
