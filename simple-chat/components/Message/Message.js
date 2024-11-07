export function Message({ text, images, timestamp, fromUser, read }) {
    const messageDiv = document.createElement('div');
    messageDiv.className = fromUser ? 'message-sent' : 'message-received';

    const messageStatusIcon = read ? 'done_all' : 'done';

    let messageContent = '';

    if (text) {
        messageContent += `
            <div class="message-text">${text}</div>
        `;
    }

    if (images && images.length > 0) {
        const flagOnlyImage = (images.length == 1 && !text) ? 'only-image' : '' 
        images.forEach(imageSrc => {
            messageContent += `
                <img src="${imageSrc}" class="message-image ${flagOnlyImage}">
            `;
        });
    }

    messageContent += `
        <div class="message-info ${text ? '' : 'overlay'}">
            ${new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            ${fromUser ? `<span class="message-status material-symbols-outlined">${messageStatusIcon}</span>` : ''}
        </div>
    `;

    messageDiv.innerHTML = messageContent;
    return messageDiv;
}