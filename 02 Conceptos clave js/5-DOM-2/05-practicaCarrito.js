const carrito = document.getElementById("carrito");
const footer = document.getElementById("footer");
const template = document.getElementById("template");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

let carritoObjeto = [];

const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
  if (indice === -1) {
    carritoObjeto.push(producto);
  } else {
    carritoObjeto[indice].cantidad++;
  }
  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";
  carritoObjeto.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    clone.querySelector("div .lead span").textContent =
      item.precio * item.cantidad;
    clone.querySelector(".btn-danger").dataset.id = item.id;
    clone.querySelector(".btn-success").dataset.id = item.id;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
  pintarFooter();
};

const pintarFooter = () => {
  footer.textContent = "";
  if(carritoObjeto.length > 0){
    const total = carritoObjeto.reduce(
        (total, producto) => total + producto.precio * producto.cantidad,
        0
      );
      const clone = templateFooter.content.cloneNode(true);
      clone.querySelector("span").textContent = total;
      footer.appendChild(clone);
  }

};

document.addEventListener("click", (e) => {
  if (e.target.matches(".card .btn-outline-primary")) {
    agregarCarrito(e);
  }
  if (e.target.matches(".list-group-item .btn-success")) {
    btnAumentar(e);
  }

  if (e.target.matches(".list-group-item .btn-danger")) {
    btnDiminuir(e);
  }
});

const btnAumentar = (e) => {
  carritoObjeto = carritoObjeto.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  pintarCarrito();
};

const btnDiminuir = (e) => {
  carritoObjeto = carritoObjeto.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) {
          return;
        }
        return item;
      }
    } else {
      return item;
    }
  });
  pintarCarrito();
};