let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

console.log (numeroSecreto);

function asignarTextoElemento(elemento,texto) {
    let elementoHTMl = document.querySelector(elemento);
    elementoHTMl.innerHTML = texto;
    return;
}

function verificarIntento() {
 let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

 if (numeroDeUsuario === numeroSecreto) {
  asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'Vez' : "Veces"}`);
  document.getElementById ('reiniciar').removeAttribute ('disabled');
} else {
 // El usuario no acerto.
  if (numeroDeUsuario >numeroSecreto) {
    asignarTextoElemento ('p', 'El numero secreto es menor');
  } else {
 asignarTextoElemento ('p', 'El numero secreto es mayor');
  }
 intentos++;
 limpiarCaja();
  }
    return;
}

function limpiarCaja() {
   document.querySelector ('#valorUsuario'). value = '';
   valorCaja.value = '';
}


function generarNumeroSecreto () {
  let numeroGenerado = Math.floor(Math.random()*10)+1;

  console.log(mostrarGenerado);
  console.log (listaNumeroSorteados);
  // si el numero generado esta icluido en la lista
  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumerosSorteados.push (numeroGenerado);

     return numeroGenerado;
  }


}


function condicionesIniciales (){
  asignarTextoElemento('h1','Juego del número secreto!');
  asignarTextoElemento('p','Indica un numero del 1 al 10');
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;

}


 function reiniciarJuego() {
  // limpiar la caja 
  limpiarCaja();
  // indicar mensaje de intervalos de numeros
  // Generar numero aleatorio
  // Iniciabilizar el numero intentos
   condicionesIniciales();
   // Deshabilitar el boton de nuevo juego
  
document.querySelector('#reiniciar').setAttribute ('disabled', 'true');

 } 

condicionesInicialesIniciales();
