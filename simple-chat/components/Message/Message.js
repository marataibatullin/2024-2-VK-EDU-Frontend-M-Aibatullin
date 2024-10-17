export function Message({ text, timestamp, fromUser, read }) {
    const messageDiv = document.createElement('div');
    messageDiv.className = fromUser ? 'message-received' : 'message-sent';
    
    const messageStatusIcon = read ? 'done_all' : 'done';

    messageDiv.innerHTML = `
        <div class="message-text">${text}</div>
        <div class="message-info">
            ${new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            <span class="message-status material-symbols-outlined">${messageStatusIcon}</span>
        </div>
    `;
    
    return messageDiv;
}