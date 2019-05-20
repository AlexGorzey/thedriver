"use strict";

var accessories = ["img/album/attribute/man/1.jpg", "img/album/attribute/man/2.jpg", "img/album/attribute/man/3.jpg", "img/album/attribute/man/4.jpg", "img/album/attribute/man/5.jpg", "img/album/attribute/man/6.jpg", "img/album/attribute/man/7.jpg", "img/album/attribute/man/8.jpg", "img/album/attribute/man/9.jpg", "img/album/attribute/man/10.jpg"];
$(document).ready(function () {
  //var dir = "img/album/man collection/"; // folder location
  //var fileextension = ".jpg"; // image format
  var box = [];
  var imgItem = document.getElementsByClassName('img-item');

  for (var i = 0; i < imgItem.length; i++) {
    box.push(imgItem[i]);
    $(box[i]).attr('src', accessories[i]);
  }
});