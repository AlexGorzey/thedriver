"use strict";

var newCollection = ["img/album/new collection/woman/1.jpg", "img/album/new collection/woman/2.jpg", "img/album/new collection/woman/3.jpg", "img/album/new collection/woman/4.jpg", "img/album/new collection/woman/5.jpg", "img/album/new collection/woman/6.jpg", "img/album/new collection/woman/7.jpg", "img/album/new collection/woman/8.jpg", "img/album/new collection/woman/9.jpg", "img/album/new collection/woman/10.jpg", "img/album/new collection/woman/11.jpg", "img/album/new collection/woman/12.jpg"];
$(document).ready(function () {
  //var dir = "img/album/man collection/"; // folder location
  //var fileextension = ".jpg"; // image format
  var box = [];
  var imgItem = document.getElementsByClassName('img-item');

  for (var i = 0; i < imgItem.length; i++) {
    box.push(imgItem[i]);
    $(box[i]).attr('src', newCollection[i]);
  }
});