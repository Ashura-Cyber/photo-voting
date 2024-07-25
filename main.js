// main.js
import { votes, vote } from './votes.js';

// Пример использования функции vote
document.getElementById('vote-photo1').addEventListener('click', () => vote('photo1'));
document.getElementById('vote-photo2').addEventListener('click', () => vote('photo2'));

// Для отображения начальных значений
document.getElementById('votes-photo1').innerText = `${votes.photo1} votes`;
document.getElementById('votes-photo2').innerText = `${votes.photo2} votes`;
