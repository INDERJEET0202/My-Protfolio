const scroll = new LocomotiveScroll({
  el: document.querySelector('#mainContent'),
  smooth: true
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function changeImageDark() {
  var img = document.getElementById("profile-pic");
  img.src = "./assets/profile-pic.png";
}

function changeImageLight() {
  var img = document.getElementById("profile-pic");
  img.src = "./assets/profile-pic-2.png";
}

function changeImage() {
  var img = document.getElementById("profile-pic");
  
  // Retrieve mode from localStorage
  var mode = localStorage.getItem("mode");

  // Default to "light" if mode is not set or invalid
  if (!mode || (mode !== "dark" && mode !== "light")) {
      mode = "light";
  }

  if (mode === "dark") {
      img.src = "./assets/profile-pic.png";
  } else if (mode === "light") {
      img.src = "./assets/profile-pic-2.png";
  }
}
