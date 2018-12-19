/* Navbar */
window.onload = function() {
    window.onscroll = function() { myFunction(); };
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }



};

/* Navbar button */
$(document).ready(function() {
    $(".active").blur(function() {
        $('.active').removeClass("active1");
        $(this).addClass("active1");

    });
});


/* Animation for content */
$(document).ready(function() {
    var $c1 = $('.c1');
    $c1.waypoint(function(direction) {
        if (direction == 'down') {
            $c1.addClass('animated bounceInLeft');
            $c1.css('opacity', '1');
        } else {
            $c1.removeClass('animated bounceInLeft');
            $c1.css('opacity', '');
        }
    }, { offset: '90%' });
});
$(document).ready(function() {
    var $c2 = $('.c2');
    $c2.waypoint(function(direction) {
        if (direction == 'down') {
            $c2.addClass('animated bounceInRight');
            $c2.css('opacity', '1');
        } else {
            $c2.removeClass('animated bounceInRight');
            $c2.css('opacity', '');
        }
    }, { offset: '90%' });
});
$(document).ready(function() {
    var $c3 = $('.c3');
    $c3.waypoint(function(direction) {
        if (direction == 'down') {
            $c3.addClass('animated bounceInLeft');
            $c3.css('opacity', '1');
        } else {
            $c3.removeClass('animated bounceInLeft');
            $c3.css('opacity', '');
        }
    }, { offset: '90%' });
});
$(document).ready(function() {
    var $c4 = $('.c4');
    $c4.waypoint(function(direction) {
        if (direction == 'down') {
            $c4.addClass('animated bounceInRight');
            $c4.css('opacity', '1');
        } else {
            $c4.removeClass('animated bounceInRight');
            $c4.css('opacity', '');
        }
    }, { offset: '90%' });
});
$(document).ready(function() {
    var $c5 = $('.c5');
    $c5.waypoint(function(direction) {
        if (direction == 'down') {
            $c5.addClass('animated bounceInLeft');
            $c5.css('opacity', '1');
        } else {
            $c5.removeClass('animated bounceInLeft');
            $c5.css('opacity', '');
        }
    }, { offset: '90%' });
});