// Get the modal
var modal = document.getElementById("myModal");

//get yhe modal content
var Content = document.querySelector(".modal-content");

// Get the button that opens the modal
var itemName = document.querySelector(".itemName");
var itemPrice = document.querySelector(".full_price_place");

// Get the <span> element  that closes the modal

// When the user clicks on the button, open the modal with the correct contente and category (name item or price item)

function openModal(modalContent, category) {
  Content.innerHTML = modalContent;

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
