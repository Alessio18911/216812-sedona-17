window.onload = function() {
  const toggleMenu = document.querySelector('.page-header__burger-wrapper'),
        menu = document.querySelector('.main-nav');

  toggleMenu.addEventListener('click', function() {
    this.classList.toggle('page-header__burger-wrapper--opened');
    menu.classList.toggle('main-nav--opened');
  });
};
