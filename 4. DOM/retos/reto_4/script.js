const contenedor = document.querySelector(".card")
const boton = document.querySelector("button");
const imagen = document.querySelector("img");



let i = 0;

boton.onclick = function(){
    
    
    if(i == 0){
        imagen.setAttribute("src", "img/auto1.png");
        i++;
    }else if(i == 1){
        imagen.setAttribute("src", "img/auto2.png");
        i++;
    }else if(i == 2){
        imagen.setAttribute("src", "img/auto3.png");
        i = 0;
    }


}