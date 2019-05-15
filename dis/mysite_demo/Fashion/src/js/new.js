"use strict";

var newCollection = ["img/album/new collection/1.jpg", "img/album/new collection/2.jpg", "img/album/new collection/3.jpg", "img/album/new collection/4.jpg", "img/album/new collection/5.jpg", "img/album/new collection/6.jpg", "img/album/new collection/7.jpg", "img/album/new collection/8.jpg", "img/album/new collection/9.jpg", "img/album/new collection/10.jpg", "img/album/new collection/11.jpg", "img/album/new collection/12.jpg"];
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