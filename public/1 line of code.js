let orderNow = document.querySelector('.order');

orderNow.addEventListener('click', (event) => {
    toProductsPage();
});


function toProductsPage() {
    window.location.href = "product_page.html";
}