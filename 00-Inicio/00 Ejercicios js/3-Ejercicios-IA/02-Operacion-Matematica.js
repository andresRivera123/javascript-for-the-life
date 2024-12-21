/* Escribe un programa que:

 - Solicite dos números al usuario.
 - Realice y muestre las operaciones: suma, resta, multiplicación y división de esos números.
 - Asegúrate de manejar posibles divisiones por cero.
 */
function operaciones(num1, num2) {
  console.log(num1 + " + " + num2 + " = " + (num1 + num2));
  console.log(num1 + " - " + num2 + " = " + (num1 - num2));
  console.log(num1 + " * " + num2 + " = " + num1 * num2);
  if (num2 === 0) {
    console.log("El divisor no puede ser 0");
  } else {
    console.log(num1 + " / " + num2 + " = " + num1 / num2);
  }
}

function data() {
  let num1, num2;
  while (true) {
    num1 = parseFloat(prompt("Número 1"));
    num2 = parseFloat(prompt("Número 2"));
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Porfavor ingrese los números para continuar...");
    } else {
      break;
    }
  }
  operaciones(num1, num2);
}

data();
