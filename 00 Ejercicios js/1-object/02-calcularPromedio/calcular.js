// Define una función que calcule el promedio de calificaciones de un estudiante.
// La función debe recibir un objeto que contiene las calificaciones de un estudiante.
// El objeto tiene la siguiente estructura: { matematicas: 90, historia: 80, ciencias: 95 }

function calcularPromedio(estudiante){
    let suma = 0
    for(let notas in estudiante){
        suma += estudiante[notas] 
    }
    const numeroNotas = Object.keys(estudiante).length
    return suma/numeroNotas
}

const calificacionesPepe = {matematicas: 90, historia: 75, cienciasNaturales: 85, fisica: 60};
const promedio = calcularPromedio(calificacionesPepe)
console.log("Promedio: " + promedio)
