/* 
Cuenta Regresiva:
 - Solicita un número al usuario.
 - Muestra una cuenta regresiva desde ese número hasta 0.

 */

console.log("🚀 CUENTA REGRESIVA 🚀");

let completarCuenta = false;
while (!completarCuenta) {
  let numero = parseInt(
    prompt("Escribe un número para comenzar la cuenta regresiva...")
  );
  if (isNaN(numero) || numero < 1) {
    console.log("Por favor, escribe un número mayor a 0");
    continue;
  }

  completarCuenta = true;
  for (let i = numero; i > -1; i--) {
    console.log(i);
  }
  console.log("¡Cuenta regresiva terminada! 🎉");
  break;
}
