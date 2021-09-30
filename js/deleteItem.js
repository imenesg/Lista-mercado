function itemCounterDelete() {
  var deleteButton = document.querySelectorAll(".icon_delete");

  var itemLine = document.querySelectorAll(".item");

  for (i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteItem);
  }
}

function deleteItem() {
  let button = this;
  button.closest(".item").classList.add("removeitem");

  setTimeout(()=> button.closest(".item").remove(), 250);

  /*this.closest(".item").remove();*/ 

  somaTotal();
  updateList();
}
itemCounterDelete();
