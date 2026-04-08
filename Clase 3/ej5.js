console.log ("Guia de ejercicios ES6")
console.log ("-".repeat(100))
console.log ("-Ejercicio 5 - Arrow Functions")
console.log ("A)")
const saludar = (nombre) => {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Mati"));
console.log ("B)")
const cuadrado = (num) => {
    return num ** 2;
}
console.log(cuadrado(5));
console.log ("C)")
const mayor = (a, b) => {
    return a > b ? a : b;
}
console.log(mayor(10, 20));
console.log ("D)")
const cuadrados = (arr) => arr.map(num => num ** 2);
console.log(cuadrados([1, 2, 3, 4]));