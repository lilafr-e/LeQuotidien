// captura la latitud y longitud actual del usuario si es posible
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        fetch(weatherUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => { 
                console.log('Datos del clima:', data);
                const temperature = data.current_weather.temperature;
                const description = data.current_weather.weathercode;  // El código de clima puede necesitar interpretación
                // Muestra la información en el div con id 'climate'
                document.getElementById('climate').innerHTML = `
                    <p>${temperature}°C</p>
                `;
            })
            .catch(error => {
                console.error('Error al obtener el clima:', error); 
                document.getElementById('climate').innerText = 'No se pudo obtener la información del clima.';
            });
    });
}
