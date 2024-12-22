/* 
Adivina el número:

 - Genera un número aleatorio entre 1 y 10.
 - Pide al usuario que intente adivinarlo.
 - Proporciona pistas si el número es mayor o menor.
 - Da al usuario un máximo de 3 intentos.
*/

console.log("🔮 ADIVINIA EL NÚMERO 🔮");
let numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroAleatorio);

let vidas = 3;
while (vidas >= 1) {
  let adivinar = parseInt(
    prompt(`Escribe un número del 1 al 10 . Tienes ${vidas} vidas`)
  );

  if(isNaN(adivinar) || adivinar < 1 || adivinar > 10){
    console.log("Por favor, ingresa un número del 1 al 10");
    continue;
  }

  if (adivinar > numeroAleatorio) {
    console.log(`El número es más pequeño`);
  } else if (adivinar < numeroAleatorio) {
    console.log(`El número es más grande`);
  } else if ((adivinar === numeroAleatorio)) {
    console.log("FELICIDADES ADIVINASTE 🎉");
    console.log(`El número era el ${numeroAleatorio}`);
    break;
  }
  vidas--;
}

if (vidas === 0) {
  console.log(" 🥹PERDISTE, VUELVE A INTENTARLO...");
}
