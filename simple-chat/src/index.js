import './index.css';

import { Header } from '../components/Header/Header';
import { ChatItem } from '../components/ChatItem/ChatItem';
import { CreateChatButton } from '../components/CreateChatButton/CreateChatButton';
import { Message } from '../components/Message/Message';
import { MessageForm } from '../components/MessageForm/MessageForm';


function initializeData() {
    if (!localStorage.getItem('users')) {
        const initialData = {
            users: {
                user1: {
                    name: 'Дженнифер Элли',
                    avatar: 'avatar.png',
                    lastSeen: 'была 2 часа назад',
                    messages: [
                        { text: 'Привет!', timestamp: '2024-10-17T10:00:00Z', fromUser: false, read: true },
                        { text: 'Как твои дела?', timestamp: '2024-10-17T10:01:00Z', fromUser: false, read: true },
                        { text: 'Давно не общались.', timestamp: '2024-10-17T10:02:00Z', fromUser: false, read: true },
                        { text: 'Ты как там?', timestamp: '2024-10-17T10:03:00Z', fromUser: true, read: true },
                        { text: 'Работаю много...', timestamp: '2024-10-17T10:04:00Z', fromUser: false, read: true },
                        { text: 'Как у тебя с проектом?', timestamp: '2024-10-17T10:05:00Z', fromUser: false, read: true },
                        { text: 'Почти закончил, осталось немного.', timestamp: '2024-10-17T10:06:00Z', fromUser: true, read: true }
                    ]
                },
                user2: {
                    name: 'Антон Иванов',
                    avatar: 'avatar.png',
                    lastSeen: 'был 10 минут назад',
                    messages: [
                        { text: 'Привет!', timestamp: '2024-10-17T10:00:30Z', fromUser: true, read: true },
                        { text: 'Все хорошо, спасибо! А у тебя?', timestamp: '2024-10-17T10:01:30Z', fromUser: true, read: true },
                        { text: 'Да, тоже все в порядке.', timestamp: '2024-10-17T10:02:30Z', fromUser: true, read: true },
                        { text: 'Что нового?', timestamp: '2024-10-17T10:03:30Z', fromUser: false, read: true },
                        { text: 'Работаю над новым проектом.', timestamp: '2024-10-17T10:04:30Z', fromUser: true, read: true },
                        { text: 'Это здорово!', timestamp: '2024-10-17T10:05:30Z', fromUser: false, read: true },
                        { text: 'Если нужна помощь, дай знать!', timestamp: '2024-10-17T10:06:30Z', fromUser: true, read: false }
                    ]
                },
                user3: {
                    name: 'Михаил Петров',
                    avatar: 'avatar.png',
                    lastSeen: 'был 30 минут назад',
                    messages: [
                        { text: 'Привет!', timestamp: '2024-10-17T09:00:00Z', fromUser: false, read: true },
                        { text: 'Как успехи?', timestamp: '2024-10-17T09:01:00Z', fromUser: false, read: true },
                        { text: 'Готовимся к запуску!', timestamp: '2024-10-17T09:02:00Z', fromUser: true, read: false }
                    ]
                },
                user4: {
                    name: 'Александр Кузнецов',
                    avatar: 'avatar.png',
                    lastSeen: 'был 1 час назад',
                    messages: [
                        { text: 'Привет, как продвигается проект?', timestamp: '2024-10-17T11:00:00Z', fromUser: false, read: true },
                        { text: 'Работаю над задачей.', timestamp: '2024-10-17T11:01:00Z', fromUser: true, read: true },
                        { text: 'Если нужно, могу помочь.', timestamp: '2024-10-17T11:02:00Z', fromUser: false, read: false }
                    ]
                }
            },
            chats: [
                {
                    userId: 'user1',
                    lastMessage: { text: 'Почти закончил, осталось немного.', timestamp: '2024-10-17T10:06:00Z', fromUser: true, read: false }
                },
                {
                    userId: 'user2',
                    lastMessage: { text: 'Если нужна помощь, дай знать!', timestamp: '2024-10-17T10:06:30Z', fromUser: true, read: true }
                },
                {
                    userId: 'user3',
                    lastMessage: { text: 'Готовимся к запуску!', timestamp: '2024-10-17T09:02:00Z', fromUser: false, read: true }
                },
                {
                    userId: 'user4',
                    lastMessage: { text: 'Если нужно, могу помочь.', timestamp: '2024-10-17T11:02:00Z', fromUser: false, read: false }
                }
            ]
        };
        localStorage.setItem('users', JSON.stringify(initialData.users));
        localStorage.setItem('chats', JSON.stringify(initialData.chats));
    }
}



function renderChatInterface(userId) {
    const app = document.getElementById('app');
    app.innerHTML = ''; 

    const isChat = userId !== null;

    const header = Header({
        userId: isChat ? userId : '',
        isChat
    });
    
    app.appendChild(header);

    const backArrow = document.querySelector('.back-arrow');

    if (isChat) {
        if (backArrow) {
            const backArrow = document.querySelector('.back-arrow');
            backArrow.addEventListener('click', () => {
                renderChatInterface(null);
                loadChats();
                addChatButton();
            });
        }

        const chatContainer = document.createElement('div');
        chatContainer.className = 'chat';
        loadMessages(chatContainer, userId);

        app.appendChild(chatContainer);

        const messageForm = MessageForm();

        app.appendChild(messageForm);

        const input = document.querySelector('.form-input');
        
        console.log(input)

        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleSubmit(event, userId);
            }
        });

    }
}


function loadMessages(chatContainer, userId) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const user = users[userId];

    if (user && user.messages) {
        user.messages.forEach(message => {
            chatContainer.appendChild(Message(message));
        });
    }
}


function getStatus(message) {
    if (message.fromUser && !message.read) {
        return 'trip_origin';
    } else if (!message.fromUser && !message.read) {
        return 'check';
    } else if (!message.fromUser && message.read) {
        return 'done_all';
    }
    return ''; 
}


function loadChats() {
    const app = document.getElementById('app');
    const chatsContainer = document.createElement('div');
    chatsContainer.classList.add('chats');
    app.appendChild(chatsContainer);

    const chatsData = JSON.parse(localStorage.getItem('chats'));
    const usersData = JSON.parse(localStorage.getItem('users'));

    chatsData.forEach(chat => {
        const user = usersData[chat.userId];
        const lastMessage = chat.lastMessage.text;
        const time = new Date(chat.lastMessage.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        const status = getStatus(chat.lastMessage);

        const chatItem = ChatItem({
            userId: chat.userId,
            avatar: user.avatar,
            name: user.name,
            message: lastMessage,
            time: time,
            status: status
        });

        chatItem.addEventListener('click', () => {
            selectChat(chat.userId);
        });

        chatsContainer.appendChild(chatItem);
    });
}

function selectChat(userId) {
    const usersData = JSON.parse(localStorage.getItem('users'));
    const user = usersData[userId];

    if (user) {
        renderChatInterface(userId);

    }
}

function addChatButton() {
    const createChatButton = CreateChatButton();
    app.appendChild(createChatButton);
}


function handleSubmit(event, userId) {
    event.preventDefault();
    const messageText = input.textContent.trim();

    if (messageText) {
        const messageData = createMessageData(messageText, userId);
        saveMessage(userId, messageData);
        addMessage(messageData);
        input.textContent = '';
    }
}

function createMessageData(text, userId) {
    return {
        text,
        timestamp: new Date().toISOString(),
        fromUser: true,
        read: false 
    };
}

function saveMessage(userId, message) {
    const users = JSON.parse(localStorage.getItem('users'));
    const userMessages = users[userId].messages || [];
    userMessages.push(message);
    users[userId].messages = userMessages;

    localStorage.setItem('users', JSON.stringify(users));
}

function addMessage(message) {
    const chatContainer = document.querySelector('.chat');
    chatContainer.appendChild(Message(message)); 
    chatContainer.scrollTop = chatContainer.scrollHeight;
}



initializeData();
renderChatInterface(null);
loadChats();
addChatButton();