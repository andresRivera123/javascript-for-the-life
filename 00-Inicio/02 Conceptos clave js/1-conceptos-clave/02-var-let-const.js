// VAR: Se declara globlamente, un problema es que puede sobreescribir las declaraciones de variables sin errores.
console.log("\n--VAR--")
var nombreUsuario = "Andrés Rivera"
var nombreUsuario = "Carlos Valle"
console.log(nombreUsuario)

//LET: No nos permite declarar dos veces la misma variable.
console.log("\n--LET--")
let nombreMascota = "Firu"
// let nombreMascota = "Pepe" //Error
console.log("Ejemplo let 1")

let estado = true 
if(estado){
    console.log("Entre al if")
    let estado = false //Cuandos se declara dentro de un bloque declaración o expresión su alcance se limita a este y es indeferente si esta declarado igual afuera.
    console.log("Soy el estado del if: " + estado)
}
console.log(estado)

console.log("Ejemplo let 2")
for (let i = 0; i < 3; i++) {
    console.log(i)
}
// console.log(i)//Se interpreta como que i no esta declarada.
//CONST: Caracteristicas del Let pero las variables declaras son solo de lectura lo que significa que una vez que se asigna una variable const, no se puede reasignar..
console.log("\n--CONST--")
console.log("Ejemplo const 1")
const estadoConst = true
if(estadoConst){
    const estadoConst = false
    console.log(estadoConst)
}
console.log(estadoConst)

console.log("Ejemplo const - array ")  //Podemos modificar el interior
const frutas = []
frutas[0] = "Sandia"
console.log(frutas)
