console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 3: Listar Álbumes de Fotos")

const axios = require("axios");

async function listarAlbumes() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums?userId=1");
    
    console.log("Álbumes del usuario 1:");
    console.log(response.data);

  } catch (error) {
    console.error("Error al obtener los álbumes:", error);
  }
}

listarAlbumes();