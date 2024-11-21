import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import './UserInfo.css'

const UserInfo = ({ avatar, name, lastSeen }) => {

    const getLastSeenUser = (lastSeen) => {
        const lastSeenDate = new Date(lastSeen);
        const now = new Date();
        const diffMs = now - lastSeenDate; 
        const diffMinutes = Math.floor(diffMs / 60000); 
        const diffHours = Math.floor(diffMinutes / 60); 
        const diffDays = Math.floor(diffHours / 24);
    
        if (diffMinutes < 1) return 'только что';
        if (diffMinutes < 60) return `${diffMinutes} минут назад`;
        if (diffHours < 24) return `${diffHours} часов назад`;
        return `${diffDays} дней назад`;
      };

    return (
        <div className='user'>
            <div className="user-avatar">
                <img src={avatar} alt={`${name}'s avatar`} className="avatar-image" />
            </div>
            <div className="user-info">
                <div className="user-name">
                    {name}
                </div>
                <div className="user-last-seen">
                    Был(а) в сети: {getLastSeenUser(lastSeen)}
                </div>
            </div>
        </div>
    )
};

export default UserInfo;