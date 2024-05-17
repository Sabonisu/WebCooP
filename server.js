const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Відслідковування папки public для статичних файлів

app.post('/save-log', (req, res) => {
    const logData = req.body.logData;
    fs.appendFile('log.json', logData + '\n', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving log data');
            return;
        }
        console.log('Log data saved');
        res.sendStatus(200);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
