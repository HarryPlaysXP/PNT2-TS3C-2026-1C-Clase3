console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 8: Mostrar Datos del Clima")

const axios = require("axios");

async function obtenerClima() {
  try {
    const apiKey = "aaadef671325c1432d39ec3788edb732"; // Reemplaza con tu propia API key de OpenWeatherMap

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=${apiKey}&units=metric`
    );

    const data = response.data;

    console.log("Clima en Buenos Aires:");
    console.log(`Temperatura: ${data.main.temp}°C`);
    console.log(`Clima: ${data.weather[0].description}`);
    console.log(`Humedad: ${data.main.humidity}%`);

  } catch (error) {
    console.error("Error al obtener el clima:", error.message);
  }
}

obtenerClima();