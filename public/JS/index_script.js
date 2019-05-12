// Get the modals
var createModal = document.getElementById('CreateDialog');
var joinModal = document.getElementById('JoinDialog');

// When the user clicks on the button, open the modal
document.getElementById("start-showdown-btn").onclick = function() {
    createModal.style.display = "block";
}
document.getElementById("join-showdown-btn").onclick = function() {
    joinModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    createModal.style.display = "none";
}
document.getElementsByClassName("close")[1].onclick = function() {
    joinModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createModal || event.target == joinModal) {
    createModal.style.display = "none";
    joinModal.style.display = "none";
  }
} 