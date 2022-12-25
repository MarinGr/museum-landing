const navIcon = document.querySelector(".nav-icon");
const closeNavIcon = document.querySelector(".close-nav-icon");
const nav = document.querySelector(".nav-list--top");

navIcon.addEventListener("click", showNav);
closeNavIcon.addEventListener("click", hideNav);

function showNav() {
  nav.classList.add("visible");
  nav.style.display = "flex";
  navIcon.style.display = "none";
  closeNavIcon.style.display = "block";
}

function hideNav() {
  nav.classList.remove("visible");
  nav.style.display = "none";
  navIcon.style.display = "block";
  closeNavIcon.style.display = "none";
}
