import { votes, vote } from './votes.js';

document.addEventListener('DOMContentLoaded', () => {
    // Проверка наличия элементов
    const votePhoto1Button = document.getElementById('vote-photo1');
    const votePhoto2Button = document.getElementById('vote-photo2');
    const getLocationButton = document.getElementById('get-location');
    const votesPhoto1Element = document.getElementById('votes-photo1');
    const votesPhoto2Element = document.getElementById('votes-photo2');
    const locationInfoElement = document.getElementById('location-info');

    if (votePhoto1Button) {
        votePhoto1Button.addEventListener('click', () => vote('photo1'));
    }
    if (votePhoto2Button) {
        votePhoto2Button.addEventListener('click', () => vote('photo2'));
    }
    if (votesPhoto1Element) {
        votesPhoto1Element.innerText = `${votes.photo1} votes`;
    }
    if (votesPhoto2Element) {
        votesPhoto2Element.innerText = `${votes.photo2} votes`;
    }
    if (getLocationButton) {
        getLocationButton.addEventListener('click', getLocation);
    }

    // Функция для получения местоположения
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    if (locationInfoElement) {
                        locationInfoElement.innerText = 
                            `Latitude: ${latitude}, Longitude: ${longitude}`;
                    }
                },
                (error) => {
                    if (locationInfoElement) {
                        locationInfoElement.innerText = 
                            `Error: ${error.message}`;
                    }
                }
            );
        } else {
            if (locationInfoElement) {
                locationInfoElement.innerText = 
                    'Geolocation is not supported by this browser.';
            }
        }
    }
});
