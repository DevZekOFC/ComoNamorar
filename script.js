const simBtn = document.getElementById("sim");
const naoBtn = document.getElementById("nao");
const modal = document.getElementById("modal");
const music = document.getElementById("romanticMusic");
const googleNotification = document.getElementById("googleNotification");

// ==================== MÚSICA AUTOMÁTICA (Versão Forte) ====================
function tryPlayMusic() {
  music.volume = 0.7; // Volume confortável
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      console.log("🎵 Música tocando automaticamente!");
    }).catch(() => {
      console.log("Autoplay bloqueado - esperando interação");
    });
  }
}

// Múltiplas tentativas agressivas
window.addEventListener('load', () => {
  tryPlayMusic();
  setTimeout(tryPlayMusic, 400);
  setTimeout(tryPlayMusic, 1200);
  setTimeout(tryPlayMusic, 2500);
});

// Clique em qualquer lugar da página também ativa (último recurso)
document.body.addEventListener('click', () => {
  if (music.paused) tryPlayMusic();
}, { once: true });

// ==================== LÓGICA ORIGINAL ====================

simBtn.addEventListener("click", () => {

document.getElementById("main-screen").style.display="none";

document.getElementById("accepted-screen").style.display="flex";

tryPlayMusic();

});

function fecharModal(){
  modal.style.display = "none";
}

function moverNao(){
  const container = document.querySelector(".screen");
  const maxX = container.offsetWidth - 160;
  const maxY = container.offsetHeight - 100;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY + 120;

  naoBtn.style.position = "absolute";
  naoBtn.style.left = x + "px";
  naoBtn.style.top = y + "px";
}

naoBtn.addEventListener("mouseover", moverNao);

naoBtn.addEventListener("click", () => {
  moverNao();
  tryPlayMusic();
});
