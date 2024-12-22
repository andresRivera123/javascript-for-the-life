/* 
4. Tablas de Multiplicar
Escribe un programa que:

 - Solicite al usuario un número.
 - Genere y muestre la tabla de multiplicar  
 - correspondiente (del 1 al 10).
*/

console.log("✖️ TABLA DE MULTIPLICAR ✖️");

function multiplicar(numeroTabla) {
  let tabla = [];
  for (i = 1; i <= 10; i++) {
    tabla.push(numeroTabla * i);
  }
  return tabla;
}

while (true) {
  let numeroTabla = parseInt(
    prompt("Ingresa un número(1-10) para ver la tabla")
  );
  if (isNaN(numeroTabla) || numeroTabla < 1 || numeroTabla > 10) {
    console.log("Ingresa un número del 1 al 10");
    continue;
  }

  let tabla = multiplicar(numeroTabla);
  tabla.forEach((operacion, i) => {
    console.log(`${numeroTabla} * ${i+1} = ${operacion}`);
  });
  break;
}
