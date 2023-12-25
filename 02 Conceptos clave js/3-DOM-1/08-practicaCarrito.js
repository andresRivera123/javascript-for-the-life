const carritoContainer = document.getElementById("carrito-container")
const carritoTemplate = document.getElementById("carritoTemplate")
const btnsAgregar = document.querySelectorAll("#btnAgregar")
const fragment = document.createDocumentFragment()


//Agregaros producto en el objeto carrito
const carrito = {}
const agregarProducto = (e) => {
  const producto = {
    nombre: e.target.dataset.fruta,
    cantidad: 1
  }

  if(carrito.hasOwnProperty(producto.nombre)){
    producto.cantidad = carrito[producto.nombre].cantidad +1
  }

  carrito[producto.nombre] = producto
  imprimirCarrito()
}

//Imprimirmos en web
const imprimirCarrito = () => {
  carritoContainer.textContent = "";
  console.log(carrito)
  Object.values(carrito).forEach(itemCarrito => {
    const clone = carritoTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector(".nombre-producto").textContent = itemCarrito.nombre
    clone.querySelector(".cantidad-producto").textContent = itemCarrito.cantidad
    fragment.appendChild(clone)
  })
  carritoContainer.appendChild(fragment)
}

//Capturamos el evento de los botones
btnsAgregar.forEach(btn => {
  btn.addEventListener("click", agregarProducto)
})

