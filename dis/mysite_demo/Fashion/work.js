// Script to open and close sidebar
function w3_open() {

    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";


}

function w3_close() {

    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

//Hide element   
function HideBtn() {
    document.getElementById("hide").style.display = "block";
}

window.onload = function() {

    //Dropdown menu
    function myFunction() {
        var menu = document.getElementById("menu");
        if (menu.className === "menu") {
            menu.className += " responsive";
        } else {
            menu.className = "menu";
        }
    }

    //Dropdown menu

    var dropdown = document.getElementsByClassName("dropdown-btn");

    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

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
    }

};

//Scrollbar
$(document).ready(function() {
    $('.scrollbar-outer').scrollbar();
});