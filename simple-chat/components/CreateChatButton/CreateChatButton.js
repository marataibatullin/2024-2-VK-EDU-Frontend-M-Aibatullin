export function CreateChatButton() {
    const button = document.createElement('div');
    button.classList.add('create-chat-button', 'material-symbols-outlined');
    button.textContent = 'edit';
    
    button.addEventListener('click', () => {
        alert('Создать новый чат!');
    });
    
    return button;
}
