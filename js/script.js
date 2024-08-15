document.addEventListener('DOMContentLoaded', function () {
    // Timeout para relentizar la carga
    setTimeout(updateTime, 1000);

    const darkModeBtn = document.getElementById('darkModeBtn');

    // Obtener el estado del modo nocturno del localStorage
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = 'Modo Diurno';
    } else {
        document.body.classList.add('light-mode');
        darkModeBtn.textContent = 'Modo Nocturno';
    }

    // Evento de clic en el botón para cambiar el modo
    darkModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        // Actualizar el texto del botón y guardar el estado en localStorage
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

    document.getElementById('close').addEventListener('click', function() {
        menu.classList.remove('menuGetUp');
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
