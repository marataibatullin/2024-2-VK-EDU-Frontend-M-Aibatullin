export function ChatItem({ userId, avatar, name, message, time, status }) {
    const chatItem = document.createElement('div');
    chatItem.classList.add('chat-item');
    chatItem.setAttribute('data-user-id', userId);

    chatItem.innerHTML = `
        <img src="${avatar}" alt="avatar" class="chat-avatar">
        <div class="chat-info">
            <div class="chat-name">${name}</div>
            <div class="chat-last-message">${message}</div>
        </div>
        <div class="chat-meta">
            <div class="chat-time">${time}</div>
            <div class="chat-status material-symbols-outlined">${status}</div>
        </div>
    `;

    return chatItem;
}