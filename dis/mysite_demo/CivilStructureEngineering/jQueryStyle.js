//s2
$(document).ready(function() {
    var $s2 = $('.s2-anime');
    $s2.waypoint(function(direction) {
        if (direction == 'down') {
            $s2.addClass('animated fadeInLeftBig');
        } else {
            $s2.removeClass('animated fadeInLeftBig');
        }
    }, { offset: '80%' });
});

//s2-anime2
$(document).ready(function() {
    var $s2anime1 = $('.s2-anime1');
    $s2anime1.waypoint(function(direction) {
        if (direction == 'down') {
            $s2anime1.addClass('animated zoomIn');
        } else {
            $s2anime1.removeClass('animated zoomIn');
        }
    }, { offset: '80%' });
});
$(document).ready(function() {
    var $s2anime2 = $('.s2-anime2');
    $s2anime2.waypoint(function(direction) {
        if (direction == 'down') {
            $s2anime2.addClass('animated zoomIn');
        } else {
            $s2anime2.removeClass('animated zoomIn');
        }
    }, { offset: '80%' });
});
$(document).ready(function() {
    var $s2anime3 = $('.s2-anime3');
    $s2anime3.waypoint(function(direction) {
        if (direction == 'down') {
            $s2anime3.addClass('animated zoomIn');
        } else {
            $s2anime3.removeClass('animated zoomIn');
        }
    }, { offset: '80%' });
});

//s4
$(document).ready(function() {
    var $s4 = $('.s4-anime');
    $s4.waypoint(function(direction) {
        if (direction == 'down') {
            $s4.addClass('animated fadeInRightBig');
        } else {
            $s4.removeClass('animated fadeInRightBig');
        }
    }, { offset: '75%' });
});

//s4-anime
$(document).ready(function() {
    var $s4anime1 = $('.s4-anime1');
    $s4anime1.waypoint(function(direction) {
        if (direction == 'down') {
            $s4anime1.addClass('animated rotateInDownLeft');
        } else {
            $s4anime1.removeClass('animated rotateInDownLeft');
        }
    }, { offset: '80%' });
});
$(document).ready(function() {
    var $s4anime2 = $('.s4-anime2');
    $s4anime2.waypoint(function(direction) {
        if (direction == 'down') {
            $s4anime2.addClass('animated rotateInDownRight');
        } else {
            $s4anime2.removeClass('animated rotateInDownRight');
        }
    }, { offset: '80%' });
});

//s41-anime
$(document).ready(function() {
    var $s41anime1 = $('.s41-anime1');
    $s41anime1.waypoint(function(direction) {
        if (direction == 'down') {
            $s41anime1.addClass('animated slideInUp');
        }
    }, { offset: '60%' });
});
$(document).ready(function() {
    var $s41anime2 = $('.s41-anime2');
    $s41anime2.waypoint(function(direction) {
        if (direction == 'down') {
            $s41anime2.addClass('animated slideInUp');
        }
    }, { offset: '60%' });
});

$(document).ready(function() {
    var $s41img = $('.s41-img');
    $s41img.hover(function() {
        $(this).css("width", "105%");
    }, function() {
        $(this).css("width", "100%");
    });
});