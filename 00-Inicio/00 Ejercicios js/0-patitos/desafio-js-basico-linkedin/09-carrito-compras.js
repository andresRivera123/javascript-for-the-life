//1. Crear una clase producto
class Producto {
  constructor(nombre, fechaVencimiento, precioCompra) {
    this.nombre = nombre;
    this.fechaVencimiento = new Date(fechaVencimiento);
    this.precioCompra = precioCompra;
  }
}

//2. Función carritoCompra que valida si la fecha de vencimiento del producto es menor que hoy, de ser el caso no la  toma en cuenta en la suma final del precio
const carritoCompra = (listaProductos) => {
  const hoy = new Date();
  const productosValidos = listaProductos.filter(
    (producto) => producto.fechaVencimiento > hoy
  );
  return productosValidos.reduce(
    (valorInicial, producto) => valorInicial + producto.precioCompra,
    0
  );
};

//3. Crear una variable que contenga la suma final con nuestros productos.
const resultado = carritoCompra([
  new Producto("Agua 1l", "2025-09-24", 0.8),
  new Producto("Nestea 750ml", "2024-07-11", 1.25),
  new Producto("Nesquick 500gr", "2023-12-12", 2),
]);

console.log(resultado);
