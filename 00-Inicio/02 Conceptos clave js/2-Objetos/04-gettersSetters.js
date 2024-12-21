// get: Será llamada cuando la propiedad es buscada
//set: Asocia la propiedad de un objeto a una función que será llamada
console.log("\n--GET Y SET--");
const cerdo = {
    nombre: "Piggie",
    color: "Rosado",
    edad: 4,
    vuela: false,
    comidaFavorita: ["Verduras", "Balanceado"],
    get nombreMayucula(){ //0 parametros
        return this.nombre.toUpperCase()
    },
    set agregarComida(comida){ //Solo SOLO 1 parametro
        return this.comidaFavorita.push(comida)
    }
}

console.log(cerdo.nombreMayucula)
cerdo.agregarComida = "Patatas"
console.log(cerdo.comidaFavorita)