const simBtn = document.getElementById("sim");
const naoBtn = document.getElementById("nao");
const modal = document.getElementById("modal");


simBtn.addEventListener("click", () => {

  modal.style.display = "flex";

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

});