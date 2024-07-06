// Haz que se muestre 'Alarma' en la consola cada 3 segundos.
let interval = setInterval(() => {console.log("Alarma")}, 3000);
setTimeout(() => {clearInterval(interval); }, 10000);