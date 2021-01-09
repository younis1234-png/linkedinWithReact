import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './headerOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectUser } from '../../features/userSlice';
import {auth} from "../../firebase"

function Header ()
{
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const logOutOfApp = () =>
    {
        dispatch( logOut() )
        // function that calls signOut
        auth.signOut()
    }

    return (
        <div className="header">
            {/* header left*/ }
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedin" />
                <div className="header__search">
                    {/* searchIcon */ }
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            {/* header right*/ }
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisedUserCircleIcon}title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon}title="Jobs" />
                <HeaderOption Icon={ChatIcon}title="Messaging" />
                <HeaderOption Icon={NotificationsActiveIcon}title="Notifications" />
                <HeaderOption onClick={logOutOfApp} avatar={true}  title="me" />
            </div>
        </div>
    )
}

export default Header
