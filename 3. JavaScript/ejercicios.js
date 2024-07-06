// Hola Mundo
console.log("Hola Universo");

// Este es un ejemplo de comentario en JavaScript

// Variables
const pi = 3.1416;
let radio = 50;

// Texto
const nombre = "Juan Bautista";

// Métodos de texto
console.log(nombre.toUpperCase());

// Número
let numero = 5;

// Lista
let frutas = ['manzana', 'naranja', 'pera'];
frutas.push("banana");
console.log(frutas);

// Objeto
const persona = {
    nombre: "Juan Bautista",
    edad: 21
}


// Tipos
let miVariable = 5;
console.log(typeof(miVariable));


// Plantillas de texto y coerción
const miNombre = 'Juan';
const saludo = `Hola ${nombre}`;


// Operadores Comparativos de Números
let objeto = {
    numero1: 20, 
    numero2: 10
};

console.log(objeto.numero1 >= objeto.numero2);


// Operadores Comparativos de Texto
const cadena1 = "Esto es una cadena";
const cadena2 = "Esto es otra cadena";
console.log(cadena1 == cadena2);

// Comparar por valor vs por referencia
let a = [1, 2, 3];
let b = [1, 2, 3]
console.log(a === b); // false


// Operadores Aritméticos
a = 10;
b = 5;
const c = 3;
let resultado;

console.log(a + " + " + b + " = " + (a+b));
console.log(a + " * " + b + " = " + (a*b));
console.log(a + " - " + b + " = " + (a-b));
console.log(c + " * " + c + " = " + (c*c));
console.log("125 / " + b + " = " + (125/b));


// Operadores Lógicos
let respuesta = 5 > 2 && 3 < 7
