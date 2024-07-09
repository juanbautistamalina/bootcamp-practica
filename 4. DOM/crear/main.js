// Crea un botón dentro de un div con el id 'miDiv'. El botón debe tener el texto 'Haz clic aquí'.

let miDiv = document.getElementById('miDiv');
let boton = document.createElement("button");
boton.innerHTML = 'Haz click aquí';
miDiv.appendChild(boton);

boton.onclick = mostrarTexto


function mostrarTexto(){
    let texto = document.createElement("p");
    texto.innerHTML = "<b>Botón creado con JavaScript</b>";
    miDiv.appendChild(texto);
}