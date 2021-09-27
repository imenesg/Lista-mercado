// Get the modal
var modalHelp = document.getElementById("Helpmodal");

// Get the button that opens the modal
var btn = document.querySelector(".Help")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("Helpclose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalHelp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalHelp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalHelp.style.display = "none";
  }
}