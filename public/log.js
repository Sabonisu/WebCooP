let homeNav = document.querySelector('.btn');

homeNav.addEventListener('click', () => {
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    let emailInput = document.querySelector('.emailInput').value;
    let passwordInput = document.querySelector('.passwordInput').value;

    if (emailInput.trim() !== '' && passwordInput.trim() !== '') {
        if (emailInput === storedEmail && passwordInput === storedPassword) {
            localStorage.setItem('isLoggedIn', true);
            setTimeout(toHomePage, 0); // викликати toHomePage через короткий проміжок часу
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    } else {
        alert('Email and password cannot be empty.');
    }
});

function toHomePage() {
    var homePage = "index.html";
    window.location.href = homePage;
};
