export function MessageForm() {
    const form = document.createElement('form');
    form.className = 'message-form';

    form.innerHTML = `
        <div class="form-input" name="message-text" data-placeholder="Cообщение" contenteditable="true"></div>
        <div class="material-symbols-outlined paperclip">attach_file</div>
    `;

    return form;
}