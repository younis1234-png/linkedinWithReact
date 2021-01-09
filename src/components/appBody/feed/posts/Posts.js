import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import InputOptions from '../inputOptions/InputOptions'
import "./Posts.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Posts = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="posts">
            <div className="post__header">
                <Avatar src={ photoUrl } > {name[0]}</Avatar>
                <div className="post__info">
                    <h2>{ name}</h2>
                    <p> {description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpIcon} title="Like" color="gray" />
                <InputOptions Icon={ChatIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareIcon} title="Share" color="gray" />
                <InputOptions Icon={SendIcon} title="Send" color="gray" />
            </div>
       
        </div>
    )
})

export default Posts
