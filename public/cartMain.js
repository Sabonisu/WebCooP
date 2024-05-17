//Cart
function toCheckOutPage() {
    var checkOutPage = "checkOut.html";
    // Redirects to the checkout page
    window.location.href = checkOutPage;
}

let blocked = document.querySelector('.shadow');
let closeCart = document.querySelector('.continueSh');
let cartBody = document.querySelector('body');  // Renamed to cartBody
let checkOutB = document.querySelector('.check');
let openCartIcon = document.querySelectorAll('.openCart');

closeCart.addEventListener('click', () => {
    cartBody.classList.toggle('showCart');
});
blocked.addEventListener('click', () => {
    cartBody.classList.toggle('showCart');
});
checkOutB.addEventListener('click', () => {
    toCheckOutPage();
});
checkOutB.addEventListener('click', () => {
    cartBody.classList.toggle('showCart');
});
openCartIcon.forEach(function(icon) {
    icon.addEventListener('click', () => {
        document.body.classList.toggle('showCart');
    });
});
