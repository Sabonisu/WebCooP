document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо посилання на елемент хедера
    var header = document.querySelector('header');

    // Перевіряємо, чи користувач увійшов, зчитуючи дані з localStorage
    var isLoggedIn = localStorage.getItem('isLoggedIn');

    // Перевіряємо, чи користувач увійшов
    if (isLoggedIn === 'true') {
        // Додаємо клас "logged_in" до хедера
        header.classList.add('logged_in');
    }
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = set.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add(active)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function toLogIn() {
    var customersPage = "login.html";
    window.location.href = customersPage;
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
profCartBtn.addEventListener('click', () =>{
    body.classList.toggle('showCart');
})