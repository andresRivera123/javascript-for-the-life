/* 
Números pares e impares
 - Solicita un número al usuario.
 - Muestra todos los números pares e impares desde 1 hasta ese número
*/

console.log("💔 LLEGANDO DE PAR O IMPAR");

let validar = false;
while (!validar) {
  let numero = parseInt(prompt("Ingresa un número:"));
  if (isNaN(numero) || numero < 1) {
    console.log("Ingresa un número mayor a 0");
    continue;
  }

  let primerNumero = numero % 2 === 0 ? 0 : 1;

  for (let i = primerNumero; i <= numero; i += 2) {
    console.log(i);
  }

  break;
}
