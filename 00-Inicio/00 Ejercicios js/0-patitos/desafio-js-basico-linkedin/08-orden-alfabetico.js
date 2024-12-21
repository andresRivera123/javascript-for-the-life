const nombres = [
  "Sofia Villamarin",
  "Carlos Rivera",
  "José Heredia",
  "Federico Muñoz",
  "Armando Valle",
  "Teresa Galarza",
  "Miguel Haro",
  "Veronica Abad",
  "Vanesa Balarezo",
  "Xavier Estrada",
  "José Puertas",
  "José Lara",
];

const ordenados = nombres.sort((a, b) => {
  const nombreA = a.split(" ")[0];
  const nombreB = b.split(" ")[0];
  return nombreA < nombreB ? -1 : nombreA > nombreB ? 1 : 0;
});
console.log("Ordenados con sort y función de comparación ✅")
console.log(ordenados);
