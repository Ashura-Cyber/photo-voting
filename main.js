import { votes, vote } from './votes.js';

document.addEventListener('DOMContentLoaded', () => {
    const votePhoto1Button = document.getElementById('vote-photo1');
    const votePhoto2Button = document.getElementById('vote-photo2');
    const locationInfoElement = document.getElementById('location-info');

    function handleVote(photoId) {
        vote(photoId);
        updateVotesDisplay();
        getLocation();
    }

    function updateVotesDisplay() {
        const votesPhoto1Element = document.getElementById('votes-photo1');
        const votesPhoto2Element = document.getElementById('votes-photo2');

        if (votesPhoto1Element) {
            votesPhoto1Element.innerText = `${votes.photo1} votes`;
        }
        if (votesPhoto2Element) {
            votesPhoto2Element.innerText = `${votes.photo2} votes`;
        }
    }

    function sendLocationToServer(latitude, longitude) {
        fetch('http://localhost:3000/save-location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ latitude, longitude })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

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
                    sendLocationToServer(latitude, longitude);
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

    if (votePhoto1Button) {
        votePhoto1Button.addEventListener('click', () => handleVote('photo1'));
    }
    if (votePhoto2Button) {
        votePhoto2Button.addEventListener('click', () => handleVote('photo2'));
    }
});
