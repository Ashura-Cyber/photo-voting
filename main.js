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
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value || ""}; ${expires}; path=/`;
    console.log(`Cookie set: ${name}=${value}; ${expires}; path=/`);
}

// Функция для получения куки
function getCookie(name) {
    let nameEQ = `${name}=`;
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            console.log(`Cookie retrieved: ${name}=${c.substring(nameEQ.length, c.length)}`);
            return c.substring(nameEQ.length, c.length);
        }
    }
    console.log(`Cookie not found: ${name}`);
    return null;
}

// Функция для получения местоположения и сохранения в куки
function getAndSaveLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                // Сохраняем в куки
                setCookie('latitude', latitude, 1); // Срок действия 1 день
                setCookie('longitude', longitude, 1); // Срок действия 1 день

                console.log(`Location obtained and saved: Latitude=${latitude}, Longitude=${longitude}`);
            },
            (error) => {
                console.error(`Geolocation error: ${error.message}`);
            }
        );
    } else {
        console.warn('Geolocation is not supported by this browser.');
    }
}

// Выполняем получение местоположения и сохранение в куки при загрузке страницы
document.addEventListener('DOMContentLoaded', getAndSaveLocation);
