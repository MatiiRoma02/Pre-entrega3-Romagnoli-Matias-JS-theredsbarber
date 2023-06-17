let ventaHerramientas = [
  { id: 1, nombre: "Peines de barberos", precio: 800 },
  { id: 2, nombre: "Cepillos para el cabello", precio: 2790 },
  { id: 3, nombre: "Cepillos para la barba", precio: 780 },
  { id: 4, nombre: "Cepillos para el cuello", precio: 980 },
  { id: 5, nombre: "Tijeras de peluqueria", precio: 3350 },
  { id: 6, nombre: "Máquina cortapelos KEMEI", precio: 25000 },
  { id: 7, nombre: "Navajas de afeitar y cuchillas", precio: 1500 },
  { id: 8, nombre: "Capas para Peluqueria", precio: 2350 },
  { id: 9, nombre: "Papel rollo para el cuello JESSAMY", precio: 1200 },
  { id: 10, nombre: "Secador BELPROF", precio: 19900 },
];

for (let i = 0; i < ventaHerramientas.length; i++) {
  console.log(ventaHerramientas[i].nombre);
  console.log(ventaHerramientas[i].precio);
}

console.log("-----Orden Superior-----");
ventaHerramientas.forEach((herramientas) => console.log(herramientas.id));

console.log("-----Mayores a $1500-----");
let mayoresA1500 = ventaHerramientas.filter(
  (herramientas) => herramientas.precio > 1500
);
console.log(mayoresA1500);

console.log("-----Menores a $1500-----");
let menoresA1500 = ventaHerramientas.filter(
  (herramientas) => herramientas.precio < 1500
);
console.log(menoresA1500);

let productoBuscado = prompt("Ingrese el nombre de un producto:");

if (productoBuscado !== null) {
  let productoEncontrado = ventaHerramientas.find(
    (herramienta) =>
      herramienta.nombre.toLowerCase() === productoBuscado.toLowerCase()
  );

  if (productoEncontrado) {
    alert(
      `Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nID: ${productoEncontrado.id}`
    );
  } else {
    alert("El producto no fue encontrado.");
  }
}
