/* Exportar: Sacar algo de un lugar*/
/* Importar: Traer algo de afuera */
/* IMPORTANTE En el script de HTML, solo se llamara al archivo que recibe las importaciones y se le agregará el type="module"*/

/* Importar exportaciones con nombre se requiere escribirlo en {} */
//as: Agregamos un alias a la importación
console.log("EXPORTAR POR NOMBRE")
import { Persona, pintarAvion, tren as train } from "./vehiculos.js";
console.log(train)
pintarAvion()
console.log(Persona)


/* Importar exportaciones por defecto, se lo puede llamar con un nombre diferente ya que solo tendremos un export default y no son necesarias las llaves {}*/
console.log("EXPORTAR POR DEFECTO")
import vehiculoRojo from "./vehiculos.js"
console.log(vehiculoRojo)