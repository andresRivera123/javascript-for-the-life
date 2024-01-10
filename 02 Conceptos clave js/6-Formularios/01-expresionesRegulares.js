//Expresiones regulares: Tambien llamadas(RefExp o RegEx), son patrones para hacer coincidir combinaciones de caracteres en cadenas.
//Por ejemplo, validar DNI, correos electrónicos, contraseñas, tipos de datos,etc
console.log("\n--EXPRESIONES REGULARES");

const regExp = /andres/i; //notación literal
const regExpObjeto = new RegExp("andres", "i") //Notación de objeto
/*FLAGS: {
    i: Ignora mayúsculas y minúsculas.
    g: Sigue buscando coincidencias en lugar de pararse al encontrar una.
    m: Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.
}*/

//Test: Ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve un booleano
console.log("Validar/testear si tiene andres en el string (andres): " + regExp.test("andres"))
console.log("Validar/testear si tiene andres en el string (bandresb): " + regExp.test("bandresb"))
console.log("Validar/testear si tiene andres en el string (andre): " + regExp.test("andre"))
console.log("Validar/testear si tiene andres en el string (carlos andres rivera): " + regExp.test("carlos andres rivera"))

console.log("\n\n--Carácteres especiales");
//[] : Rango de carácteres. Cualquiera de los caracteres en el interior
const regExpRango = /[xyz]/i
console.log("Validar si tiene [xyz] en (andrex): " + regExpRango.test("andresx"))
console.log("Validar [xyz] en (XYZ): " + regExpRango.test("XYZ"))
console.log("Validar [xyz] en (yandrex): " + regExpRango.test("yandrex"))
// | : Establece una alternatiza a la izquierda o derecha
const regExpCarrera = /Software|software/i
console.log("\nValidar si alguna respuesta tiene: /Software|software/i")
console.log("Validar en (software): " + regExpCarrera.test("software"))
console.log("Validar en (Tecnología): " + regExpCarrera.test("Tecnología"))
console.log("Validar en (Software): " + regExpCarrera.test("Software"))
//[0-9] Un dígito del 0-9
const regExpCeroAlNueve = /[0-9]/gi
console.log("\nValidar /[0-9]/gi en (andres1999): " + regExpCeroAlNueve.test("andres1999"))
console.log("Validar /[0-9]/gi en (!@abc): " + regExpCeroAlNueve.test("!@abc"))
//[A-Z] Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
const regExpMayusculas = /[A-Z]/gi;
console.log("\nValidar /[A-Z]/gi en (ANDRÉS RIVERA): " + regExpMayusculas.test("ANDRÉS RIVERA"))
console.log("Validar /[A-Z]/gi en (Andrés Rivera): " + regExpMayusculas.test("Andrés Rivera"))
console.log("Validar /[A-Z]/gi en (p): " + regExpMayusculas.test("p"))
//[a-z] Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
const regExpMinusculas = /[a-z]/gi;
console.log("\nValidar /[a-z]/gi en (andrés): " + regExpMinusculas.test("andrés"))
console.log("\nValidar /[a-z]/gi en (A): " + regExpMinusculas.test("A"))
//[A-Za-z0-9] Carácter alfanumérico (letra mayúscula, minúscula o dígito).
const regExpCombinacion= /[A-Za-z0-9]/gi;
console.log("\nValidar /[A-Za-z0-9]/gi en (AndresRivera1999): " + regExpCombinacion.test("AndresRivera1999"))
console.log("Validar /[A-Za-z0-9]/gi en (andrés): " + regExpCombinacion.test("as@"))

console.log("\nEn internet podemos encontrar muchas más validaciones...")
