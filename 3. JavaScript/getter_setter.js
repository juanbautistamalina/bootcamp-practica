let persona = {
	_nombre: 'Juan',
	_edad: 21,

    get getNombre(){
        return "nombre: " + this._nombre + ", edad: " + this._edad;
    },

    setNombre(valor){
        const splitValor = valor.split(" ");
        this._nombre = splitValor[0];
        this._edad = splitValor[1];
    }
};



console.log(persona.getNombre)
persona.setNombre("Bautista 25");

console.log(persona.getNombre)