const input = document.getElementById('ingresar-tareas');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas')

function agregarTarea() {
  if (input.value) {
    // crear tarea
    let nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('tarea');
    
    // ingresar texto
    let texto = document.createElement('p');
    texto.innerText = input.value;
    nuevaTarea.appendChild(texto);

    // crear y agregar iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    nuevaTarea.appendChild(iconos);

    // iconos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i')
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);

    // agregar tarea a la lista
    listaDeTareas.appendChild(nuevaTarea);
  } else {
    alert('Debes ingresar una tarea');
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});
