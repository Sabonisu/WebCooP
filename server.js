const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Вказуємо Express використовувати папку public для статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Запускаємо сервер
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
