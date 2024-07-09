// Selección de elementos
const titulo = document.getElementById("titulo");
const libros = document.getElementsByClassName("book");
const imagenes = document.getElementsByTagName("img");
const body = document.querySelector("body")

console.log(titulo);
console.log(libros);
console.log(imagenes);

// Creación de elementos
const span = document.createElement("SPAN");
span.textContent = " 📚";
titulo.appendChild(span)

// ALGUNAS PRUEBAS
const listaLibros = document.querySelector("section");

const primerLibro = listaLibros.firstElementChild;
console.log(primerLibro);

const ultimoLibro = listaLibros.lastElementChild;
console.log(ultimoLibro);

primerLibro.innerHTML += "<button>Comprar</button>";

// Remover elementos
const obstaculoEsElCamino = document.querySelector(".ryan-holiday");
obstaculoEsElCamino.remove();