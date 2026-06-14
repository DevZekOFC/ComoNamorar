const simBtn = document.getElementById("sim");
const naoBtn = document.getElementById("nao");
const modal = document.getElementById("modal");
const emoji = document.querySelector(".emoji");
const music = document.getElementById("romanticMusic");

let naoClicks = 0;

// Emojis mais bravos
const emojisBravos = ["🤧", "😕", "🙁", "😣", "😠", "😡", "🤬", "💢"];

// ==================== MÚSICA ====================
function tryPlayMusic() {
  music.volume = 0.7;
  music.play().catch(() => {});
}

window.addEventListener('load', () => {
  tryPlayMusic();
  setTimeout(tryPlayMusic, 500);
  setTimeout(tryPlayMusic, 1500);
});

// ==================== NOVO SISTEMA: BOTÃO NÃO PELA TELA TODA ====================
function moverNao() {
  // Pega o tamanho da tela inteira
  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 60;

  // Gera posição aleatória em qualquer lugar da tela
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  naoBtn.style.position = "fixed";     // Muda para fixed (tela toda)
  naoBtn.style.left = x + "px";
  naoBtn.style.top = y + "px";
  naoBtn.style.zIndex = "100";
}

// Atualiza emoji conforme cliques
function atualizarEmoji() {
  const indice = Math.min(naoClicks, emojisBravos.length - 1);
  emoji.textContent = emojisBravos[indice];

  if (naoClicks >= 5) {
    emoji.style.transform = "scale(1.25)";
  }
}

// ==================== EVENTOS ====================

// Clique no SIM
simBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  tryPlayMusic();
});

// Clique no NÃO (agora move + conta clique)
naoBtn.addEventListener("click", () => {
  moverNao();
  naoClicks++;
  atualizarEmoji();
  tryPlayMusic();
});

function fecharModal(){
  modal.style.display = "none";
}
