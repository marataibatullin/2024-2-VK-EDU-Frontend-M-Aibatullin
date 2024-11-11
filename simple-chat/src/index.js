import './index.css';
import { initializeData } from './renderChat'

initializeData()


//
// Работа с чатом
//

const form = document.querySelector('.message-form');
const input = document.querySelector('.form-input');
const chat = document.querySelector('.chat');

const userKey = 'user1'; 

window.onload = loadMessages;


form.addEventListener('submit', handleSubmit);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        handleSubmit(event);
    }
});


function handleSubmit(event) {
    event.preventDefault();
    const messageText = input.innerHTML.replace(/<br\s*\/?>/gi, '\n').trim();
    if (messageText || attachedImages.length > 0) {
        const messageData = createMessageData(messageText, attachedImages);
        saveMessage(messageData);
        addMessage(messageData);
        input.textContent = ''; 
        attachedImages = [];
    }
}


function createMessageData(text, images) {
    return {
        text: text.replace(/\n/g, '<br>'),
        images: images || [],
        timestamp: new Date().toISOString(),
        fromUser: true, 
        read: false
    };
}

function saveMessage(message) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[userKey]) {
        console.warn(`Пользователь ${userKey} не найден`);
        return;
    }
    users[userKey].messages.push(message);
    localStorage.setItem('users', JSON.stringify(users));
}


function addMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = message.fromUser ? 'message-sent' : 'message-received';

    const messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.innerHTML = message.text.replace(/\n/g, '<br>')
    messageDiv.appendChild(messageText);

    message.images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'message-image';
        messageDiv.appendChild(img);
    });

    const messageInfo = document.createElement('div');
    messageInfo.className = 'message-info';
    const messageStatusIcon = message.read ? 'done_all' : 'check';
    messageInfo.innerHTML = `${new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} <span class="message-status material-symbols-outlined">${messageStatusIcon}</span>`;    
    messageDiv.appendChild(messageInfo);

    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}


function loadMessages() {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userMessages = users[userKey]?.messages || [];
    userMessages.forEach(addMessage);
}

function deleteMessages() {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[userKey] && confirm("Вы действительно хотите удалить все сообщения?")) {
        users[userKey].messages = [];
        localStorage.setItem('users', JSON.stringify(users));
        chat.innerHTML = '';
    }
}


//
// dropdownmenu
//

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


//
// Прикрепление изображения
//

const imageInput = document.getElementById('imageInput');
const paperclip = document.querySelector('.paperclip');

let attachedImages = [];

paperclip.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', handleImageSelect);

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

