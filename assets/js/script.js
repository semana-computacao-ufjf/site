/* CRIA ALERTA PARA LEMBRAR DA CONFIRMAÇÃO */

function confirmationAlert() {
  alert(
    "Confirme sua inscrição com a doação de uma caixa de leite na secretaria do DCC ou um PIX de R$6,00 para o número (32) 98820-4465 até segunda-feira (17/10)."
  );
}

confirmationAlert();

/* INÍCIO DA LÓGICA PARA ABRIR/FECHAR O MENU EM TELAS PEQUENAS */

const navBtn = document.querySelector(".nav-icon"); // Pega o botão do navbar para abrir o menu do navbar e fechar o menu do navbar
const navMenu = document.querySelector(".navbar-navigation-links"); // Pega o menu do navbar

navBtn.addEventListener("click", () => {
  if (navMenu.className === "navbar-navigation-links") {
    // Checa se a classe do navMenu tem apenas o ícone visível
    navMenu.className += " nav-menu"; // Adiciona a classe do menu do navbar
  } else {
    navMenu.className = "navbar-navigation-links"; // Remove a classe do menu do navbar
  }
});

/* FIM DA LÓGICA PARA ABRIR/FECHAR O MENU EM TELAS PEQUENAS */

/* INÍCIO DA LÓGICA PARA ATUALIZAR O CRONOMETRO */

function updateTimer() {
  const deadline = new Date("Oct 17, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const timeDifference = deadline - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days-counter").innerHTML = days;
  document.getElementById("hours-counter").innerHTML = hours;
  document.getElementById("minutes-counter").innerHTML = minutes;
  document.getElementById("seconds-counter").innerHTML = seconds;
}

setInterval(updateTimer, 1000);

/* FIM DA LÓGICA PARA ATUALIZAR O CRONOMETRO */

/* INÍCIO DA LÓGICA PARA EXIBIR O VIDEO DE TUTORIAL DE INSCRIÇÃO */

const videoBtn = document.querySelector("#show-video");
const videoContainer = document.querySelector(".enroll-tutorial-video");

videoBtn.addEventListener("click", () => {
  videoContainer.style.display =
    videoContainer.style.display === "block" ? "none" : "block";
});

/* FIM DA LÓGICA PARA EXIBIR O VIDEO DE TUTORIAL DE INSCRIÇÃO */

/* LÓGICA DA TABELA */
function changeColor(day) {
  collection = document.getElementsByClassName("button-programacao");
  for (i in collection) {
    if (i < 5) {
      collection[i].style.backgroundColor = "#888482";
    }
  }
  document.getElementById(day).style.backgroundColor = "#b01917";
}

function changeTable(tday) {
  collection = document.getElementsByClassName("table-day");
  for (i in collection) {
    if (i < 5) {
      collection[i].style.visibility = "hidden";
      collection[i].style.display = "none";
    }
  }
  document.getElementById(tday).style.display = "block";
  document.getElementById(tday).style.visibility = "visible";
}
// changeColor("day1");
document.getElementById("day1").click();
/* FIM LÓGICA DA TABELA */

/* INÍCIO DA LÓGICA PARA EXIBIR PALESTRANTES */
const navbar = document.querySelector("#navbar");
const mainContainer = document.querySelector(".main-container");
const speakersContainer = document.querySelector(".speakers-container");

navbar.addEventListener("click", (e) => {
  if (e.target.className.includes("speakers-link")) {
    mainContainer.classList.remove("container-active");
    speakersContainer.classList.add("container-active");
    speakersContainer.classList.add("animate-up");
  } else {
    speakersContainer.classList.remove("container-active");
    mainContainer.classList.add("container-active");
  }
});

/* FIM DA LÓGICA PARA EXIBIR PALESTRANTES */
