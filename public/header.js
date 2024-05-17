document.addEventListener("DOMContentLoaded", function() {
    // Get the header element
    var header = document.querySelector('header');

    // Check if the user is logged in by reading from localStorage
    var isLoggedIn = localStorage.getItem('isLoggedIn');

    // If the user is logged in
    if (isLoggedIn === 'true') {
        // Add the "logged_in" class to the header
        header.classList.add('logged_in');
    }
});

let headerBody = document.querySelector('body');  // Renamed to headerBody

function toLogIn() {
    var contactsPage = "login.html";
    window.location.href = contactsPage;
}

let logOutBtn = document.querySelector('.logOutBtn');
logOutBtn.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', false);
    location.reload();
});

let profile2 = document.querySelector('.profile2');
profile2.addEventListener('click', () => {
    profile2.classList.toggle('show');
});

let profCartBtn = document.querySelector('.profCart');
profCartBtn.addEventListener('click', () => {
    headerBody.classList.toggle('showCart');
});

document.querySelector('.homeNav').addEventListener('click', (event) => {
    event.preventDefault();
    toHomePage();
});

document.querySelector('.aboutNav').addEventListener('click', (event) => {
    event.preventDefault();
    toAboutPage();
});

document.querySelector('.productsNav').addEventListener('click', (event) => {
    event.preventDefault();
    toProductsPage();
});

document.querySelector('.reviewsNav').addEventListener('click', (event) => {
    event.preventDefault();
    toReviewsPage();
});

document.querySelector('.contactsNav').addEventListener('click', (event) => {
    event.preventDefault();
    toContactsPage();
});

function toHomePage() {
    window.location.href = "index.html#home";
}

function toAboutPage() {
    window.location.href = "index.html#about";
}

function toProductsPage() {
    window.location.href = "product_page.html";
}

function toReviewsPage() {
    window.location.href = "index.html#reviews";
}

function toContactsPage() {
    window.location.href = "index.html#contacts";
}
