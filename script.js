var modal = document.getElementById("signInModal");
var btn = document.getElementById("signInBtn");
var closeBtn = document.getElementById("closeModalBtn");

// When the user clicks the "Sign In" link, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
