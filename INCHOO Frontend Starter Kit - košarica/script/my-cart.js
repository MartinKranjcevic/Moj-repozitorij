//Opens popup

function openPopup() {
  var element = document.getElementById('popup');
  element.classList.toggle("open-popup")
}

//Buttons for scrolling

function scroll_up() {
  var up = document.querySelector(".container");
  up.scrollBy(0, -123);
}

function scroll_down() {
  var down = document.querySelector(".container");
  down.scrollBy(0, 123);
}
