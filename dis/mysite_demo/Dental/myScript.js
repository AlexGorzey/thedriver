//Header
$(document).ready(function() {
    $(".headStyle1").addClass("animated  zoomIn");
    $(".title2").addClass("animated infinite pulse");
    $(".cright").addClass("animated infinite pulse ");
});
/*
function FadeIn(direction, $this) {
    if (direction == 'down') {
        $this.addClass('animated fadeIn');
        $this.css('opacity', '1');
    } else {
        $this.removeClass('animated fadeIn');
        $this.css('opacity', '');
    }
}
$(document).ready(function() {
    var $this = $('.article1');
    this.waypoint(FadeIn(direction, $this), { offset: '75%' });
});
*/

//Article1

$(document).ready(function() {
    var $article1 = $('.article1');
    $article1.waypoint(function(direction) {
        if (direction == 'down') {
            $article1.addClass('animated fadeIn');
            $article1.css('opacity', '1');
        } else {
            $article1.removeClass('animated fadeIn');
            $article1.css('opacity', '')
        }
    }, { offset: '90%' });
});

//Section 2
$(document).ready(function() {
    var $row1 = $('.row1');
    $row1.waypoint(function(direction) {
        if (direction == 'down') {
            $row1.addClass('animated slideInLeft');
            $row1.css('opacity', '1');
        } else {
            $row1.removeClass('animated slideInLeft');
            $row1.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $row2 = $('.row2');
    $row2.waypoint(function(direction) {
        if (direction == 'down') {
            $row2.addClass('animated slideInRight');
            $row2.css('opacity', '1');
        } else {
            $row2.removeClass('animated slideInRight');
            $row2.css('opacity', '');
        }
    }, { offset: '65%' });
});

//Section 3
$(document).ready(function() {
    var $h3S3 = $('.h3S3');
    $h3S3.waypoint(function(direction) {
        if (direction == 'down') {
            $h3S3.addClass('animated fadeIn');
            $h3S3.css('opacity', '1');
        } else {
            $h3S3.removeClass('animated fadeIn');
            $h3S3.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $S3img = $('.S3img');
    $S3img.waypoint(function(direction) {
        if (direction == 'down') {
            $S3img.addClass('animated slideInRight');
            $S3img.css('opacity', '1');
        } else {
            $S3img.removeClass('animated slideInRight');
            $S3img.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $S3content = $('.S3content');
    $S3content.waypoint(function(direction) {
        if (direction == 'down') {
            $S3content.addClass('animated slideInLeft');
            $S3content.css('opacity', '1');
        } else {
            $S3content.removeClass('animated slideInLeft');
            $S3content.css('opacity', '');
        }
    }, { offset: '65%' });
});

//Section 4
$(document).ready(function() {
    var $h3S4 = $('.h3S4');
    $h3S4.waypoint(function(direction) {
        if (direction == 'down') {
            $h3S4.addClass('animated fadeIn');
            $h3S4.css('opacity', '1');
        } else {
            $h3S4.removeClass('animated fadeIn');
            $h3S4.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $S4img = $('.S4img');
    $S4img.waypoint(function(direction) {
        if (direction == 'down') {
            $S4img.addClass('animated slideInRight');
            $S4img.css('opacity', '1');
        } else {
            $S4img.removeClass('animated slideInRight');
            $S4img.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $S4content = $('.S4content');
    $S4content.waypoint(function(direction) {
        if (direction == 'down') {
            $S4content.addClass('animated slideInLeft');
            $S4content.css('opacity', '1');
        } else {
            $S4content.removeClass('animated slideInLeft');
            $S4content.css('opacity', '');
        }
    }, { offset: '65%' });
});

//Section 5
$(document).ready(function() {
    var $h3S5 = $('.h3S5');
    $h3S5.waypoint(function(direction) {
        if (direction == 'down') {
            $h3S5.addClass('animated fadeIn');
            $h3S5.css('opacity', '1');
        } else {
            $h3S5.removeClass('animated fadeIn');
            $h3S5.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $S5img = $('.S5img');
    $S5img.waypoint(function(direction) {
        if (direction == 'down') {
            $S5img.addClass('animated slideInRight');
            $S5img.css('opacity', '1');
        } else {
            $S5img.removeClass('animated slideInRight');
            $S5img.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $S5content = $('.S5content');
    $S5content.waypoint(function(direction) {
        if (direction == 'down') {
            $S5content.addClass('animated slideInLeft');
            $S5content.css('opacity', '1');
        } else {
            $S5content.removeClass('animated slideInLeft');
            $S5content.css('opacity', '');
        }
    }, { offset: '65%' });
});

//Article 2  section 's2S'
$(document).ready(function() {
    var $a2Simg1 = $('.a2Simg1');
    $a2Simg1.waypoint(function(direction) {
        if (direction == 'down') {
            $a2Simg1.addClass('animated slideInLeft');
            $a2Simg1.css('opacity', '1');
        } else {
            $a2Simg1.removeClass('animated slideInLeft');
            $a2Simg1.css('opacity', '');
        }
    }, { offset: '65%' });
});
$(document).ready(function() {
    var $a2Simg2 = $('.a2Simg2');
    $a2Simg2.waypoint(function(direction) {
        if (direction == 'down') {
            $a2Simg2.addClass('animated slideInRight');
            $a2Simg2.css({ 'opacity': '1', 'justify-content': 'center' });
        } else {
            $a2Simg2.removeClass('animated slideInRight');
            $a2Simg2.css({ 'opacity': '', 'justify-content': '' });
        }
    }, { offset: '65%' });
});



//$(".title2").addClass("animated bounce");
//$(".title2").addClass("animated shake");
//$("#target3").addClass("animated fadeOut");
//$("button").removeClass("btn-default");