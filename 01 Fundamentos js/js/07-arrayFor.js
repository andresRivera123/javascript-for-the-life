// ARRAY: Objetos similares a una lista proporciona efectuar operaciones de recorrido y mutación.
let colores = ["Amarillo", "Azul", "Rojo", 10, false, 7.65];
// console.log(colores);
// console.log(colores[2]);
// console.log(colores.length);

// FOR
console.log("--FOR--")
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

// FOR OF: Para objetos iterables(Array, string)
console.log("--FOR OF--")
let frutas = ["Pera", "Manzana", "Uva", "Platano"]
for (let fruta of frutas){
    console.log(fruta)
}

// FOR IN: Las posiciones/índice
console.log("--FOR IN--")
for (let fruta in frutas){
    console.log(fruta)
}