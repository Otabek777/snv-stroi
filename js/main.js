$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass('fixed')
    } else {
        $('.header').removeClass('fixed')
    }
});
document.querySelector('.header__burgir').addEventListener('click', function() {
    document.querySelector('.catalog_menu').classList.add('active');
});
document.querySelector('.catalog_menu__close').addEventListener('click', function() {
    document.querySelector('.catalog_menu').classList.remove('active');
});
const catalogOpen = document.querySelectorAll('.catalog_menu .open');
for(let i = 0; i < catalogOpen.length; i++) {
    catalogOpen[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
};