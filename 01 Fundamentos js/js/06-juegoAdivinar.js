// let numeroMaquina = Math.floor(Math.random() * (max - min) + min)
let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1)

let vidas = 3;

console.log("--ADIVINA EL NUMERO--")
let numeroUsuario = parseInt(prompt("Escribe un número del 1 al 10: "))

while(numeroUsuario !== numeroMaquina && vidas > 1){
    let textoAyuda = numeroUsuario > numeroMaquina ? "El número es MENOR, intenta otra vez" : "El número es MAYOR, intenta otra vez"
    vidas --
    console.log("Fallaste 😦 | Tienes " + vidas + "❤️")
    console.log(textoAyuda)
    numeroUsuario = parseInt(prompt("Escribe un número del 1 al 10: "))   
}


if(numeroUsuario === numeroMaquina){
    console.log("GANASTE 😆")
    console.log("El número secreto era: " + numeroMaquina)
}else{
    console.log("PERDISTE 😪")
    console.log("El número secreto era: " + numeroMaquina)
}

