import React from 'react';
import ChatItem from '../../ChatItem/ChatItem';

import EditIcon from '@mui/icons-material/Edit';

import './ChatListPage.css';

const ChatListPage = ({ chatsData, openChat }) => {

  const handleCreateChat = () => {
    alert('Создать новый чат!'); 
  };

  return (
    <>
        <div className="chat-list">
      {chatsData.map((chat) => (
        <ChatItem
          key={chat.id}
          userId={chat.id}
          avatar={chat.avatar}
          name={chat.name}
          message={chat.messages.at(-1)}
          handleClick={() => openChat(chat.id)} 
        />
      ))}
    </div>
        <div
        className="create-chat-button"
        onClick={handleCreateChat}
      >
        <EditIcon  />
      </div>
    </>
  );
};

export default ChatListPage;
