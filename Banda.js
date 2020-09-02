class Banda {
    constructor (nombre, web, anio, genero) {
        this.nombre = nombre ? nombre : 'Nombre no encontrado';
        this.web = web ? web : 'Web no encontrada';
        this.anio = anio ? anio : 'Anio no encontrado';
        this.genero = genero ? genero : 'Genero no encontrado';
    }
}

module.exports = {Banda};






// Operadores ternarios
const edad = 15;

// console.log(edad >= 18);

const resultado = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(resultado);


// if ( edad >= 18) {
//     console.log('Eres mayor de edad');
// }else {
//     console.log('Eres menor de edad');
// }