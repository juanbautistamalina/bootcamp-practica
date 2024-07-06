// Crea un temporizador de 2 segundos usando setTimeout que llame a la función mostrarMensaje.

// setTimeout toma 2 argumentos
setTimeout(() => {mostrarMensaje("Mostrando Mensaje")}, 2000)


function mostrarMensaje(mensaje){
    console.log(mensaje);
}