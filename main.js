const menuList = document.querySelector('.nav_bar_links');
const menuBtn = document.querySelector('.menu_btn');

menuBtn.addEventListener('click', event => {
    menuList.classList.toggle('active');
});
