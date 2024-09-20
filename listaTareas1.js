let cola = [];  // Arreglo que representa la cola

// Función para añadir una tarea a la cola
function añadirTarea() {
    const entradaTarea = document.getElementById("entradaTarea");
    const textoTarea = entradaTarea.value.trim();

    if (textoTarea !== "") {
        cola.push(textoTarea);  // Añadir al final de la cola
        entradaTarea.value = "";  // Limpiar el campo de entrada
        mostrarTareas();
    }
}

// Función para mostrar las tareas en la página
function mostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";  // Limpiar la lista antes de mostrarla de nuevo

    cola.forEach((tarea, indice) => {
        const divTarea = document.createElement("div");
        divTarea.className = "tarea";
        divTarea.innerHTML = `${tarea}<button onclick="eliminarTarea()">Eliminar</button>`;
        listaTareas.appendChild(divTarea);
    });
}

// Función para eliminar la primera tarea de la cola
function eliminarTarea() {
    if (cola.length > 0) {
        cola.shift();  // Eliminar la primera tarea (FIFO)
        mostrarTareas();
    } else {
        alert("No hay tareas en la cola.");
    }
}