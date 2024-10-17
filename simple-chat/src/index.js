import './index.css';

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


const menu = document.querySelector('.menu');
const dropdownMenu = document.querySelector('#dropdown-menu');


menu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});