const mainNavBtn = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

mainNavBtn.addEventListener('click', () => {
    console.log('click!');
    mainNav.classList.toggle('main-nav--opened')
})

