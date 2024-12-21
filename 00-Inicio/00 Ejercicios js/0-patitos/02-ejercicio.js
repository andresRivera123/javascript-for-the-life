// En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
// el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados.

let latoCuadrado = parseFloat(prompt("Escribe cuando mide el lado del cuadrado: "));
let areaCuadrado = latoCuadrado * latoCuadrado
let perimetro = latoCuadrado * 4

console.log("El lado del cuadrado ▢ es: " + latoCuadrado)
console.log("Área: " + areaCuadrado + " | Perímetro: " + perimetro)

