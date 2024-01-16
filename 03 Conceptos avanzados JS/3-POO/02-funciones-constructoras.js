console.log("\n--Funciones constructoras--");
//La función constructora es la versión de JavaScript de una clase, tiene todas la características que esperas en una función, aunque no devuelva nada.
//Básicamente sólo define propiedades y métodos.

/* Función contructura = plantilla = Class */
function Persona (nombre){
    this.nombre = nombre //this: crea una propiedad nombre.
    this.saludar = function() {
        return `${this.nombre} dice hola!`
    }
}

/* ⬇ new: crear un nuevo objeto a partir de la plantilla */
const juan = new Persona("Juan")
const sofia = new Persona("Sofia")
console.log(juan)
console.log(juan.saludar())
console.log(sofia)