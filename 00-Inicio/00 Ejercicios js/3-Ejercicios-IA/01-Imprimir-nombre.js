/* Crea un programa que:
- Solicite al usuario su nombre y apellido.
- Combínalos en una sola cadena y muestra el mensaje: "Hola, [Nombre Completo]!".
 */

let nombre = prompt("Introduce tu nombre");
let apellido = prompt("Introduce tu apellido");
if (nombre && apellido) {
  let identidad = nombre + " " + apellido;
  document.body.innerHTML = `<h1>Hola, ${identidad}! </h1>`;
} else {
  document.body.innerHTML = "<h1>Falta información</h1>";
}
