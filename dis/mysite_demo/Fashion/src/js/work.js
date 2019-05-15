"use strict"; // Script to open and close sidebar

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
  };

  //Dropdown menu
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
  };

};

(function () {
  //Show modal window for choose a product
  document.querySelectorAll('.product-grid .product').forEach(item => {
    item.addEventListener('click', showProduct);
  });

  function showProduct(e) {

    var modal = document.getElementById('myModal');
    modal.style.display = "block";

    var target = e.target;
    var parent = target.parentNode;
    var modalImg = document.getElementById("modal_img");
    var captionText = document.getElementById("caption");
    let priceText = document.querySelector('#myModal .price-title span');

    if (target.closest('.product')) {
      modalImg.src = this.querySelector('img').src;
      captionText.innerHTML = this.querySelector('.product-name').innerHTML;
      priceText.innerHTML = this.querySelector('.product-price').innerHTML;
    } else { return; }

    document.querySelector('#myModal .close').addEventListener('click', () => modal.style.display = "none");
  }

  // INITIALIZE PRODUCT
  let basket = [];
  let basketStore = [];
  let count = 0;
  let total = (undefined) ? 0 : sessionStorage.getItem('totalStore');
  let totalPrice = (undefined) ? 0 : sessionStorage.getItem('totalPrice');
  let price = 0;
  let size, captionText;
  var boughtList = document.querySelector('#modalBought .bought-product-container');
  // let basketStore = [JSON.parse(sessionStorage.getItem('basketStore'))];
  let totalStore = (undefined) ? '0' : sessionStorage.getItem('totalStore');


  //Store data in sessionStorage  
  function saveInStore(basketS, totalS, totalP) {
    basketS = JSON.stringify(basketS);
    totalS = JSON.stringify(totalS);
    totalP = JSON.stringify(totalP)
    sessionStorage.setItem('basketStore', basketS);
    sessionStorage.setItem('totalStore', totalS);
    sessionStorage.setItem('totalPrice', totalP)
  }

  //Render 
  // saveInStore(basketStore, totalStore);
  function renderStore(basketS, totalS) {
    basketS = sessionStorage.getItem('basketStore');
    totalS = sessionStorage.getItem('totalStore');
  }
  document.querySelector('#total').innerHTML = sessionStorage.getItem('totalStore');

  //SwitchSize
  document.querySelectorAll('#myModal .products-size-button .choose-size').forEach(function (item) {
    item.addEventListener('click', activeteSize);
  });

  function activeteSize(e) {
    var target = e.target;
    document.querySelector('#myModal .products-size-button .choose-size.active-size').classList.remove('active-size');
    target.classList.add('active-size');
  }

  //Choose quantity
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
  }

  // Order products
  document.querySelector('#myModal .products-price .price-btn-by').addEventListener('click', addToBasket);

  function addToBasket() {

    if (count > 0) {
      var size = document.querySelector('#myModal .products-size-button .choose-size.active-size').innerHTML;
      let price = document.querySelector('#myModal .price-title span').innerHTML;
      console.log(price);
      // var price = document.querySelector('#myModal .products-price .price-title span').innerHTML;
      var captionText = document.getElementById("caption").innerHTML;
      price = count * parseFloat(price);      
      console.log(price);

      let newItem = { item: captionText, size: size, quantity: count, price: price }

      if (sessionStorage.hasOwnProperty('basketStore')) {
        let value = sessionStorage.getItem('basketStore');
        try {
          basketStore = JSON.parse(value);
        } catch (e) {
          console.log(e);
        }
      }

      if (basketStore.length == 0) {
        basketStore = [newItem];
      } else {
        basketStore = [...basketStore, newItem];
      }

      total = count + +sessionStorage.getItem('totalStore');
      totalPrice = price + +sessionStorage.getItem('totalPrice');
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

    totalStore = (undefined) ? 0 : +sessionStorage.getItem('totalStore');
    if (totalStore > 0) {
      modalB.style.display = "block";
      boughtList.innerHTML = "";

      for (let i = 0; i < basket.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `Ви замовили: ${basket[i].item}; Розмір: ${basket[i].size};  Кількість: ${basket[i].quantity};  Ціна за товар:  ${basket[i].price}`;
        boughtList.appendChild(li);
      }
      let li = document.createElement('li');
      li.innerHTML = `Загальна сума до сплати: ${totalPrice} гривнів`;
      boughtList.appendChild(li);
      document.querySelector('#modalBought .bought-product-container').lastChild.className = 'total-prize';
    } else {
      alert('Виберіть товар який ви хочете придбати');
    }

    document.querySelector('#modalBought .close').addEventListener('click', () => { modalB.style.display = "none" });
    document.querySelector('#modalBought .confirm-purchase').addEventListener('click', () => { alert('Ваше замовлення прийняте! Гарного дня!') })
  }

})();

//Scrollbar
$(document).ready(function () {
  $('.scrollbar-outer').scrollbar();
});