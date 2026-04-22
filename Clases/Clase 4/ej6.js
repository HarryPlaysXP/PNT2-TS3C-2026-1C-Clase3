console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 6: Mostrar Comentarios de un Post")

async function obtenerComentarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=2");

    const data = await response.json();

    console.log("Comentarios del post 2:");
    console.log(data);

  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerComentarios();