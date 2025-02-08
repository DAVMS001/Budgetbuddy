document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll(".dropdown > a");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function(event) {
            event.preventDefault();
            let submenu = this.nextElementSibling;
            submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
        });
    });

    var modal = document.getElementById("signInModal");
    var btn = document.getElementById("signInBtn");
    var closeBtn = document.getElementById("closeModalBtn");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});