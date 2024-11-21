import React from 'react';

import { TripOrigin, Check, DoneAll} from '@mui/icons-material';

import './ChatItem.css';

const ChatItem = ({ userId, avatar, name, message, handleClick }) => {

    return (
        <div className="chat-item" onClick={() => handleClick(userId)}>
        <img src={avatar} alt="avatar" className="chat-avatar" />
        <div className="chat-info">
            <div className="chat-name">{name}</div>
            <div className="chat-last-message">{message.text}</div>
        </div>
        <div className="chat-meta">
            <div className="chat-time">{message.time}</div>
            <div className="chat-status">
                {message.fromUser && !message.isRead ? (
                    <TripOrigin />
                ) : !message.fromUser && !message.isRead ? (
                    <Check />
                ) : !message.fromUser && message.isRead ? (
                    <DoneAll />
                ) : null}
            </div>
        </div>
        </div>
    );
};

export default ChatItem;
