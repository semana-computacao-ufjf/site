const navBtn = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".navbar-navigation-links");

navBtn.addEventListener("click", () => {
  if (navMenu.className === "navbar-navigation-links") {
    navMenu.className += " nav-menu";
  } else {
    navMenu.className = "navbar-navigation-links";
  }
});
