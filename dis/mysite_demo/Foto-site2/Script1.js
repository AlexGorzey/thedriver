// JavaScript source code
function myMap() {
    myCenter = new google.maps.LatLng(48.4365692, 22.7176936);
    var mapOptions = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}

// Open and close sidebar
function openNav() {
    if (window.screen.width <= 768) {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mySidebar").style.width = "100%";
    } else if (window.screen.width > 768) {
        document.getElementById("mySidebar").style.width = "60%";
        document.getElementById("mySidebar").style.display = "block";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

function openNav2() {
    document.getElementById("mySidebar2").style.width = "100%";
    document.getElementById("mySidebar2").style.display = "block";
}

function closeNav2() {
    document.getElementById("mySidebar2").style.display = "none";
}




//Photo
// Open the Modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// Close the Modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function Gallery(target) {
    this.target = $(target);
    this.images = $('.mySlides img', this.target);
    this.index = 0;
}

Gallery.prototype.init = function() {
    var self = this;
    $('a.next', this.target).click(function() {
        self.images.eq(self.index).css('opacity', 0);
        self.index++;
        if (self.index >= self.images.length) {
            self.index = 0;
        }
        self.images.eq(self.index).css('opacity', 1);
    });
    $('a.prev', this.target).click(function() {
        self.images.eq(self.index).css('opacity', 0);
        self.index--;
        if (self.index < 0) {
            self.index = self.images.length - 1;
        }
        self.images.eq(self.index).css('opacity', 1);
    });
    $('.column img', this.target).click(function() {
        self.index = $(this).attr('data-num');
        self.images.css('opacity', 0);
        self.images.eq(self.index).css('opacity', 1);
    });
};

$(function() {
    $('.modal-content').each(function() {
        new Gallery(this).init();
    });
});