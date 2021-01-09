import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import "./HeaderOption.css"
import {selectUser} from "../../../features/userSlice"

function HeaderOption ( { avatar, Icon, title, onClick } )
{
    const user = useSelector(selectUser)
    return (
        <div onClick={ onClick } className="headerOption">
            
            {/* if there is an icon we gonna pass in the icon className, */}
            {Icon && <Icon className="headerOption__icon" /> }
            
            {avatar && ( <Avatar className="headerOption__icon"
            >
                {user?.email[ 0 ] }
            </Avatar> ) }

            <h3 className="headerOption__title">{ title }</h3>
            
        </div>
    )
}

export default HeaderOption
