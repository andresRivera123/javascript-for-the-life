const form = document.getElementById("form");
/* Contenedores */
const clientesContenedor = document.getElementById("clientesContenedor");
const meserosContenedor = document.getElementById("meserosContenedor");
const cocinerosContenedor = document.getElementById("cocinerosContenedor");

/* Templates */
const templateCliente = document.getElementById("templateCliente").content;
const templateMesero = document.getElementById("templateMesero").content;
const templateCocinero = document.getElementById("templateCocinero").content;

class Persona {
  constructor(id, nombre, cargo) {
    this.id = id;
    this.nombre = nombre;
    this.cargo = cargo;
  }

  static pintarUI(personas, cargo) {
    const fragment = document.createDocumentFragment();
    if (cargo === "Cliente") {
      clientesContenedor.textContent = "";
      personas.forEach((cliente) => {
        fragment.appendChild(cliente.crearNuevoCliente());
      });
      clientesContenedor.appendChild(fragment);
    } else if (cargo === "Mesero") {
      meserosContenedor.textContent = "";
      personas.forEach((mesero) => {
        fragment.appendChild(mesero.crearNuevoMesero());
      });
      meserosContenedor.appendChild(fragment);
    } else if (cargo === "Cocinero") {
      cocinerosContenedor.textContent = "";
      personas.forEach((cocinero) => {
        fragment.appendChild(cocinero.crearNuevoCocinero());
      });
      cocinerosContenedor.appendChild(fragment);
    }
  }
}

class Cliente extends Persona {
  constructor(id, nombre, cargo, pedido = "vacio", totalPagar = 0) {
    super(id, nombre, cargo);
    this.pedido = pedido;
    this.totalPagar = totalPagar;
  }

  set setPedido(pedido) {
    this.pedido = pedido;
  }

  habilitarBotonPedido(bool) {
    const botonDisabled = document.querySelector(`[data-pedido="${this.id}"]`);
    if (bool) {
      botonDisabled.disabled = true;
    } else {
      botonDisabled.disabled = false;
    }
  }

  crearNuevoCliente() {
    const clone = templateCliente.cloneNode(true);
    clone.getElementById("closeCard").dataset.idcard = this.id;
    clone.getElementById("nombreCliente").textContent = this.nombre;
    clone.getElementById("cargoCliente").textContent = this.cargo;
    clone.getElementById("pedidoCliente").dataset.pedidocliente = this.id;
    clone.getElementById("pedidoCliente").value = this.pedido;
    clone.getElementById("enviarPedido").dataset.pedido = this.id;
    clone.getElementById("enviarPedido").disabled =
      this.pedido === "vacio" ? true : false;
    return clone;
  }
}

class Mesero extends Persona {
  #comanda = "";

  set setComanda(comanda) {
    this.#comanda = comanda;
  }

  crearNuevoMesero() {
    const clone = templateMesero.cloneNode(true);
    clone.getElementById("nombreMesero").textContent = this.nombre;
    clone.getElementById("cargoMesero").textContent = this.cargo;
    clone.getElementById("closeCard").dataset.idcard = this.id;
    return clone;
  }

  entregarComanda() {}
}

class Cocinero extends Persona {
  #cocinarPlato = "";
  crearNuevoCocinero() {
    const clone = templateCocinero.cloneNode(true);
    clone.getElementById("nombreCocinero").textContent = this.nombre;
    clone.getElementById("cargoCocinero").textContent = this.cargo;
    clone.getElementById("closeCard").dataset.idcard = this.id;
    return clone;
  }
}

document.addEventListener("click", (e) => {
  /* Eliminar cards por idcard */
  if (e.target.matches("#closeCard")) {
    const idcard = e.target.dataset.idcard;
    if (e.target.dataset.idcard.includes("-cli")) {
      clientesArray = clientesArray.filter(
        (item) => item.id !== e.target.dataset.idcard
      );
      Persona.pintarUI(clientesArray, "Cliente");
    }
    if (e.target.dataset.idcard.includes("-mes")) {
      meserosArray = meserosArray.filter(
        (item) => item.id !== e.target.dataset.idcard
      );
      Persona.pintarUI(meserosArray, "Mesero");
    }
    if (e.target.dataset.idcard.includes("-coc")) {
      cocinerosArray = cocinerosArray.filter(
        (item) => item.id !== e.target.dataset.idcard
      );
      Persona.pintarUI(cocinerosArray, "Cocinero");

    }
  }
  /* Agregar comida en Cliente y mandarla si existe un mesero */
});

document.addEventListener("change", (e) => {
  /* Agregar pedido en cliente y habilitar/deshabilitar boton pedido */
  if (e.target.id === "pedidoCliente") {
    for (let i in clientesArray) {
      if (clientesArray[i].id === e.target.dataset.pedidocliente) {
        const cliente = clientesArray[i];
        if (e.target.value === "vacio") {

          cliente.setPedido = "vacio";
          cliente.habilitarBotonPedido(true);
        } else {

          cliente.setPedido = e.target.value;
          cliente.habilitarBotonPedido(false);
        }
      }
    }
  }
});

let clientesArray = [];
let meserosArray = [];
let cocinerosArray = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const persona = new FormData(form);
  const [nombre, cargo] = [...persona.values()];

  if (cargo === "Cliente") {
    const cliente = new Cliente(Date.now() + "-cli", nombre, cargo);
    clientesArray.push(cliente);
    Persona.pintarUI(clientesArray, cargo);
  } else if (cargo === "Mesero") {
    const mesero = new Mesero(Date.now() + "-mes", nombre, cargo);
    meserosArray.push(mesero);
    Persona.pintarUI(meserosArray, cargo);
  } else if (cargo === "Cocinero") {
    const cocinero = new Cocinero(Date.now() + "-coc", nombre, cargo);
    cocinerosArray.push(cocinero);
    Persona.pintarUI(cocinerosArray, cargo);
  }
});
