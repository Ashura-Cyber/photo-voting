const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    const data = `Latitude: ${latitude}, Longitude: ${longitude}\n`;

    fs.appendFile('locations.txt', data, (err) => {
        if (err) {
            res.status(500).send('Error writing to file');
            return;
        }
        res.status(200).send('Location saved');
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
