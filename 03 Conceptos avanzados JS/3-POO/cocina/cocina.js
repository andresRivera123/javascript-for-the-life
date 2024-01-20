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
  constructor(nombre, cargo) {
    this.nombre = nombre;
    this.cargo = cargo;
  }

  static pintarUI(personas, cargo) {
    const fragment = document.createDocumentFragment();
    if (cargo === "Cliente") {
      personas.forEach((cliente) => {
        fragment.appendChild(cliente.crearNuevoCliente());
      });
      clientesContenedor.appendChild(fragment);
    } else if (cargo === "Mesero") {
      personas.forEach((mesero) => {
        fragment.appendChild(mesero.crearNuevoMesero());
      });
      meserosContenedor.appendChild(fragment);
    } else if (cargo === "Cocinero") {
      personas.forEach((cocinero) => {
        fragment.appendChild(cocinero.crearNuevoCocinero());
      });
      cocinerosContenedor.appendChild(fragment);
    }
  }
}

class Cliente extends Persona {
  constructor(nombre, cargo, pedido, totalPagar = 0) {
    super(nombre, cargo);
    this.pedido = pedido;
    this.totalPagar = totalPagar;
  }

  crearNuevoCliente() {
    const clone = templateCliente.cloneNode(true);
    clone.getElementById("nombreCliente").textContent = this.nombre;
    clone.getElementById("cargoCliente").textContent = this.cargo;
    return clone;
  }

  comer() {
    console.log("Procede a comer");
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
    return clone;
  }
}

const clientesArray = [];
const meserosArray = [];
const cocinerosArray = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const persona = new FormData(form);
  const [nombre, cargo] = [...persona.values()];
  if (cargo === "Cliente") {
    const cliente = new Cliente(nombre, cargo);
    clientesArray.push(cliente);
    Persona.pintarUI(clientesArray, cargo);
  } else if (cargo === "Mesero") {
    const mesero = new Mesero(nombre, cargo);
    meserosArray.push(mesero);
    Persona.pintarUI(meserosArray, cargo);
  } else if (cargo === "Cocinero") {
    const cocinero = new Cocinero(nombre, cargo);
    cocinerosArray.push(cocinero);
    Persona.pintarUI(cocinerosArray, cargo);

  }
});
