// En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
// Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

let sumatoria = 0
console.log("MEDIA")
for(i = 0; i<3; i++){
    let numero = parseFloat(prompt(i+1 + ") Escriba un número: "))
    sumatoria = sumatoria + numero
    console.log(sumatoria)
}

sumatoria = sumatoria/3
console.log("La media de los tres números es: " + sumatoria)