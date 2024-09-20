  1.  Cola: Usamos un arreglo llamado cola que contiene las tareas en orden.
	2.	Función añadirTarea:
	•	Toma el texto del campo de entrada (entradaTarea), lo agrega al final de la cola usando push() y luego limpia el campo de texto.
	•	Llama a la función mostrarTareas para actualizar la lista de tareas en la página.
	3.	Función mostrarTareas:
	•	Recorre la cola (con forEach) y muestra cada tarea en la pantalla.
	4.	Función eliminarTarea:
	•	Elimina la primera tarea de la cola con shift(), que sigue el principio de una cola FIFO (primero en entrar, primero en salir).
	•	Luego, actualiza la lista de tareas en la página.
