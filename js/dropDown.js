window.addEventListener('click', e => showMenu(e));
let prevMenu = null;

const showMenu = (e) => {
    if (!e.target.classList.contains('dropbtn')) {
        if (!prevMenu) return;
        prevMenu.classList.remove('show');
    } else {
        const menu = e.target.nextElementSibling;
        if (prevMenu && menu !== prevMenu) {
            prevMenu.classList.remove('show');
            menu.classList.add('show');
        } else if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show'); 
        }
        prevMenu = menu;
    }
}