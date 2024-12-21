//REDUCE: El valor de vuelto de la función reductora(reduce) se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz, u en última instancia, se convierte en el valor final, único y resultante
console.log("\n--REDUCE--");
console.log("\nSumar todos los numeros del array");
const numeros1 = [1, 2, 3, 4, 5];
console.log(numeros1);
console.log("La suma del array es: " + numeros1.reduce((acumulador, valorActual) => acumulador + valorActual, 0));

console.log("\n#1 Aplanar matrices anidadas con concat");
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

console.log(arrayNumeros.reduce((acc, current) => acc.concat(current)))

console.log("\n#2 Aplanar matrices anidadas");
const arrayPlano = [].concat(...arrayNumeros)
console.log(arrayPlano)

console.log("\n#2 Aplanar matrices anidadas con flat");
//FLAT: Devuelve una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
const elementos = [1, 2, [3, 4], 5, [6, 7, 8]]
console.log(elementos)
console.log(elementos.flat())
const elementos2 = [1, 2, [3, [4, 5]]]
console.log(elementos2)
console.log(elementos2.flat(2))