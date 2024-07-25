import { votes, vote } from './votes.js';

// Пример использования функции vote
document.getElementById('vote-photo1').addEventListener('click', () => vote('photo1'));
document.getElementById('vote-photo2').addEventListener('click', () => vote('photo2'));

// Для отображения начальных значений
document.getElementById('votes-photo1').innerText = `${votes.photo1} votes`;
document.getElementById('votes-photo2').innerText = `${votes.photo2} votes`;

// Функция для установки куки
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
}

// Функция для получения куки
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Функция для получения местоположения и сохранения в куки
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('location-info').innerText = 
                    `Latitude: ${latitude}, Longitude: ${longitude}`;

                // Сохраняем в куки
                setCookie('latitude', latitude, 1); // Срок действия 1 день
                setCookie('longitude', longitude, 1); // Срок действия 1 день
            },
            (error) => {
                document.getElementById('location-info').innerText = 
                    `Error: ${error.message}`;
            }
        );
    } else {
        document.getElementById('location-info').innerText = 
            'Geolocation is not supported by this browser.';
    }
}

// Добавляем обработчик события на кнопку для получения местоположения
document.getElementById('get-location').addEventListener('click', getLocation);

// Для отображения сохраненных значений куки (опционально)
document.addEventListener('DOMContentLoaded', () => {
    const latitude = getCookie('latitude');
    const longitude = getCookie('longitude');
    if (latitude && longitude) {
        document.getElementById('saved-location-info').innerText = 
            `Saved Latitude: ${latitude}, Saved Longitude: ${longitude}`;
    }
});
