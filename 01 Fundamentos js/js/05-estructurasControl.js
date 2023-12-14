// CONDICIONALES: if/else, ?, switch
let escribir = prompt("Escribe 'Carito' :");
if (escribir === "Carito") {
  console.log("Correcto, escribiste igual");
} else {
  console.log("Incorrecto, las palabras no son iguales");
}

let numero = parseInt(prompt("Escribe un numero entre 1 y 10: "));
if (numero >= 1 || numero >= 10) {
  console.log("El número " + numero + " SÍ esta entre 1 y 10");
} else {
  console.log("El número " + numero + " NO esta entre 1 y 10");
}
// switch
console.log("--SWITCH--");
let opcionesUsuario = prompt(`Elija la opción:
1: libro
2: peliculas
3: Juegos`);
console.log("Elegiste la opción: " + opcionesUsuario);
switch (opcionesUsuario) {
  case "1":
    console.log("El libro es: El Principito");
    break;
  case "2":
    console.log("La pelicula es: Avatar");
    break;
  case "3":
    console.log("El juego es: World Of Warcraft");
    break;
  default:
    console.log("No existe esa opción");
    break;
}

//REPETITICAS/ITERATIVAS : while, do...while, for
console.log("--WHILE--");
let numeroWhile = 1;

while (numeroWhile <= 10) {
  console.log("Vuelta numeroWhile: " + numeroWhile);
  numeroWhile++;
}
