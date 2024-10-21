import './index.css';


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


initializeData()


const form = document.querySelector('.message-form');
const input = document.querySelector('.form-input');
const chat = document.querySelector('.chat');

const senderName = "Вы"; 

window.onload = loadMessages;


form.addEventListener('submit', handleSubmit);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSubmit(event);
    }
});

function handleSubmit(event) {
    event.preventDefault();
    const messageText = input.textContent.trim();
    if (messageText) {
        const messageData = createMessageData(messageText);
        saveMessage(messageData);
        addMessage(messageData);
        input.value = ''; 
    }
}

function createMessageData(text) {
    return {
        text: text,
        sender: senderName,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
}

function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}


function addMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = message.sender === 'Дженнифер' ? 'message-received' : 'message-sent';
    messageDiv.innerHTML = `
        <div class="message-text">${message.text}</div>
        <div class="message-info">
            ${message.time} <span class="message-status material-symbols-outlined">done_all</span>
        </div>
    `;

    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(addMessage);
}

function deleteMessages() {
    if (confirm("Вы действительно хотите удалить все сообщения?")) {
        chat.innerHTML = '';
        localStorage.removeItem('messages');
        dropdownMenu.classList.remove('active');
    }
}


const menu = document.querySelector('.menu');
const dropdownMenu = document.querySelector('#dropdown-menu');
const btnDeleteMessages = document.querySelector('#delete-messages');


btnDeleteMessages.addEventListener('click', deleteMessages);

menu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});