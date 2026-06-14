const simBtn = document.getElementById("sim");
const naoBtn = document.getElementById("nao");
const music = document.getElementById("romanticMusic");


// ==================== MÚSICA AUTOMÁTICA ====================

function tryPlayMusic() {

  music.volume = 0.7;

  const playPromise = music.play();

  if (playPromise !== undefined) {

    playPromise.then(() => {

      console.log("🎵 Música tocando automaticamente!");

    }).catch(() => {

      console.log("Autoplay bloqueado - esperando interação");

    });

  }

}


// Tentativas automáticas

window.addEventListener('load', () => {

  tryPlayMusic();

  setTimeout(tryPlayMusic, 400);

  setTimeout(tryPlayMusic, 1200);

  setTimeout(tryPlayMusic, 2500);

});


// Qualquer clique ativa música

document.body.addEventListener('click', () => {

  if (music.paused) {

    tryPlayMusic();

  }

}, { once:true });




// ==================== BOTÃO SIM ====================


simBtn.addEventListener("click", () => {


  document.getElementById("main-screen").style.display = "none";


  document.getElementById("accepted-screen").style.display = "flex";


  tryPlayMusic();


});





// ==================== BOTÃO NÃO ====================


function moverNao() {


  const largura = window.innerWidth - naoBtn.offsetWidth;

  const altura = window.innerHeight - naoBtn.offsetHeight;



  const x = Math.random() * largura;

  const y = Math.random() * altura;



  naoBtn.style.position = "fixed";

  naoBtn.style.left = x + "px";

  naoBtn.style.top = y + "px";


}



naoBtn.addEventListener("click", () => {


  moverNao();


  tryPlayMusic();


});
