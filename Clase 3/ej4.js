console.log ("Guia de ejercicios ES6")
console.log ("-".repeat(100))
console.log ("-Ejercicio 4 - Objetos y sus propiedades")
console.log ("A)")
let nombre = "Juan";
let edad = 25;
let profesion = "Programador";
let mensaje = `Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`;
console.log(mensaje);
console.log ("B)")
function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;
    return `El total es: ${total}`;
}
console.log(calcularTotal(100, 3));
console.log ("C)")
let nombreError = "TypeError";
let descripcion = "No se puede leer la propiedad de undefined";
let errorMensaje = `Error: ${nombreError} - ${descripcion}`;
console.log(errorMensaje);