console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 9: Obtener Lista de Tareas")

async function obtenerTareasPendientes() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=3");

    const data = await response.json();

    // Filtrar solo tareas pendientes
    const pendientes = data.filter(todo => !todo.completed);

    console.log("Tareas pendientes del usuario 3:");

    pendientes.forEach(todo => {
      console.log(`ID: ${todo.id} - ${todo.title}`);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerTareasPendientes();