var woman = [
    "img/album/woman collection/summer/1.jpg",
    "img/album/woman collection/summer/2.jpg",
    "img/album/woman collection/summer/3.jpg",
    "img/album/woman collection/summer/4.jpg",
    "img/album/woman collection/summer/5.jpg",
    "img/album/woman collection/summer/6.jpg",
    "img/album/woman collection/summer/7.jpg",
    "img/album/woman collection/summer/8.jpg",
    "img/album/woman collection/summer/9.jpg",
    "img/album/woman collection/summer/10.jpg",
    "img/album/woman collection/summer/11.jpg",
    "img/album/woman collection/summer/12.jpg",
    "img/album/woman collection/summer/13.jpg",
    "img/album/woman collection/summer/14.jpg",
    "img/album/woman collection/summer/15.jpg",
    "img/album/woman collection/summer/16.jpg",
    "img/album/woman collection/summer/17.jpg",
    "img/album/woman collection/summer/18.jpg",
    "img/album/woman collection/summer/19.jpg",
    "img/album/woman collection/summer/20.jpg",
    "img/album/woman collection/summer/21.jpg",
    "img/album/woman collection/summer/22.jpg",
    "img/album/woman collection/summer/23.jpg",
    "img/album/woman collection/summer/24.jpg",
    "img/album/woman collection/summer/25.jpg",
    "img/album/woman collection/summer/26.jpg",
    "img/album/woman collection/summer/27.jpg",
    "img/album/woman collection/summer/28.jpg",
    "img/album/woman collection/summer/29.jpg",
    "img/album/woman collection/summer/30.jpg",
    "img/album/woman collection/summer/31.jpg",
    "img/album/woman collection/summer/32.jpg",
    "img/album/woman collection/summer/33.jpg",
    "img/album/woman collection/summer/34.jpg",
    "img/album/woman collection/summer/35.jpg",
    "img/album/woman collection/summer/36.jpg",
    "img/album/woman collection/summer/37.jpg",
    "img/album/woman collection/summer/38.jpg",
    "img/album/woman collection/summer/39.jpg",
    "img/album/woman collection/summer/40.jpg",
    "img/album/woman collection/summer/41.jpg",
    "img/album/woman collection/summer/42.jpg",
    "img/album/woman collection/summer/43.jpg",
    "img/album/woman collection/summer/44.jpg",
    "img/album/woman collection/summer/45.jpg",
    "img/album/woman collection/summer/46.jpg",
    "img/album/woman collection/summer/47.jpg",
    "img/album/woman collection/summer/48.jpg",
    "img/album/woman collection/summer/49.jpg",
    "img/album/woman collection/summer/50.jpg",


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