const circulo = document.querySelector(".circle");
const boton = document.querySelector("button");
boton.onclick = cambiarColor;



function cambiarColor(){
    let colores = ["#044040", "#D92525", "#48e"];
    let colorAleatorio = Math.floor(Math.random()*3)
    console.log(colorAleatorio)
    circulo.style.backgroundColor = colores[colorAleatorio]
}