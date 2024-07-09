/*Crea un programa que imprima primero el evento 'event'
del elemento padre con id 'padre' al hacer clic en un elemento
hijo y después imprime el evento 'event' del elemento hijo 
con id 'hijo' esto en la fase de captura. */

const padre = document.querySelector("#padre");
const hijo = document.querySelector("#hijo");

padre.addEventListener("click", () =>{console.log("padre")}, true);
hijo.addEventListener("click", () =>{console.log("hijo")});