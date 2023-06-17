console.log("Hola productos");

const productos = [
  {
    id: 1,
    nombre: "Peines de barberos",
    precio: "$ 800",
    img: "../IMG/peinesParaBarberos.jfif",
  },
  {
    id: 2,
    nombre: "Cepillos para el cabello",
    precio: "$ 2790",
    img: "../IMG/cepilloParaCabello.jpg",
  },
  {
    id: 3,
    nombre: "Cepillos para la barba",
    precio: "$ 780",
    img: "../IMG/cepilloParaBarba.jpg",
  },
  {
    id: 4,
    nombre: "Cepillos para el cuello",
    precio: "$ 980",
    img: "../IMG/cepilloParaCuello.jfif",
  },
  {
    id: 5,
    nombre: "Tijeras de peluqueria",
    precio: "$ 3350",
    img: "../IMG/tijerasBarberia.jpg",
  },
  {
    id: 6,
    nombre: "Máquina cortapelos KEMEI",
    precio: "$ 25000",
    img: "../IMG/máquinaCortapelosKemei.jfif",
  },
  {
    id: 7,
    nombre: "Navajas de afeitar y cuchillas",
    precio: "$ 1500",
    img: "../IMG/Navajas de afeitar y cuchillas.jfif",
  },
  {
    id: 8,
    nombre: "Capas para Peluqueria",
    precio: "$ 2350",
    img: "../IMG/Capas para peluqueria.jfif",
  },
  {
    id: 9,
    nombre: "Papel rollo para el cuello JESSAMY",
    precio: "$ 1200",
    img: "../IMG/Papel rollo para el cuello JESSAMY.jfif",
  },
  {
    id: 10,
    nombre: "Secador BELPROF",
    precio: "$ 19900",
    img: "../IMG/Secador BELPROF.png",
  },
];

console.log(productos);

let contenedorProductos = document.getElementById("contenedorProductos");

console.log(contenedorProductos);

productos.forEach((producto) => {
  console.log(producto.id);
  console.log(producto.nombre);

  let contenedor = document.createElement("div");

  contenedor.innerHTML = `   <div class="col">
    <div class="card">
        <img src="${producto.img}" class="card-img-top" alt="../IMG/the red's.png">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <h6>${producto.precio}</h6>
            <p class="card-text">Descripción del producto.</p>
                <div class="d-grid gap-2">
  <button id="guardarTexto"class="btn btn-primary" type="button">Agg al carrito</button>
</div>
        </div>
    </div>
</div>`;
  contenedorProductos.append(contenedor);
});

// CREAR UN MENSAJE PARA NOSOTROS

document.addEventListener("DOMContentLoaded", function () {
  var saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", guardarMensaje);

  mostrarMensajesGuardados();
});

function guardarMensaje() {
  var mensaje = document.getElementById("messageInput").value;

  var mensajesGuardados = obtenerMensajesGuardados();

  mensajesGuardados.push(mensaje);

  localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados));

  mostrarMensajesGuardados();

  console.log(mensaje);
}

function obtenerMensajesGuardados() {
  var mensajes = localStorage.getItem("mensajes");
  if (mensajes) {
    return JSON.parse(mensajes);
  } else {
    return [];
  }
}

function mostrarMensajesGuardados() {
  var messageList = document.getElementById("messageList");
  messageList.innerHTML = "";

  var mensajesGuardados = obtenerMensajesGuardados();

  mensajesGuardados.forEach(function (mensaje) {
    var p = document.createElement("p");
    p.textContent = mensaje;
    messageList.appendChild(p);
  });

  console.log("Mensajes guardados:");
  console.log(mensajesGuardados);
}

/* Objeto más vendido */

var masVendidoJSON = {
  nombre: "Navajas de afeitar y cuchillas",
  precio: "$ 1500",
  vendidos: "Vendidas 300 unidades",
  stock: 200,
};

var jsonString = JSON.stringify(masVendidoJSON);

localStorage.setItem("masVendidoJSON", jsonString);

var storedJsonString = localStorage.getItem("masVendidoJSON");

var storedmasVendidoJSON = JSON.parse(storedJsonString);
console.log("Producto más vendido:");
console.log(storedmasVendidoJSON.nombre);
console.log(storedmasVendidoJSON.precio);
console.log(storedmasVendidoJSON.vendidos);
console.log(storedmasVendidoJSON.stock);

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
/* 
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
 */
$("#btn-modo").click(function () {
  Swal.fire("MODO 🌙✨!", "Cambiaste correctamente el modo!", "success");
});
$("#saveButton").click(function () {
  Swal.fire(
    "Gracias por tu mensaje!",
    "Se envió correctamente tu mensaje!",
    "success"
  );
});
