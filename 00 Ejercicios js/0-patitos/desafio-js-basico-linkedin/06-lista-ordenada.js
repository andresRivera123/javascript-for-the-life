console.log("\n\n   --SOLUCIÓN 1--");
const arreglo = [];
//Cada 3, la  segundos Genera un número aleatorio entre 0 y 100
setInterval(agregarElemento, 3000, () => Math.floor(Math.random() * 100));

function agregarElemento(numeroAleatorio) {
  const prioridad = numeroAleatorio();
  arreglo.push(prioridad);
  arreglo.sort((a, b) => a - b); //sort: Se utiliza para ordenar elementos, la comparación asegura que se númerica y lo ordena en orden ascendente.
  console.log(arreglo);
}
