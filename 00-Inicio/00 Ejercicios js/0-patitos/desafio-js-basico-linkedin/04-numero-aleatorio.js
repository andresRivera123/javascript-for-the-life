/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

console.log("   --SOLUCIÓN 1--");
console.log("   1) Obtener número aleatorio aunque los valores sean decimales");
const numeroAleatorio = (min, max) => {
  console.log("Antes de los métodos: ");
  console.log("min: " + min + "| max: " + max);
  min = Math.ceil(min); //ceil: redondea hacia arriba
  max = Math.floor(max); //floor: redondea hacia abajo
  console.log("Después de los métodos: ");
  console.log("min: " + min + "| max: " + max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log("Numero aleatorio: " + numeroAleatorio(5.3, 8.7) + "\n\n");
console.log("Numero aleatorio: " + numeroAleatorio(70, 80) + "\n\n");

console.log("\n\n   --SOLUCIÓN 2--");
console.log("   2) Obtener número aleatorio sin decimales");

const numeroAleatorioSimple = (numeroA, numeroB) => {
    console.log("numeroA: " + numeroA + "| numeroB: " + numeroB);

    return Math.floor(Math.random() * (numeroA - numeroB) + numeroB)
} 

console.log("Numero aleatorio: " + numeroAleatorioSimple(1, 8) + "\n\n");
