console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 4: Mostrar Información de Usuario")

async function obtenerUsuario() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
    
    const data = await response.json(); // convertir a JSON

    console.log("Usuario:");
    console.log(data);

  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerUsuario();