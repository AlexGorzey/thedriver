"use strict"; // Script to open and close sidebar

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
} //Hide element   


function HideBtn() {
  document.getElementById("hide").style.display = "block";
}

window.onload = function () {
  //Dropdown menu
  function myFunction() {
    var menu = document.getElementById("menu");

    if (menu.className === "menu") {
      menu.className += " responsive";
    } else {
      menu.className = "menu";
    }
  }

  ; //Dropdown menu

  var dropdown = document.getElementsByClassName("dropdown-btn");

  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  ;
};

(function () {
  //Show modal window for choose a product
  document.querySelectorAll('.product-grid .product').forEach(function (item) {
    item.addEventListener('click', showProduct);
  });

  function showProduct(e) {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var target = e.target;
    var parent = target.parentNode;
    var modalImg = document.getElementById("modal_img");
    var captionText = document.getElementById("caption");
    var priceText = document.querySelector('#myModal .price-title span');

    if (target.closest('.product')) {
      modalImg.src = this.querySelector('img').src;
      captionText.innerHTML = this.querySelector('.product-name').innerHTML;
      priceText.innerHTML = this.querySelector('.product-price').innerHTML;
    } else {
      return;
    }

    document.querySelector('#myModal .close').addEventListener('click', function () {
      return modal.style.display = "none";
    });
  } // INITIALIZE PRODUCT


  var basket = [];
  var basketStore = [];
  var count = 0;
  var total = undefined ? 0 : sessionStorage.getItem('totalStore');
  var totalPrice = undefined ? 0 : sessionStorage.getItem('totalPrice');
  var price = 0;
  var size, captionText;
  var boughtList = document.querySelector('#modalBought .bought-product-container'); // let basketStore = [JSON.parse(sessionStorage.getItem('basketStore'))];

  var totalStore = undefined ? '0' : sessionStorage.getItem('totalStore'); //Store data in sessionStorage  

  function saveInStore(basketS, totalS, totalP) {
    basketS = JSON.stringify(basketS);
    totalS = JSON.stringify(totalS);
    totalP = JSON.stringify(totalP);
    sessionStorage.setItem('basketStore', basketS);
    sessionStorage.setItem('totalStore', totalS);
    sessionStorage.setItem('totalPrice', totalP);
  } //Render 
  // saveInStore(basketStore, totalStore);


  function renderStore(basketS, totalS) {
    basketS = sessionStorage.getItem('basketStore');
    totalS = sessionStorage.getItem('totalStore');
  }

  document.querySelector('#total').innerHTML = sessionStorage.getItem('totalStore'); //SwitchSize

  document.querySelectorAll('#myModal .products-size-button .choose-size').forEach(function (item) {
    item.addEventListener('click', activeteSize);
  });

  function activeteSize(e) {
    var target = e.target;
    document.querySelector('#myModal .products-size-button .choose-size.active-size').classList.remove('active-size');
    target.classList.add('active-size');
  } //Choose quantity


  document.querySelector('#myModal .size-quantity-button .btn-plus').addEventListener('click', countPlus);
  document.querySelector('#myModal .size-quantity-button .btn-minus').addEventListener('click', countMinus);

  function countPlus() {
    count++;
    document.querySelector('#myModal .size-quantity-button .products-quantity').innerHTML = count;
  }

  function countMinus() {
    if (count > 0) {
      count--;
      document.querySelector('#myModal .size-quantity-button .products-quantity').innerHTML = count;
    } else {
      return;
    }
  } // Order products


  document.querySelector('#myModal .products-price .price-btn-by').addEventListener('click', addToBasket);

  function addToBasket() {
    if (count > 0) {
      var size = document.querySelector('#myModal .products-size-button .choose-size.active-size').innerHTML;
      var _price = document.querySelector('#myModal .price-title span').innerHTML;
      console.log(_price); // var price = document.querySelector('#myModal .products-price .price-title span').innerHTML;

      var captionText = document.getElementById("caption").innerHTML;
      _price = count * parseFloat(_price);
      console.log(_price);
      var newItem = {
        item: captionText,
        size: size,
        quantity: count,
        price: _price
      };

      if (sessionStorage.hasOwnProperty('basketStore')) {
        var value = sessionStorage.getItem('basketStore');

        try {
          basketStore = JSON.parse(value);
        } catch (e) {
          console.log(e);
        }
      }

      if (basketStore.length == 0) {
        basketStore = [newItem];
      } else {
        basketStore = [].concat(_toConsumableArray(basketStore), [newItem]);
      }

      total = count + +sessionStorage.getItem('totalStore');
      totalPrice = _price + +sessionStorage.getItem('totalPrice');
      totalPrice = +totalPrice.toFixed(10);
      console.log(totalPrice);
      document.querySelector('#total').innerHTML = total;
      saveInStore(basketStore, total, totalPrice);
      alert('Товар додано до кошика');
    } else {
      alert('Будь ласка, виберіть кількість товару яку ви хочете придбати');
    }
  }

  document.querySelector('#mySidebar .my-purchases .load-button').addEventListener('click', byProducts);

  function byProducts() {
    var modalB = document.getElementById('modalBought');
    basket = sessionStorage.getItem('basketStore');
    basket = JSON.parse(basket);
    totalStore = undefined ? 0 : +sessionStorage.getItem('totalStore');

    if (totalStore > 0) {
      modalB.style.display = "block";
      boughtList.innerHTML = "";

      for (var i = 0; i < basket.length; i++) {
        var _li = document.createElement('li');

        _li.innerHTML = "\u0412\u0438 \u0437\u0430\u043C\u043E\u0432\u0438\u043B\u0438: ".concat(basket[i].item, "; \u0420\u043E\u0437\u043C\u0456\u0440: ").concat(basket[i].size, ";  \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C: ").concat(basket[i].quantity, ";  \u0426\u0456\u043D\u0430 \u0437\u0430 \u0442\u043E\u0432\u0430\u0440:  ").concat(basket[i].price);
        boughtList.appendChild(_li);
      }

      var li = document.createElement('li');
      li.innerHTML = "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438: ".concat(totalPrice, " \u0433\u0440\u0438\u0432\u043D\u0456\u0432");
      boughtList.appendChild(li);
      document.querySelector('#modalBought .bought-product-container').lastChild.className = 'total-prize';
    } else {
      alert('Виберіть товар який ви хочете придбати');
    }

    document.querySelector('#modalBought .close').addEventListener('click', function () {
      modalB.style.display = "none";
    });
    document.querySelector('#modalBought .confirm-purchase').addEventListener('click', function () {
      alert('Ваше замовлення прийняте! Гарного дня!');
    });
  }
})(); //Scrollbar


$(document).ready(function () {
  $('.scrollbar-outer').scrollbar();
});