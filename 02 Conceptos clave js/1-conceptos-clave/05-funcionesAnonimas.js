// FUNCIÓN DECLARATIVA:
console.log("\n--FUNCIONES DECLARATIVAS--");
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(numeroAleatorio(10, 21));

// FUNCIÓN EXPRESADA: Lo que se retorna se va a una variable, no le afecta el hoisting
console.log("\n--FUNCIONES EXPRESADA--");
const numeroAzar = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(numeroAzar(100, 201));

// Función de flecha:
console.log("\n--FUNCIÓN FLECHA--");
const num = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(num(1, 11));

//Función corta
const numCorto = (min, max) => Math.floor(Math.random() * (max - min)) + min;
console.log(numCorto(1, 11));

//Un parametro
const numUnParametro = (max) => Math.floor(Math.random() * max);
console.log(numUnParametro(5));

//Parametro pordefecto
const numDefecto = (min, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;
console.log(numDefecto(1));

const numDefecto2 = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;
console.log(numDefecto2(null, 10));

// Arrow & forEach: Otra alternativa para recorrer la lista
console.log("\n--ARROW & FOREACH--");
const frutas = ["Pera", "Manzana", "Mango"]
frutas.forEach((fruta, index) => console.log(`Fruta número ${index+1}: ${fruta}`))

//IMPORTANTE!!: Función flecha no tiene enlaces this o super y no se debe usar como método.
