export function Message({ text, images, timestamp, fromUser, read }) {
    const messageDiv = document.createElement('div');
    
    messageDiv.className = fromUser ? 'message-sent' : 'message-received';
    
    const messageStatusIcon = read ? 'done_all' : 'done';

    let messageContent = `
        <div class="message-text">${text.replace(/\n/g, '<br>')}</div>
    `;

    if (images && images.length > 0) {
        images.forEach(imageSrc => {
            messageContent += `
                <img src="${imageSrc}" class="message-image">
            `;
        });
    }

    messageContent += `
        <div class="message-info">
            ${new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            <span class="message-status material-symbols-outlined">${messageStatusIcon}</span>
        </div>
    `;

    messageDiv.innerHTML = messageContent;
    
    return messageDiv;
}