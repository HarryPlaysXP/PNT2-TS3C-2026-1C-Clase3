console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 7: Eliminar una Foto")

async function eliminarFoto() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos/1", {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Error al eliminar la foto");
    }

    console.log("Foto eliminada correctamente");
    console.log("Status:", response.status);

  } catch (error) {
    console.error("Error:", error);
  }
}

eliminarFoto();