const productos = [
  {
    id: 1,
    nombre: "Chocolate 100g",
    marca: "Nestle",
    fechaExpiracion: "2024-05-02",
  },
  {
    id: 2,
    nombre: "Agua 1L",
    marca: "Tesalia",
    fechaExpiracion: "2024-12-18",
  },
  {
    id: 3,
    nombre: "Cachitos",
    marca: "Carli Snack",
    fechaExpiracion: "2024-02-21",
  },
  {
    id: 4,
    nombre: "Aceitunas 300 gr",
    marca: "Acitunazo",
    fechaExpiracion: "2024-12-12",
  },
  {
    id: 5,
    nombre: "Arroz 300 gr",
    marca: "Arroz Sol",
    fechaExpiracion: "2024-08-29",
  },
];

const encontrarProductoID = (id) => {
  return productos.find((item) => item.id === id);
};

const encontrarProductoFechaExpiracion = (fecha) => {
  return productos.find((item) => item.fechaExpiracion === fecha);
};

const encontrarProductoIntervaloFechas = (fechaA, fechaB) => {
  fechaA = new Date(fechaA);
  fechaB = new Date(fechaB);
  return productos.filter((item) => {
    const fechaExpiracion = new Date(item.fechaExpiracion);
    return fechaExpiracion >= fechaA && fechaExpiracion <= fechaB;
  });
};

console.log(productos);
console.log("\n\nEncontrar el producto con id: 3 ");
console.log(encontrarProductoID(3));
console.log("Encontrar el producto con fecha de expiración: 2024-12-12");
console.log(encontrarProductoFechaExpiracion("2024-12-12"));
console.log(
  "Encontrar el producto en el intervalo de fechas de 2024-01-01 a 2024-01-09"
);
console.log(encontrarProductoIntervaloFechas("2024-01-01", "2024-09-01"));
