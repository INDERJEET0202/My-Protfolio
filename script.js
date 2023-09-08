function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function changeImageDark() {
  var img = document.getElementById("profile-pic");
  img.src = "./assets/profile-pic-2.png";
}

function changeImageLight() {
  var img = document.getElementById("profile-pic");
  img.src = "./assets/profile-pic.png";
}

