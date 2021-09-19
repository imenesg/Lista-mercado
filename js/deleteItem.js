

/*console.log(deleteButton[0]);*/

function itemCounterDelete() {
    var deleteButton = document.querySelectorAll(".icon_delete");

    var itemLine = document.querySelectorAll(".item");

  for (i = 0; i < deleteButton.length; i++) {
      
    deleteButton[i].addEventListener("click", deleteItem);
    itemLine[i].addEventListener("click", deleteItem);
  }
}
function deleteItem() {
  this.remove();
  console.log("indoindo indo");
  somaTotal();
}
itemCounterDelete()