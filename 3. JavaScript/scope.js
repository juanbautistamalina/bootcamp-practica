/*Crea una función que tome un número 'num' y lo multiplique por una variable global llamada 
* 'multiplicador'. Recuerda que 'multiplicador' es una variable global y puede ser accedida 
* desde cualquier parte del código mientras que 'num' es local. */


let multiplicador = 5;


function multiplicar(num){
    resultado = num * multiplicador; 
    return resultado
}

console.log(multiplicar(10));