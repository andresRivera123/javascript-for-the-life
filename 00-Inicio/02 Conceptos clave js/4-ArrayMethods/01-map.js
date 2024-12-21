//MAP: iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento. Esto lo hace sin mutar el arreglo original.
console.log("\n--MAP--");
console.log("\nRecorrer el map");
const frutas = ["platano", "manzana", "fresa", "uva"];
const nuevoArray = frutas.map((item) => {
  return item;
});
console.log(nuevoArray);

console.log("\nRetornar solo los nombres en un nuevo array");
const nombres = [
  {
    nombre: "Pepe",
    apellido: "Mujica",
  },
  {
    nombre: "Andrea",
    apellido: "Valle",
  },
  {
    nombre: "Federico",
    apellido: "Altamirano",
  },
];
const soloNombres = nombres.map((item) => item.nombre);
console.log(soloNombres);

console.log("\nRetornar a un nuevo array multiplicado por 2");
const numeros = [1, 2, 3, 4, 5];
const numeroPorDos = numeros.map((numero) => numero * 2);
console.log(numeroPorDos);

console.log("\nRetornar el cuadrado de todos los elementos de un Array");
const listaNumeros = [3, 6, 9, 12, 5];

const numerosCuadrados = listaNumeros.map((numero) => numero * numero);
console.log(listaNumeros);
console.log(numerosCuadrados);
