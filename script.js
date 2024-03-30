// let searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () =>
// {
//     searchForm.classList.toggle('active');

// }

// let searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () =>
// {

//     searchForm.classList.toggle('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }


// const cartBtn = document.getElementById('cart-btn');
// cartBtn.addEventListener('click', function(){
//     const shoppingCart = document.getElementsByClassName('shopping-cart')[0];

//     shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');

// })

// const loginBtn = document.getElementById('login-btn');
// loginBtn.addEventListener('click', function(){
//     const loginForm = document.getElementsByClassName('login-form')[0];

//     loginForm.classList.toggle('active');
//     shoppingCart.classList.remove('active');
//     searchForm.classList.remove('active');
//     navbar.classList.remove('active');

// })

// let navbar = document.querySelector('.navbar');
// document.querySelector('#menu-btn').onclick = () =>
// {
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');



// }




// window.onscroll = () =>
// {
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');

// }











let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
document.getElementById('cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

let loginForm = document.getElementsByClassName('login-form')[0];
document.getElementById('login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
};


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
};

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

















