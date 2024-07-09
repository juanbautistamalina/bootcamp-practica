/*Escucha el evento click del botón con id 'miBoton'
y muestra un mensaje en una alerta '¡Has hecho click en el botón!'. */

const boton = document.querySelector("#miBoton");
boton.addEventListener("click", () => {console.log("Haz hecho click en el botón")})