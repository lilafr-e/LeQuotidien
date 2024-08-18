document.addEventListener('DOMContentLoaded', function () {
    setTimeout(updateTime, 1000);

    const darkModeBtn = document.getElementById('darkModeBtn');

    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = 'Modo Diurno';
    } else {
        document.body.classList.add('light-mode');
        darkModeBtn.textContent = 'Modo Nocturno';
    }

    darkModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeBtn.textContent = isDarkMode ? 'Modo Diurno' : 'Modo Nocturno';
        localStorage.setItem('darkMode', isDarkMode);
    });

    updateTime();
    setInterval(updateTime, 1000); // Actualiza la hora cada segundo

    const menu = document.getElementById('navMenu');

    document.getElementById('menu').addEventListener('click', function () {
        menu.classList.toggle('menuGetUp');
    });
    
    document.getElementById('close').addEventListener('click', function () {
        menu.classList.remove('menuGetUp');
    });

    document.addEventListener('click', function (event) {
        const menu = document.getElementById('navMenu');
        const menuIsOpen = menu.classList.contains('menuGetUp');

        if (menuIsOpen && !menu.contains(event.target) && !document.getElementById('menu').contains(event.target)) {
            menu.classList.remove('menuGetUp');
        }

        const submenu1 = document.getElementById('submenuExpand1');
        const submenu2 = document.getElementById('submenuExpand2');

        if (submenu1.classList.contains('active') && !submenu1.contains(event.target) && !submenu2.contains(event.target)) {
            submenu1.classList.remove('active');
            submenu1.querySelector('span').classList.remove('spanMenuRotate');
        }

        if (submenu2.classList.contains('active') && !submenu2.contains(event.target) && !submenu1.contains(event.target)) {
            submenu2.classList.remove('active');
            submenu2.querySelector('span').classList.remove('spanMenuRotate');
        }
    });

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    const submenuLink = submenu.querySelector('a');
    const span = submenuLink.querySelector('span');
    
    submenuLink.addEventListener('click', function (event) {
        const parentLi = this.parentNode;

        parentLi.classList.toggle('active');

        if (parentLi.classList.contains('active')) {
            span.classList.add('spanMenuRotate');
        } else {
            span.classList.remove('spanMenuRotate');
        }

        if (this.getAttribute('href') === '#') {
            event.preventDefault();
        }
    });
}

toggleSubmenu('submenuExpand1');
toggleSubmenu('submenuExpand2');

document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('#submenuExpand1.active') || document.querySelector('#submenuExpand2.active');
    
    if (isClickInside) {
        const submenu1 = document.getElementById('submenuExpand1');
        const submenu2 = document.getElementById('submenuExpand2');

        if (!submenu1.contains(event.target) && !submenu2.contains(event.target)) {
            submenu1.classList.remove('active');
            submenu2.classList.remove('active');
            submenu1.querySelector('span').classList.remove('spanMenuRotate');
            submenu2.querySelector('span').classList.remove('spanMenuRotate');
        }
    }
});

});


function updateTime() {
    const hourElement = document.getElementById('hour');
    if (hourElement) { // Verifica si el elemento existe
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        hourElement.textContent = `${hours}:${minutes}:${seconds}`;
    } else {
        console.error('Elemento con id "id-hour" no encontrado.');
    }
}
