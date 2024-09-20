let cola = [];  // Arreglo que representa la cola


function añadirTarea() {
    const entradaTarea = document.getElementById("entradaTarea");
    const textoTarea = entradaTarea.value.trim();

    if (textoTarea !== "") {
        cola.push(textoTarea);  
        entradaTarea.value = "";  
        mostrarTareas();
    }
}


function mostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";  

    cola.forEach((tarea, indice) => {
        const divTarea = document.createElement("div");
        divTarea.className = "tarea";
        divTarea.innerHTML = `${tarea}<button onclick="eliminarTarea()">Eliminar</button>`;
        listaTareas.appendChild(divTarea);
    });
}


function eliminarTarea() {
    if (cola.length > 0) {
        cola.shift();  
        mostrarTareas();
    } else {
        alert("No hay tareas en la cola.");
    }
}
