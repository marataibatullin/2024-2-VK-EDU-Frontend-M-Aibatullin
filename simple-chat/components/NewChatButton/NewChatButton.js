export function NewChatButton() {
    const button = document.createElement('div');
    button.classList.add('new-chat-button', 'material-symbols-outlined');
    button.textContent = 'edit';
    
    button.addEventListener('click', () => {
        alert('Создать новый чат!');
    });
    
    return button;
}
