// Push: Agrega un elemento al final de la lista
console.log("\n--ARRAY PUSH--");
const frutas = ["Uva", "Pera"];
console.log(frutas);
frutas.push("Manzana");
console.log(frutas);

// Unshift: Agrega un elemento al inicio de la lista
console.log("\n--ARRAY UNSHIFT--");
frutas.unshift("Mango");
console.log(frutas);

// Pop: Elimina el ultimo elemento de una lista y lo devuelve.
console.log("\n--ARRAY POP--");
const frutaElimina = frutas.pop();
console.log("La fruta eliminada fue: " + frutaElimina);
console.log(frutas);

// Shift: Elimina el primer elemento de una lista y lo devuelve
console.log("\n--ARRAY SHIFT--");
const frutaEliminada2 = frutas.shift();
console.log("La fruta eliminada fue: " + frutaEliminada2);
console.log(frutas);

