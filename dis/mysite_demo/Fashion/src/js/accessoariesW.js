"use strict";

var accessories = ["img/album/attribute/woman/1.jpg", "img/album/attribute/woman/2.jpg", "img/album/attribute/woman/3.jpg", "img/album/attribute/woman/4.jpg", "img/album/attribute/woman/5.jpg", "img/album/attribute/woman/6.jpg", "img/album/attribute/woman/7.jpg", "img/album/attribute/woman/8.jpg", "img/album/attribute/woman/9.jpg", "img/album/attribute/woman/10.jpg", "img/album/attribute/woman/11.jpg", "img/album/attribute/woman/12.jpg", "img/album/attribute/woman/13.jpg"];
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