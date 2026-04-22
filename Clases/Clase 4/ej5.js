console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 5: Eliminar un To-Do")

const axios = require("axios");

axios.delete("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    console.log("TO-DO eliminado correctamente");
    console.log("Status:", response.status);
  })
  .catch(error => {
    console.error("Error al eliminar:", error);
  });