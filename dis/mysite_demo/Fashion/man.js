var man = [
    "img/album/new collection/man/1.jpg",
    "img/album/new collection/man/2.jpg",
    "img/album/new collection/man/3.jpg",
    "img/album/new collection/man/4.jpg",
    "img/album/new collection/man/5.jpg",
    "img/album/new collection/man/6.jpg",
    "img/album/new collection/man/7.jpg",
    "img/album/new collection/man/8.jpg",
    "img/album/new collection/man/9.jpg",
    "img/album/new collection/man/10.jpg"

];

$(document).ready(function() {

    //var dir = "img/album/man collection/"; // folder location
    //var fileextension = ".jpg"; // image format
    /*
        var imgItem = document.getElementsByClassName('img-item');
        for (var i = 0; i < imgItem.length; i++) {
            for (var j = 0; j < man.length; j++) {
                $(imgItem[i]).attr('src', man[j]);
            }
        }
        */
    var box = [];
    var imgItem = document.getElementsByClassName('img-item');
    for (var i = 0; i < imgItem.length; i++) {
        box.push(imgItem[i]);
        $(box[i]).attr('src', man[i]);
    }

});