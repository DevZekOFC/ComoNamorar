const simBtn = document.getElementById("sim");
const naoBtn = document.getElementById("nao");
const modal = document.getElementById("modal");
const emoji = document.querySelector(".emoji"); // Emoji principal
const music = document.getElementById("romanticMusic");

let naoClicks = 0; // Contador de cliques no NÃO

// Emojis progressivamente mais bravos
const emojisBravos = [
    "🤧",   // 0 - Inicial
    "😕",   // 1
    "🙁",   // 2
    "😣",   // 3
    "😠",   // 4
    "😡",   // 5
    "🤬",   // 6 - Máximo de raiva
    "💢"    // 7 - Raiva extrema
];

// ==================== MÚSICA AUTOMÁTICA ====================
function tryPlayMusic() {
  music.volume = 0.7;
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
}

window.addEventListener('load', () => {
  tryPlayMusic();
  setTimeout(tryPlayMusic, 400);
  setTimeout(tryPlayMusic, 1200);
});

document.body.addEventListener('click', () => {
  if (music.paused) tryPlayMusic();
}, { once: true });

// ==================== NOVO SISTEMA: EMOJI FICANDO BRAVO ====================
function atualizarEmoji() {
  const indice = Math.min(naoClicks, emojisBravos.length - 1);
  emoji.textContent = emojisBravos[indice];
  
  // Efeito visual extra quando fica muito bravo
  if (naoClicks >= 5) {
    emoji.style.transform = "scale(1.2)";
    emoji.style.transition = "transform 0.3s";
  }
}

// ==================== LÓGICA ORIGINAL ====================

simBtn.addEventListener("click", () => {
  modal.style.display = "flex";
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

// Clique passando o mouse (hover)
naoBtn.addEventListener("mouseover", moverNao);

// Clique direto no botão NÃO
naoBtn.addEventListener("click", () => {
  moverNao();
  naoClicks++;                    // Aumenta o contador
  atualizarEmoji();               // Atualiza o emoji
  tryPlayMusic();
});
