//FIND: Devuelve un OBJETO con el valor del primer elemento del array que cumple la función de prueba proporcionada.
console.log("\n--FILTER--");
console.log("\nEncontrar a Andrea y Altamirano en el array");
const usuarios = [
  {
    id: 1,
    nombre: "Pepe",
    apellido: "Mujica",
    edad: 31,
  },
  {
    id: 2,
    nombre: "Andrea",
    apellido: "Valle",
    edad: 27,
  },
  {
    id: 3,
    nombre: "Federico",
    apellido: "Altamirano",
    edad: 47,
  },
];

console.log(usuarios.find((usuario) => usuario.nombre === "Andrea"))
console.log(usuarios.find((usuario) => usuario.apellido === "Altamirano"))

//Aplicar destructuring
console.log("\nObtener el valor Valle del arreglo de usuarios");
const {apellido} = usuarios.find(usuario => usuario.apellido === "Valle")
console.log(apellido)

//SOME: Devuelve un bool, comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
console.log("\n--SOME--");
console.log("\n¿Existe algun apellido Valle?");
const existeApellidoValle = usuarios.some(usuario => usuario.apellido === "Valle")
console.log(existeApellidoValle)

//FINDINDEX: Devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
console.log("\n--FIND INDEX--");
console.log("\nEncontrar el indice de Federico");
const indice = usuarios.findIndex((usuario) => usuario.nombre === "Federico")
console.log(indice)
console.log("\nObtener el objeto de Pepe con el indice");
const indicePepe = usuarios.findIndex((usuario) => usuario.nombre === "Pepe")
console.log(usuarios[indicePepe])