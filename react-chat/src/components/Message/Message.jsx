import React from "react";

import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';

import "./Message.css";

const Message = ({ text, images, timestamp, fromUser, isRead }) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={fromUser ? "message-sent" : "message-received"}>
      {images?.map((image, index) => (
        <img
          key={index}
          src={image}
          className={text ? "message-image" : "message-image only-image"}
        />
      ))}

      {text && <div className="message-text">{text}</div>}

      <div className={`message-info ${!text && images ? "overlay" : ""}`}>
        {formattedTime}
       
        {fromUser && isRead ? (
          <span className="message-status">
            <DoneAllIcon />
          </span>
        ) :
        fromUser && !isRead ? (
            <span className="message-status">
              <DoneIcon />
            </span>
        ) : ''}

      </div>
    </div>
  );
};

export default Message;