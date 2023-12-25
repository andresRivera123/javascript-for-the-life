const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const btnsFrutas = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

const carritoObjeto = {};

const agregarCarrito = (e) => {
  console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  //Si existe la propiedad id entonces
  if (carritoObjeto.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }

  //Agregar elemento al objeto carrito
  carritoObjeto[producto.titulo] = producto;
  //Pintamos 
  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";
  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnsFrutas.forEach((btn) => {
  btn.addEventListener("click", agregarCarrito);
});
