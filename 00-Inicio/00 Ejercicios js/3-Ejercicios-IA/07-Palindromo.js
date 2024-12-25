/* 
Escribe un programa que:

 - Solicite una palabra al usuario.
 - Determine si la palabra es un palíndromo (es decir, si se lee igual de izquierda a derecha y de derecha a izquierda).
 - Ignora mayúsculas y minúsculas para la comparación.
*/

console.log("¿ES UN PALÍNDROMO?");

function limpiarYRevertir(palabra) {
  return palabra
    .toLowerCase()
    .split("")
    .filter((char) => char !== " ")
    .reverse()
    .join("");
}

function esPalindromo(palabra) {
  let palabraSimplificada = palabra
    .toLowerCase()
    .split("")
    .filter((char) => char !== " ")
    .join("");
  return palabraSimplificada === limpiarYRevertir(palabra);
}

let continuar = true;

while (continuar) {
  let palabra = prompt("Escribe una palabra (o escribe 'salir' para terminar): ");
  
  if (palabra.toLowerCase() === "salir") {
    continuar = false;
    console.log("Gracias por usar el programa. 👋");
    break;
  }
  
  if (esPalindromo(palabra)) {
    console.log(`"${palabra}" es un palíndromo ✅`);
  } else {
    console.log(`"${palabra}" NO es un palíndromo ❌`);
  }
}
