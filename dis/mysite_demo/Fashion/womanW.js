var woman = [
    "img/album/woman collection/winter/1.jpg",
    "img/album/woman collection/winter/2.jpg",
    "img/album/woman collection/winter/3.jpg",
    "img/album/woman collection/winter/4.jpg",
    "img/album/woman collection/winter/5.jpg",
    "img/album/woman collection/winter/6.jpg",
    "img/album/woman collection/winter/7.jpg",
    "img/album/woman collection/winter/8.jpg",
    "img/album/woman collection/winter/9.jpg",
    "img/album/woman collection/winter/10.jpg",
    "img/album/woman collection/winter/11.jpg",
    "img/album/woman collection/winter/12.jpg",
    "img/album/woman collection/winter/13.jpg",
    "img/album/woman collection/winter/14.jpg",
    "img/album/woman collection/winter/15.jpg",
    "img/album/woman collection/winter/16.jpg",
    "img/album/woman collection/winter/17.jpg",
    "img/album/woman collection/winter/18.jpg",
    "img/album/woman collection/winter/19.jpg",
    "img/album/woman collection/winter/20.jpg",


];

$(document).ready(function() {

    //var dir = "img/album/man collection/"; // folder location
    //var fileextension = ".jpg"; // image format

    var box = [];
    var imgItem = document.getElementsByClassName('img-item');
    for (var i = 0; i < imgItem.length; i++) {
        box.push(imgItem[i]);
        $(box[i]).attr('src', woman[i]);
    }

});