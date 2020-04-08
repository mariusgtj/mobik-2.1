// CONFIDENTIAL
// Get the modal
var modal2 = document.getElementById("id-modal-confid");

// Get the button that opens the modal
var btn2 = document.getElementById("confid");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("inchide")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


// TERMS
// Get the modal
var modal = document.getElementById("id-modal-termeni");

// Get the button that opens the modal
var btn = document.getElementById("termeni");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// DISCLAIMER
// Get the modal
var modal3 = document.getElementById("id-modal-disclaimer");

// Get the button that opens the modal
var btn3 = document.getElementById("disclaimer");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("inchide3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


