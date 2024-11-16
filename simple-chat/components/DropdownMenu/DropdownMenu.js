export function DropdownMenu() {
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.id = 'dropdown-menu';

    dropdownMenu.innerHTML = `
        <div class="dropdown-item" id="info">Информация</div>
        <div class="dropdown-item" id="mute">Без звука</div>
        <div class="dropdown-item" id="delete-messages">Удалить все сообщения</div>
    `;

    // const menu = document.createElement('div');
    // menu.className = 'menu';
    // menu.textContent = 'Menu';
    return dropdownMenu;
}

