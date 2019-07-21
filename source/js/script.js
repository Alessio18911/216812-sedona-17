window.onload = function() {
  const header = document.querySelector('.page-header');
  const toggleMenu = header.querySelector('.page-header__burger-wrapper');

  toggleMenu.addEventListener('click', function() {
    header.classList.toggle('is-opened');
  });
}
