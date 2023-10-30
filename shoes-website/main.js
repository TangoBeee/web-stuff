const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');

openMenu.addEventListener('click', () => {
    nav.classList.add('open-nav');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('open-nav');
});