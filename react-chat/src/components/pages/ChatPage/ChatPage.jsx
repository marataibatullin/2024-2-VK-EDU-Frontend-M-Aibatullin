import React, { useState } from 'react';

import Message from "../../Message/Message";
import MessageForm from "../../MessageForm/MessageForm";

import './ChatPage.css';

const ChatPage = ({ chat }) => {
  const [messages, setMessages] = useState(chat.messages);

  const addMessage = (text) => {
    const newMessage = {
      text,
      timestamp: new Date().toISOString(),
      fromUser: true,
      isRead: false,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    // Обновление localStorage
    const chatData = JSON.parse(localStorage.getItem('chatsData')) || [];
    const updatedChat = {
      ...chat,
      messages: updatedMessages,
    };
    const updatedChatData = chatData.map((c) =>
      c.id === chat.id ? updatedChat : c
    );

    localStorage.setItem('chatsData', JSON.stringify(updatedChatData));
  };

  return (
    <div className="chat-page">
      <div className="chat">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            images={message.images}
            timestamp={message.timestamp}
            fromUser={message.fromUser}
            isRead={message.isRead}
          />
        ))}
      </div>
      <MessageForm onSendMessage={addMessage} />
    </div>
  );
};

export default ChatPage;
