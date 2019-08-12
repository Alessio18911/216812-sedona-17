window.onload = function() {
  var toggleMenu = document.querySelector(".page-header__burger-wrapper"),
  menu = document.querySelector(".main-nav");
  menu.classList.remove("main-nav--opened");

  toggleMenu.addEventListener("click", function() {
    this.classList.toggle("page-header__burger-wrapper--opened");
    menu.classList.toggle("main-nav--opened");
  });

  // Эмуляция открытия модального окна при отправке формы и его закрытия
  if(document.querySelector(".form")) {
    var form = document.querySelector(".form"),
          popupSuccess = document.querySelector(".popup.popup--success"),
          popupWarning = document.querySelector(".popup.popup--warning"),
          closeButtons = document.querySelectorAll(".popup__button"),
          body = document.querySelector("body");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      popupSuccess.classList.remove("visually-hidden");
      popupSuccess.querySelector(".popup__popup").classList.add("popup__popup--display");
      body.style.overflow = "hidden";
    });

    var closePopup = function() {
      popupSuccess.classList.add("visually-hidden");
      popupSuccess.querySelector(".popup__popup").classList.remove("popup__popup--display");
      body.style.overflow = "auto";
    };

    for(var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener("click", closePopup);
    }
  }
};

// карта на главной странице
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
