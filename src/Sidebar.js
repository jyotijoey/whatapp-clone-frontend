import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar__header">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGqTlE7QivWZw/profile-displayphoto-shrink_100_100/0/1591169359786?e=1622073600&v=beta&t=w20e98nVDMKzOdDcZzO0eQvA_jQLK14ekcWTSmakeh0" />
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>

                <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Sidebar
