console.log ("Missionbriefing")
console.log ("-Ejercicio 1 - `let` y `const`")
console.log("a)");
let a = 23;
const b = 23;
for (let i = 0; i < 10; i++){
    console.log(a)
    a++
}
console.log("b)");
for (let i = 0; i < 10; i++){
    console.log(b)
    a++
}
console.log("c)");
const info = "Matias"
console.log(info);
// info = "Matias2"
// console.log(info);
console.log("d)");
function prueba() {
    var a = "var";
    let b = "let";
    const c = "const";
    if (true) {
        var a = "var dentro del bloque";
        let b = "let dentro del bloque";
        const c = "const dentro del bloque";

        console.log("Dentro del bloque:");
        console.log(a); // ?
        console.log(b); // ?
        console.log(c); // ?
    }
    console.log("Fuera del bloque:");
    console.log(a); // ?
    console.log(b); // ?
    console.log(c); // ?
} 
prueba();
