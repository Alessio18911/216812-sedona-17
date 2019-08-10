window.onload = function() {
  var toggleMenu = document.querySelector('.page-header__burger-wrapper'),
  menu = document.querySelector('.main-nav');

  toggleMenu.addEventListener('click', function() {
    this.classList.toggle('page-header__burger-wrapper--opened');
    menu.classList.toggle('main-nav--opened');
  });
};

function initMap() {
  var sedona = {
    lat: 34.869897,
    lng: -111.760994
  };

  var pin = {
    url: "../img/icon-sp-map-marker.svg",
    scaledSize: new google.maps.Size(27, 27)
  };

  var map = new google.maps.Map(document.querySelector("#map"), { center: sedona, zoom: 13 });

  var marker = setTimeout(function() {
    new google.maps.Marker({
      position: sedona,
      map: map,
      icon: pin,
      optimized: false,
      animation: google.maps.Animation.BOUNCE
    });
  }, 2000);
}
