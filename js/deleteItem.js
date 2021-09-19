


function itemCounterDelete() {
    var deleteButton = document.querySelectorAll(".icon_delete");

    var itemLine = document.querySelectorAll(".item");

  for (i = 0; i < deleteButton.length; i++) {
      
    deleteButton[i].addEventListener("click", deleteItem);
    
  }
}
function deleteItem() {
    

    this.closest('.item').remove();
  
    console.log("indoindo indo");
    somaTotal();
}
itemCounterDelete()