console.log ("TP1")
console.log ("-".repeat(100))
//Datos simulados
const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];
console.log ("Parte 1: Acceso a elementos y recorrido de arrays")
console.log ("1)")
console.log (productos[1].nombre)
console.log ("2)")
for (let i = 0; i < productos.length; i++) {
    //uso template literals para mostrar la información de cada producto
    console.log (`ID: ${productos[i].id}, Nombre: ${productos[i].nombre}, Precio: ${productos[i].precio}`)
}
console.log ("3)")
productos.forEach(producto => {
    console.log (`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`)
})
console.log ("Parte 2: Métodos de transformación y filtrado")
console.log ("4)")
const nombres = productos.map(producto => producto.nombre);
console.log (nombres)
console.log ("5)")
const ropa = productos.filter(producto => producto.categoria === "Ropa");
console.log (ropa)
console.log ("6)")
const mayor3000 = productos.filter(producto => producto.precio > 3000);
console.log (mayor3000)
console.log ("7)")
console.log(productos.find(producto => producto.nombre === "Gorra"))
console.log ("Parte 3: Métodos de validación")
console.log ("8)")
console.log ( "Prodcuto + 10k? : " + productos.some(producto => producto.precio > 10000))
console.log ("9)")
console.log ( "Todos valen + 1k? : " + productos.every(producto => producto.precio > 1000))
console.log ("10)")
console.log ( "Array punto 4 incluye Campera? : " + nombres.includes("Campera"))
console.log ("Parte 4:")
console.log ("11)")
const ordenados = productos.sort((a, b) => a.precio - b.precio);
console.log (ordenados)
console.log ("12)")
const mensajePersonalizado = productos.map(producto => `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`);
console.log (mensajePersonalizado);
