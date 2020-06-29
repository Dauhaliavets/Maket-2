const burgerMenu = document.querySelector('.burger_menu'),
headerNavList = document.querySelector('.header_nav_list');

burgerMenu.addEventListener('click', function(e){
    burgerMenu.classList.toggle('active');
    headerNavList.classList.toggle('show');
    document.body.classList.toggle('lock');
});