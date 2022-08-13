/* INÍCIO DA LÓGICA PARA ABRIR/FECHAR O MENU EM TELAS PEQUENAS */

const navBtn = document.querySelector(".nav-icon"); // Pega o botão do navbar para abrir o menu do navbar e fechar o menu do navbar
const navMenu = document.querySelector(".navbar-navigation-links"); // Pega o menu do navbar

navBtn.addEventListener("click", () => {
  if (navMenu.className === "navbar-navigation-links") {  // Checa se a classe do navMenu tem apenas o ícone visível
    navMenu.className += " nav-menu"; // Adiciona a classe do menu do navbar
  } else {
    navMenu.className = "navbar-navigation-links";  // Remove a classe do menu do navbar
  }
});

/* FIM DA LÓGICA PARA ABRIR/FECHAR O MENU EM TELAS PEQUENAS */

