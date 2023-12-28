//CONCAT: Concatena o une dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array
console.log("\n--CONCAT--");
console.log("\nUnir los dos array de letras");
const letras1 = ['a', 'b', 'c', 'd']
const letras2 = ['e', 'f', 'g', 'h']
const letras3 = ['i', 'j']
const letras = letras1.concat(letras2)
console.log(letras)

//SPREAD SINTAX: Permite a un elemento iterable, tal como un arreglo o cadena ser expandido en lugares donde son esperados.
console.log("\n--SPREAD SINTAX--");
console.log("\nUnir los dos array de letras con Spread sintax");
const letrasSpread= [...letras2, "-" ,...letras3]
console.log(letrasSpread)