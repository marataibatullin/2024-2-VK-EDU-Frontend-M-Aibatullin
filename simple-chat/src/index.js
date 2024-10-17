import './index.css';

import { Header } from '../components/Header/Header';

function initializeData() {
    if (!localStorage.getItem('users')) {
        const initialData = {
            users: {
                user1: {
                    name: 'Дженнифер Элли',
                    lastSeen: '2 часа назад',
                    messages: [
                        { text: 'Привет, Антон!', timestamp: '2024-10-17T10:00:00Z', fromUser: false, read: true },
                        { text: 'Как твои дела?', timestamp: '2024-10-17T10:01:00Z', fromUser: false, read: true },
                        { text: 'Давно не общались.', timestamp: '2024-10-17T10:02:00Z', fromUser: false, read: true },
                        { text: 'Ты как там?', timestamp: '2024-10-17T10:03:00Z', fromUser: true, read: false },
                        { text: 'Работаю много...', timestamp: '2024-10-17T10:04:00Z', fromUser: false, read: false },
                        { text: 'Как у тебя с проектом?', timestamp: '2024-10-17T10:05:00Z', fromUser: true, read: false },
                        { text: 'Почти закончил, осталось немного.', timestamp: '2024-10-17T10:06:00Z', fromUser: false, read: false }
                    ]
                },
                user2: {
                    name: 'Антон Иванов',
                    lastSeen: '10 минут назад',
                    messages: [
                        { text: 'Привет, Дженнифер!', timestamp: '2024-10-17T10:00:30Z', fromUser: true, read: true },
                        { text: 'Все хорошо, спасибо! А у тебя?', timestamp: '2024-10-17T10:01:30Z', fromUser: true, read: true },
                        { text: 'Да, тоже все в порядке.', timestamp: '2024-10-17T10:02:30Z', fromUser: true, read: true },
                        { text: 'Что нового?', timestamp: '2024-10-17T10:03:30Z', fromUser: false, read: false },
                        { text: 'Работаю над новым проектом.', timestamp: '2024-10-17T10:04:30Z', fromUser: true, read: false },
                        { text: 'Это здорово!', timestamp: '2024-10-17T10:05:30Z', fromUser: false, read: false },
                        { text: 'Если нужна помощь, дай знать!', timestamp: '2024-10-17T10:06:30Z', fromUser: true, read: false }
                    ]
                }
            },
            chats: [
                {
                    userId: 'user1',
                    lastMessage: { text: 'Почти закончил, осталось немного.', timestamp: '2024-10-17T10:06:00Z', read: false }
                },
                {
                    userId: 'user2',
                    lastMessage: { text: 'Если нужна помощь, дай знать!', timestamp: '2024-10-17T10:06:30Z', read: false }
                }
            ]
        };
        localStorage.setItem('users', JSON.stringify(initialData.users));
        localStorage.setItem('chats', JSON.stringify(initialData.chats));
    }
}


initializeData();

let currentChat = null;

function renderChatInterface(userId) {
    const app = document.getElementById('app');
    app.innerHTML = ''; 

    const isChat = userId !== null;

    const header = Header({
        userId: isChat ? userId : '',
        isChat
    });

    app.appendChild(header);
}

function selectChat(userId) {
    currentChat = userId;
    renderChatInterface(currentChat);
}


renderChatInterface(null);