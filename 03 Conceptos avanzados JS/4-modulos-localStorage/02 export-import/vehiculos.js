//1️⃣) Exportación con nombre: funciones, var, let, const, class
export const tren = "🚅";
export function pintarAvion() {
  console.log("🛬");
}
export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// ⬇ Podemos evitar el export en cada una y escribirlas todas de la siguiente forma.
/* export { sandia, pintarAvion, Persona }; */


// 2️⃣) Exportacion por default: Solo se permite una exportación pretermina por módulo.
const carro = "🚗";
export default carro;

// ⬇ No podemos agregar otro default OJO

/* const caballo = "🐎"
export default caballo */

/* const default () {
    console.log("🛵")
} 
*/

