//SPLIT: Divide un objeto de tipo String en un array, mediante un separador.
console.log("\n--SPLIT-");
console.log("\nCrear array meses del string");
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
console.log(cadenaMeses)
const cadenaNueva = cadenaMeses.split(',')
console.log(cadenaNueva)

//JOIN: Une todos los elementos de un array (o un objeto similar a una matriz) en una cadena(string) y devuelve esta cadena.
console.log("\n--JOIN--");
console.log("\nCrear un string del array separado por un -");
console.log(cadenaNueva.join('-'))
//OJO: Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (",").