/* DOM */
const carrito = document.querySelector(".carrito");
const templateCarrito = document.getElementById("templateCarrito");
const fragment = document.createDocumentFragment();
const totalPagar = document.querySelector("footer");
const templateTotalPagar = document.getElementById("templateTotalPagar");

let carritoInstrumentos = [];
const agregarInstrumento = (e) => {
  const producto = {
    id: e.target.dataset.instrumento,
    nombre: e.target.dataset.instrumento,
    cantidad: 1,
    precioUnitario: parseInt(e.target.dataset.precio),
  };
  const indice = carritoInstrumentos.findIndex(
    (item) => item.id === e.target.dataset.instrumento
  );
  if (indice === -1) {
    carritoInstrumentos.push(producto);
  } else {
    carritoInstrumentos[indice].cantidad++;
  }
  imprimirCarrito();
};

const imprimirCarrito = () => {
  carrito.textContent = "";
  carritoInstrumentos.forEach((producto) => {
    const clone = templateCarrito.content.firstElementChild.cloneNode(true);
    clone.querySelector(".carrito__producto-cantidad").textContent =
      producto.cantidad;
    clone.querySelector(".carrito__producto-nombre").textContent =
      producto.nombre;
    clone.querySelector(".carrito__producto-total").textContent =
      producto.cantidad * producto.precioUnitario;
    clone.querySelector(".carrito__botones .botones__aumentar").dataset.id =
      producto.id;
    clone.querySelector(".carrito__botones .botones__disminuir").dataset.id =
      producto.id;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
  imprimirTotal();
};

const imprimirTotal = () => {
  totalPagar.textContent = "";
  if (carritoInstrumentos.length > 0) {
    const total = carritoInstrumentos.reduce(
      (total, precioPorProducto) =>
        total + precioPorProducto.cantidad * precioPorProducto.precioUnitario,
      0
    );
    const clone = templateTotalPagar.content.cloneNode(true);
    clone.querySelector(".totalPagar-cantidad").textContent = total;
    totalPagar.appendChild(clone);
  }
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".tienda__instrumento .instrumento__boton")) {
    agregarInstrumento(e);
  }
  if (e.target.matches(".carrito__botones .botones__aumentar")) {
    aumentarProducto(e);
  }

  if (e.target.matches(".carrito__botones .botones__disminuir")) {
    disminuirProducto(e);
  }
});

const aumentarProducto = (e) => {
  carritoInstrumentos.map((producto) => {
    if (producto.id === e.target.dataset.id) {
      producto.cantidad++;
    }
    return producto;
  });
  imprimirCarrito();
};

const disminuirProducto = (e) => {
  carritoInstrumentos = carritoInstrumentos.filter((producto) => {
    if (producto.id === e.target.dataset.id) {
      if (producto.cantidad > 0) {
        producto.cantidad--;
        if (producto.cantidad === 0) {
          return;
        }
        return producto;
      }
    } else {
      return producto;
    }
  });
  imprimirCarrito();
};
