import { votes, vote} from './votes.js';

// Пример использования функции vote
document.getElementById('vote-photo1').addEventListener('click', () => vote('photo1'));
document.getElementById('vote-photo2').addEventListener('click', () => vote('photo2'));

// Для отображения начальных значений
document.getElementById('votes-photo1').innerText = `${votes.photo1} votes`;
document.getElementById('votes-photo2').innerText = `${votes.photo2} votes`;

// Функция для получения местоположения
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('location-info').innerText = 
                    `Latitude: ${latitude}, Longitude: ${longitude}`;
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
