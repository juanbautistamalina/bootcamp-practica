// Anteriormente las clases se creaban de la siguiente manera
function Auto(modelo, marca, precio){
    this.modelo = modelo;
    this.marca  = marca;
    this.precio = precio
}


// Actualmente se crean así:
class Automovil{
    constructor(modelo, marca, color, precio){
        this.modelo = modelo;
        this.marca  = marca;
        this.color = color;
        this.precio = precio;
    }
}


let auto1 = new Auto("Modelo 1", "Audi", 1000000);
let auto2 = new Automovil("Modelo 2", "BMW","rojo", 10000000);
console.log(auto1);
console.log(auto2);