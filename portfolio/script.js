let menuVisible = false;

// funcion ue oculta o muestra el enu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList ="";
    menuVisible = false;
  } else {
    document.getElementById('nav').classList = 'responsive';
    menuVisible = true;
  }
}

function seleccionar() {
  // oculta el men una vex selecciono una opcion
  document.getElementById("nav").classList ="";
  menuVisible = false;
}
// funcion que aplica las animaciones de las habilidades 
function efectoHabilidades() {
  var skills = document.getElementById('skills');
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName('progreso');
    habilidades[0].classList.add('javascript');
    habilidades[1].classList.add('htmlcss');
    habilidades[2].classList.add('canva');
    habilidades[3].classList.add('ia');
    habilidades[4].classList.add('comunicacion');
    habilidades[5].classList.add('trabajo');
    habilidades[6].classList.add('creatividad');
    habilidades[7].classList.add('dedicacion');
    habilidades[8].classList.add('project');
    
  }
}

// se detecta el scrolling para aplicar la animacion de las habilidades
window.onscroll = function() {
  efectoHabilidades();
}
