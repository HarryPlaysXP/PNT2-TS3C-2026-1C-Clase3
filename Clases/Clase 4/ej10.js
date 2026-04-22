console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 10: Obtener y Mostrar Artículos")

function obtenerArticulos() {
  return new Promise((resolve, reject) => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {

        console.log("Artículos:");
        data.forEach(post => {
          console.log(`${post.id} - ${post.title}`);
        });

        resolve(data); // 👉 acá devolvés los datos

      })
      .catch(error => {
        reject(error); // 👉 si falla
      });

  });
}

obtenerArticulos();