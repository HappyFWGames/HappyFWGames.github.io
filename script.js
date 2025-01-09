// 导航栏响应式切换功能
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const lines = document.querySelectorAll('.line');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    lines[0].classList.toggle('rotate-top');
    lines[1].classList.toggle('hide');
    lines[2].classList.toggle('rotate-bottom');
});