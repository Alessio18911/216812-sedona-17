window.onload = function() {
  const toggleMenu = document.querySelector('.page-header__burger-wrapper'),
  menu = document.querySelector('.main-nav');

  toggleMenu.addEventListener('click', function() {
    this.classList.toggle('page-header__burger-wrapper--opened');
    menu.classList.toggle('main-nav--opened');
  });
};

function initMap() {
  const sedona = {
    lat: 34.869897,
    lng: -111.760994
  };

  const pin = "../img/icon-map-marker.svg";

  const map = new google.maps.Map(document.querySelector("#map"), { center: sedona, zoom: 13 });

  const marker = setTimeout(() => {
    new google.maps.Marker({
      position: sedona,
      map: map,
      icon: pin,
      animation: google.maps.Animation.BOUNCE
    });
  }, 2000);
}
