// import React, {useEffect} from 'react';

// import Header from "./components/Header/Header";
// import ChatPage from "./components/pages/ChatPage/ChatPage";

// import mockData from './mockData';
// import './App.css';

// function App() {

//   useEffect(() => {
//     const localData = localStorage.getItem('chatData');

//     if (!localData) {
//       localStorage.setItem('chatData', JSON.stringify(mockData));
//       console.log('Данные из mockData.json сохранены в localStorage');
//     } else {
//       console.log('Данные уже существуют в localStorage');
//     }
//   }, []);

//   const selectedChat = mockData[0];

//   return (
//     <>
//       <Header user={selectedChat}/>
//       <ChatPage chat={selectedChat}/>
//     </>
//   )
// }

// export default App;



import React, { useEffect, useState } from 'react';

import Header from "./components/Header/Header";
import ChatPage from "./components/pages/ChatPage/ChatPage";
import ChatListPage from './components/pages/ChatsListPage/ChatListPage';

import mockData from './mockData';
import './App.css';

function App() {
  const [chatsData, setChatsData] = useState(mockData);
  const [currentChatId, setCurrentChatId] = useState(null); 
  // const [activePage, setActivePage] = useState('ChatListPage');
  const [activeUserId, setUserId] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem('chatsData');

    setChatsData(mockData)

    if (!localData) {
      localStorage.setItem('chatsData', JSON.stringify(mockData));
      console.log('Данные из mockData.json сохранены в localStorage')
    } else {
      console.log('Данные уже существуют в localStorage')
    }
  }, []);

  const openChat = ( userId ) => {
    setUserId(userId)
    setCurrentChatId(userId);
  }

  const goBack = () => {
    setCurrentChatId(null);
  };

  const currentChat = currentChatId
  ? chatsData.find(chat => chat.id === currentChatId)
  : null;

  
  return (
    <>
      <Header 
        avatar={currentChat?.avatar}
        name={currentChat?.name}
        lastSeen={currentChat?.lastSeen}
        goBack={currentChatId ? goBack : null}
        isChatPage={!!currentChatId}
      />
      {currentChatId === null ? (
        <ChatListPage chatsData={chatsData} openChat={openChat} />
      ) : (
        <ChatPage chat={currentChat} />
      )}
    </>
  );
}

export default App;
