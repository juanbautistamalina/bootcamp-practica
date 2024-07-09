const body = document.querySelector("body");

const button = document.querySelector('#boton');

button.addEventListener('click', (event) => {
    console.log('Botón presionado'),
    event.stopPropagation() // Evitar propagación
});

// Las siguientes líneas no se ejecutan. 
body.addEventListener("click", ()=>{console.log("body")});
document.addEventListener("click", ()=>{console.log("documento")});
