// FUNCTION: Conjunto de instrucciones que realiza una tarea
// Puede tener nombre y parametro
console.log("--FUNCTION--");
function saludar(nombreUsuario) {
  return console.log("Bienvenido!, " + nombreUsuario);
}
saludar("Andy");
console.log("Sumar números");
function sumarNumeros(n1, n2){
  return n1+ n2
}

console.log(sumarNumeros(5, 6))


// HOISTING(ELEVACIÓN): Hace un barrido
// Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
// https://developer.mozilla.org/es/docs/Glossary/Hoisting
// Proceso donde js mueve  declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.
// solamente sucede cuando son declaradas con var
console.log("\n\n\n--HOISTING---")
var x = 5;

(function () {
  console.log("x:", x); // no obtenemos '5' sino 'undefined'
  var x = 10;
  console.log("x:", x); // 10
})();

console.log("--Otro ejemplo---")
console.log(nombre) // undefined
var nombre = "Andres" 