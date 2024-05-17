let emailInput = document.querySelector('.emailInput');
let passwordInput = document.querySelector('.passwordInput');

document.getElementById('signinBtn').addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Перевірка, чи поля не порожні
    if (!email || !password) {
        alert('Please fill in both email and password fields.');
        return; // Зупинити виконання, якщо поля порожні
    }

    // Зберігання даних у .json файлі
    await saveDataToJson(email, password);

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // Зберігаємо стан входу
    localStorage.setItem('isLoggedIn', true);
    
    // Навігація на домашню сторінку
    toHomePage();
});

async function saveDataToJson(email, password) {
    const data = { email, password };
    try {
        const response = await fetch('/save-log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json.message); // Повідомлення з сервера про успішне збереження
    } catch (error) {
        console.error('Error:', error);
    }
}

function toHomePage() {
    var homePage = "index.html";
    window.location.href = homePage;
};
