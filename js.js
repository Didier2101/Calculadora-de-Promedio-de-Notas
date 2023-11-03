let nombreEstudiante = prompt('Escribe el nombre del estudiante');
let cantidadNotas = parseInt(prompt('Ingresa la cantidad de notas.'));

let notas = {};

for (let i = 0; i < cantidadNotas; i++) {
    var materia = prompt('Ingresa el nombre de la materia');
    var nota = parseInt(prompt(`Ingresa la nota ${materia}:`));
    notas[materia] = nota;
}

var sumaNotas = 0;
for (const materia in notas) {
    sumaNotas += notas[materia];
}
var promedio = sumaNotas / cantidadNotas;

console.log(`Nombre del estudiante: ${nombreEstudiante}`);
console.log(`Notas ingresadas: ${cantidadNotas}`);
for (var materia in notas) {
    console.log(`${materia} : ${notas[materia]}`);
}

console.log(`Promedio de notas: ${promedio}`);

if (promedio >= 7) {
    console.log("El estudiante ha aprobado.");
} else {
    console.log("El estudiante no ha aprobado.");
}
