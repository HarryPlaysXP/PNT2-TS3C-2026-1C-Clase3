console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
//Datos simulados
const productos = [

];
console.log ("Ejercicio 1: Mostrar Títulos de alguna información obtenida")

fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(data => {
    let personajes = data.results.slice(0, 10);

    personajes.forEach(p => {
      console.log(p.name);
    });
  })
  .catch(error => console.log(error));