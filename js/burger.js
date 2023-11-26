const mobileWindows = document.querySelector('.burger_menu_section');
const mobileBtnOpen = document.querySelector('.header__burger_open_btn');
const mobileBtnClose = document.querySelector('.close_btn_js');

const toggleMobail = () => mobileWindows.classList.toggle('is-open');

mobileBtnOpen.addEventListener('click', toggleMobail);
mobileBtnClose.addEventListener('click', toggleMobail);