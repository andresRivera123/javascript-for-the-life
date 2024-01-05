const casas = [
  {
    id: 1,
    numeroHabitaciones: 3,
    tamanioMetrosCuadrados: 300,
    localidad: "San Miguel de Salcedo - Ecuador",
    precioVenta: 100000,
  },
  {
    id: 2,
    numeroHabitaciones: 2,
    tamanioMetrosCuadrados: 115,
    localidad: "Latacunga - Ecuador",
    precioVenta: 92000,
  },
  {
    id: 3,
    numeroHabitaciones: 1,
    tamanioMetrosCuadrados: 50,
    localidad: "Latacunga - Ecuador",
    precioVenta: 71000,
  },
  {
    id: 4,
    numeroHabitaciones: 1,
    tamanioMetrosCuadrados: 60,
    localidad: "San Miguel de Salcedo - Ecuador",
    precioVenta: 60000,
  },
  {
    id: 5,
    numeroHabitaciones: 1,
    tamanioMetrosCuadrados: 50,
    localidad: "San Miguel de Salcedo - Ecuador",
    precioVenta: 65000,
  },
  {
    id: 6,
    numeroHabitaciones: 5,
    tamanioMetrosCuadrados: 200,
    localidad: "Quito - Ecuador",
    precioVenta: 120000,
  },
  {
    id: 7,
    numeroHabitaciones: 1,
    tamanioMetrosCuadrados: 75,
    localidad: "Quito - Ecuador",
    precioVenta: 50000,
  },
];

console.log("Casas disponibles: ");
console.log(casas);

console.log("  \n\n\n   --SOLUCIÓN 1--");
const casasPromedio = {};
const preciosCasasMismaLocalidad = (localidad) => {
  const casasFiltradas = casas.filter((casa) => casa.localidad === localidad);
  const numeroCasasFiltradas = casasFiltradas.length;
  return (
    casasFiltradas.reduce(
      (totalPagar, precioDeCadaCasa) =>
        totalPagar + precioDeCadaCasa.precioVenta,
      0
    ) / numeroCasasFiltradas
  ).toFixed(2);
};

console.log(
  "Precio promedio casas en San Miguel de Salcedo - Ecuador: " +
    preciosCasasMismaLocalidad("San Miguel de Salcedo - Ecuador") +
    "$"
);
console.log(
  "Precio promedio casas en Latacunga - Ecuador: " +
    preciosCasasMismaLocalidad("Latacunga - Ecuador") +
    "$"
);
console.log(
  "Precio promedio casas en Quito - Ecuador: " +
    preciosCasasMismaLocalidad("Quito - Ecuador") +
    "$"
);

console.log("  \n\n\n   --SOLUCIÓN 2--");
const acumulado = {};
for (const casa of casas) {
  if (!acumulado[casa.localidad]) {
    acumulado[casa.localidad] = { precioAcumulado: 0, numeroCasas: 0 };
  }
  acumulado[casa.localidad].precioAcumulado += casa.precioVenta;
  acumulado[casa.localidad].numeroCasas += 1;
}
console.log(acumulado);
const localidades = Object.keys(acumulado);
console.log(localidades);
for (const localidad of localidades) {
  console.log(
    localidad +
      ": " +
      Math.floor(
        acumulado[localidad].precioAcumulado / acumulado[localidad].numeroCasas
      ).toFixed(2) +
      "$"
  );
}

console.log("  \n\n\n   --SOLUCIÓN 3--");
const nuevoObjetoCasas = {};
const crearNuevoObjeto = () => {
  for (const casa of casas) {
    if (!nuevoObjetoCasas[casa.localidad]) {
      nuevoObjetoCasas[casa.localidad] = {
        precioAcumulado: 0,
        numeroCasas: 0,
      };
    }
    nuevoObjetoCasas[casa.localidad].precioAcumulado += casa.precioVenta;
    nuevoObjetoCasas[casa.localidad].numeroCasas += 1;
  }
};
crearNuevoObjeto();
console.log(nuevoObjetoCasas);
const arrayLocalidades = Object.keys(nuevoObjetoCasas);
console.log(arrayLocalidades);
for (const localidad of localidades) {
  nuevoObjetoCasas[localidad].promedio =
    nuevoObjetoCasas[localidad].precioAcumulado /
    nuevoObjetoCasas[localidad].numeroCasas;
}
console.log(nuevoObjetoCasas);
