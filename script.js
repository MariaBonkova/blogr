const menuToggle = document.getElementById(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
const hamburgerLabel = document.querySelector(".hamburger");

hamburgerLabel.addEventListener("change", function() {
    if (hamburgerLabel.style.display === "block") {
        navMenu.style.display = "none";
        iconClose.style.display = "none";
        iconOpen.style.display = "block";
        menuToggle.checked = false;
    }else {
        navMenu.style.display = "flex";
        iconClose.style.display = "block";
        iconOpen.style.display = "none";
        menuToggle.checked = true;

    }
})

