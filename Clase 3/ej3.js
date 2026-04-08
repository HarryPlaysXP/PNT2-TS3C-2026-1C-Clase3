console.log ("Guia de ejercicios ES6")
console.log ("-".repeat(100))
console.log ("-Ejercicio 3 - Objetos y sus propiedades")
console.log ("A)")
const libro = {
    titulo: "El Gran Gatsby",
    autor:"F. Scott Fitzgerald",
    anioPublicacion: "1925"
};
console.log(libro.autor);
console.log(libro.titulo);
console.log(libro.anioPublicacion);
console.log ("B)")
const persona = {
    hobby: "Libros",
    edad: 30
};
console.log(persona.edad);
persona.edad = 24;
console.log(persona.edad);
console.log ("C)")
const suma = (a , b) => {
    console.log(a + b);
}
const resta = (a , b) => {
    console.log(a - b);
}
const multi = (a , b) => {
    console.log(a * b);
}
const div = (a , b) => {
    if (b != 0){
        console.log(a / b);
    } else {
        console.log("Al infinito y más alla!");
    }
}
let a = 100
let b = 10
let c = 0
suma(a,b)
resta(a,b)
multi(a,b)
div(a,b)
div(a,c)
console.log ("D)")
const objeto = {
    propiedad1: "Valor 1",
    propiedad2: "Valor 2",
    propiedad3: "Valor 3"
}
let propiedad1 = objeto.propiedad1;
console.log(propiedad1);