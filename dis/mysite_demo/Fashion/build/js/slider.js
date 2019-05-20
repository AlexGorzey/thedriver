"use strict";

;

(function () {
  /* Slideshow*/
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    //var i;
    var slides = document.getElementsByClassName("mySlides");

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].className += " animation";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " animation";
    setTimeout(showSlides, 7500);
  } // СOOKIE


  document.querySelector('#cookie .close').addEventListener('click', function () {
    return document.getElementById('cookie').style.display = 'none';
  });
})();