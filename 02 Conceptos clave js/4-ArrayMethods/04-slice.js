//SLICE: Devuelve una copia de una parte del array dentro de un nuevo array empezando por el inicio hasta el fin(fin no incluido). El array original no se modificará
console.log("\n--SLICE--");
console.log("\nTraer el color Azul y amarillo con Slice");
const colores = ["Verde", "Azul", "Amarillo", "Celeste", "Morado"]
const nuevoArray = colores.slice(1, 3)
console.log(nuevoArray)