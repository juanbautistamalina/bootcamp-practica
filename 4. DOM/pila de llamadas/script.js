/* Modifica el código para que 'a' llame a 'b', y 'b' llame a 'c'. 
Corre este código en tu consola que lanzará un error en 'c'.

Puedes ver que los errores devuelven la pila de llamadas y la línea 
y columna exacta que llevaron al error para ayudarte a depurar un programa. */

function a() {
	console.log('Función a');
    b()
}

function b() {
	console.log('Función b');
    c()
}

function c() {
	console.log('Función c');
	throw new Error();
}

a();