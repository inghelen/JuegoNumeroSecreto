let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto) {
    let elementoHTMl = document.querySelector(elemento);
    elementoHTMl.innerHTML = texto;
    return;
}


function verificarIntento() {
  Alert('Click desde el boton');
  return;
}
function generarNumeroSecreto () {
return Math.floor(Math.random()*10)+1;
}
asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');