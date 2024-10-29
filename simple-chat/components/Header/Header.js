export function Header({ userId }) {
    const header = document.createElement('div');
    header.className = 'header';

    if (userId) {
        const users = JSON.parse(localStorage.getItem('users'));
        const userName = users[userId].name;
        const lastSeen = users[userId].lastSeen;

        header.innerHTML = `
            <div class="back-arrow material-symbols-outlined">arrow_back</div>   
            <div class="user">
                <div class="user-avatar material-symbols-outlined">account_circle</div> 
                <div class="user-info">
                    <div class="user-name" title="${userName}">
                        ${userName}
                    </div>
                    <div class="user-last-seen" title="${userName}">
                        ${lastSeen}
                    </div>
                </div>
            </div>
            <div class="search material-symbols-outlined">search</div>
            <div class="menu material-symbols-outlined">more_vert</div>
        `;
    } else {
        header.innerHTML = `
            <div class="burger material-symbols-outlined">menu</div>
            <div class="title">Messenger</div>
            <div class="search material-symbols-outlined">search</div>
        `;
    }

    return header;
}