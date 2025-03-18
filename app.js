let nombreAmigo = [];
let listaresutados = [];


function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  //Verificacion de nombre ingresado
  if (amigo === "") {
    asignarTextoElemento("h2", "Debes ingresar un nombre");
    return;
  } else if (nombreAmigo.includes(amigo)) {
    asignarTextoElemento("h2", "El amigo ya fue ingresado, intenta nuevamente");
    return;
  } else {
    nombreAmigo.push(amigo);
    mostrarAmigos();
    asignarTextoElemento("h2", "Digite el nombre de sus amigos");
    limpiar();
  }
}

function mostrarAmigos() {
  let amigos = "";
  for (let i = 0; i < nombreAmigo.length; i++) {
    amigos += `<li>${nombreAmigo[i]}</li>`;
    asignarTextoElemento("ul", amigos);
  }
}

function sorterAmigos() {
  let indexAmigo = Math.floor(Math.random() * nombreAmigo.length);
  let resultado = "";

  for (let i = 0; i < nombreAmigo.length; i++) {
    resultado = nombreAmigo[indexAmigo];
  }

  if (nombreAmigo.length < 2 || !nombreAmigo || nombreAmigo.length % 2) {
    asignarTextoElemento("h2", "No hay suficientes amigos para sortear");
  } else if (nombreAmigo.length == listaresutados.length) {
    asignarTextoElemento("h2", "No hay mas amigos para sortear");
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (
    listaresutados.includes(resultado)
  ) {
    sorterAmigos();
    return;
  } else {
    listaresutados.push(resultado);
    asignarTextoElemento(
      "h2",
      `El amigo secreto es: ${resultado}`
    );
  }
  console.log(resultado);
  return;
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function limpiar() {
  document.getElementById("amigo").value = "";
}

function resetear() {
  condicionesIniciales();
}

function condicionesIniciales() {
  asignarTextoElemento("h2", "Ingresa el nombre de tus amigos");
  asignarTextoElemento("ul", "");
  nombreAmigo = [];
  listaresutados = [];
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
