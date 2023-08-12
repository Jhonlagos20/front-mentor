let botonElem = document.getElementById('boton-cambiar-frase');
let fraseElem = document.getElementById('frase');
let autorElem = document.getElementById('autor')

function EnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarFrase() {
  let indiceAleatorio = EnteroAleatorio(0, frases.length);
  fraseElem.innerText = `"${frases[indiceAleatorio].texto}"`;
  autorElem.innerText = frases[indiceAleatorio].autor;
}

cambiarFrase();

botonElem.addEventListener('click', cambiarFrase);

