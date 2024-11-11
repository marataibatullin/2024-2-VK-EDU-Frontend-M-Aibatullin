import './index.css';

import { Header } from '../components/Header/Header';
import { ChatItem } from '../components/ChatItem/ChatItem';
import { CreateChatButton } from '../components/CreateChatButton/CreateChatButton';
import { Message } from '../components/Message/Message';
import { MessageForm } from '../components/MessageForm/MessageForm';
import { DropdownMenu } from '../components/DropdownMenu/DropdownMenu';
import { initializeData } from './renderChat'


function renderChatInterface(userId) {
    const app = document.getElementById('app');
    app.innerHTML = ''; 

    const isChat = userId !== null;

    if (isChat) {

        const menu = document.createElement('div');
        menu.className = 'menu material-symbols-outlined';
        menu.textContent = 'more_vert';
    
        const dropdownMenu = DropdownMenu();
    
        const btnDeleteMessages = dropdownMenu.querySelector('#delete-messages');
        btnDeleteMessages.addEventListener('click', () => deleteMessages(userId));

    
        menu.appendChild(dropdownMenu)
    
        menu.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });
    
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
        
        const header = Header({
            userId: isChat ? userId : '',
            menu
        });
        
        app.appendChild(header);

        const backArrow = document.querySelector('.back-arrow');

        if (backArrow) {
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
        
        const imageInput = document.getElementById('imageInput');
        const paperclip = document.querySelector('.paperclip');

        paperclip.addEventListener('click', () => {
            imageInput.click();
        });

        imageInput.addEventListener('change', handleImageSelect);

        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleSubmit(event, userId, input);
            }
        });
    } else {
        const header = Header({
            userId: isChat ? userId : '',
        });
    
        app.appendChild(header);
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

function deleteMessages(userId) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[userId] && confirm("Вы действительно хотите удалить все сообщения?")) {
        users[userId].messages = [];
        localStorage.setItem('users', JSON.stringify(users));
        const chat = document.querySelector('.chat')
        chat.innerHTML = '';
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


function handleSubmit(event, userId, input) { 
    event.preventDefault();
    const messageText = input.textContent.trim();

    if (messageText || attachedImages) {
        const messageData = createMessageData(messageText, attachedImages);
        saveMessage(userId, messageData);
        addMessage(messageData);
        input.textContent = '';
        attachedImages = [];
    }
}

function createMessageData(text, images) {
    return {
        text: text,
        images: images || [],
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

//
// Прикрепление изображения
//

let attachedImages = [];

function handleImageSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            attachedImages.push(e.target.result);
            alert("Изображение прикреплено к сообщению.");
        };
        reader.readAsDataURL(file);
    }
}



initializeData();
renderChatInterface(null);
loadChats();
addChatButton();