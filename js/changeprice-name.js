//

//take the button that confirms the new name and price
var buttonOK = document.querySelector(".button-ok");
//

//take the <p> where the new name and price will stay
var itemName = document.querySelectorAll(".itemName");

var itemPrice = document.querySelectorAll(".full_price_place");

var fullItem = document.querySelector(".item");
//

var corretName;
var corretPrice;
var selectItem;

function itemCounterNamesandPrices() {
  var itemName = document.querySelectorAll(".itemName");

  var itemPrice = document.querySelectorAll(".full_price_place");

  var fullItem = document.querySelectorAll(".item");

  for (i = 0; i < fullItem.length; i++) {
    itemName[i].addEventListener("click", takeNewName);
    itemPrice[i].addEventListener("click", takeNewPrice);
  }
}

function itemCounterXandButtonOK() {
  var span = document.querySelectorAll(".close");

  var buttonOK = document.querySelectorAll(".button-ok");

  var fullItem = document.querySelectorAll(".item");

  var inputNewName = document.querySelectorAll(".correctName");

  var inputNewPrice = document.querySelectorAll(".correctPrice");

  for (i = 0; i < fullItem.length; i++) {
    var i;
    span[i].addEventListener("click", closeModal);
    buttonOK[i].addEventListener("click", correctTheitem);

    inputNewName[i].addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.nextSibling.nextSibling.click();
      }
    });
  }
}



function itemCounterXandButtonOKPrice() {
  var span = document.querySelectorAll(".close");

  var buttonOK = document.querySelectorAll(".button-ok");

  var fullItem = document.querySelectorAll(".item");

  

  var inputNewPrice = document.querySelectorAll(".correctPrice");

  for (i = 0; i < fullItem.length; i++) {
    var i;
    span[i].addEventListener("click", closeModal);
    buttonOK[i].addEventListener("click", correctTheitem);

    inputNewPrice[i].addEventListener("keyup", function (event) {
      
        if (event.keyCode === 13) {
          event.preventDefault();
          this.nextSibling.nextSibling.click();
        }
      
    });
  }
}





function takeNewName() {
  selectItem = this.closest(".item");

  openModal(`

    <input class="correctName" type="text" placeholder="Item" value="${this.innerHTML}">
    

    <div class="button-ok box_icon">
          <p>OK</p>
          
    </div> <span class="close box_icon">&times;</span>`);
    
  itemCounterXandButtonOK();
}

function takeNewPrice() {
  selectItem = this.closest(".item");

  openModal(`

    
    <input class="correctPrice" type="number" placeholder="Preco Item" value="${Number(
      this.children[0].innerHTML
    )}">

    <div class="button-ok box_icon">
          <p>OK</p>
          
    </div> <span class="close box_icon">&times;</span>`);

    
    itemCounterXandButtonOKPrice();
}

function correctTheitem() {
  let inputNewName = document.querySelector(".correctName");

  let inputNewPrice = document.querySelector(".correctPrice");

  if (inputNewName !== null || inputNewPrice == null) {
    let correctName = document.querySelector(".correctName");
    adjustName(correctName);
  } else {
    let correctPrice = document.querySelector(".correctPrice");

    adjustPrice(correctPrice, "price");
  }
}

function adjustName(correctName) {
  let oldName = selectItem.children[0];

  oldName.innerHTML = correctName.value;

  somaTotal();
  itemCounterDelete();
  itemCounterNamesandPrices();

  closeModal();
  updateList();
}

function adjustPrice(correctPrice) {
  let oldPrice = selectItem.children[1].children[0].children[0];
  oldPrice.innerText = Number(correctPrice.value);

  somaTotal();
  itemCounterDelete();
  itemCounterNamesandPrices();

  closeModal();
  updateList();
}

itemCounterNamesandPrices();
