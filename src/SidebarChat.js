import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://i.pinimg.com/originals/f4/a9/1c/f4a91c2267d1657a1d2dc9a5dcc1e464.jpg" />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
