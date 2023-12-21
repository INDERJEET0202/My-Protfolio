// Get references to the light mode and dark mode icons
const lightModeIcon = document.getElementById("light-mode");
const darkModeIcon = document.getElementById("dark-mode");
const icons = document.getElementsByClassName("icon");
const graphics = document.getElementsByClassName("graphics-backgrounds");
const body = document.body;
const p = document.querySelectorAll("p");
const a = document.querySelectorAll("a")
const details_container = document.getElementsByClassName("details-container");
const h2_underline = document.getElementsByClassName("underline");
const download_icon = document.getElementsByClassName("download")
const profilePic = document.getElementById("profile-pic");
const toggleSvg = document.getElementById("toggle");



const localMode = localStorage.getItem("mode");
if (localMode === "light") {
    enableDarkMode();
}
else if (localMode === "dark") {
    enableLightMode();
}

// Function to enable dark mode
function enableDarkMode() {
    lightModeIcon.style.display = "none";
    darkModeIcon.style.display = "block";

    // add icon-dark class to icons
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.add("icon-dark");
    }

    body.classList.toggle('dark-mode');

    for (let i = 0; i < graphics.length; i++) {
        graphics[i].classList.add("dark-graphics-backgrounds");
    }

    p.forEach(function (paragraph) {
        paragraph.classList.add('dark-mode')
    });

    a.forEach(function (anquor) {
        anquor.classList.add('dark-mode')
    });

    for (let i = 0; i < details_container.length; i++) {
        details_container[i].classList.add('details-container-dark')
    }

    for (let i = 0; i < h2_underline.length; i++) {
        h2_underline[i].classList.add('underline-dark-mode')
    }

    for (let i = 0; i < download_icon.length; i++) {
        download_icon[i].classList.add('download-dark')
    }
    // Store the current mode in localStorage
    localStorage.setItem("mode", "dark");
}

// Function to enable light mode
function enableLightMode() {
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";

    // remove icon-dark class to icons
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove("icon-dark");
    }

    body.classList.remove('dark-mode');

    for (let i = 0; i < graphics.length; i++) {
        graphics[i].classList.remove("dark-graphics-backgrounds");
    }

    p.forEach(function (paragraph) {
        paragraph.classList.remove('dark-mode')
    });

    a.forEach(function (anquor) {
        anquor.classList.remove('dark-mode')
    });

    for (let i = 0; i < details_container.length; i++) {
        details_container[i].classList.remove('details-container-dark')
    }

    for (let i = 0; i < h2_underline.length; i++) {
        h2_underline[i].classList.remove('underline-dark-mode')
    }

    for (let i = 0; i < download_icon.length; i++) {
        download_icon[i].classList.remove('download-dark')
    }

    // Store the current mode in localStorage
    localStorage.setItem("mode", "light");
}

// Toggle function for dark/light mode
function toggleMode() {
    // Check the current mode in localStorage
    const currentMode = localStorage.getItem("mode");

    if (currentMode === "dark") {
        // Enable light mode
        enableLightMode();
    } else {
        // Enable dark mode
        enableDarkMode();
    }
}

// Toggle mode when clicking the icons
lightModeIcon.addEventListener("click", toggleMode);
darkModeIcon.addEventListener("click", toggleMode);

toggleSvg.addEventListener("click", toggleMode);