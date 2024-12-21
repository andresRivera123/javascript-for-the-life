// Define una función que convierta una temperatura de Celsius a Fahrenheit.
// La función debe recibir un objeto que contiene la temperatura en Celsius.
// El objeto tiene la siguiente estructura: { celsius: 25 }

function convertirCelciusAFahrenheit(grados){
    return (grados * 9/5) + 32
}

const grados = { celcius: 25 };
grados.fahrenheit = convertirCelciusAFahrenheit(grados.celcius)
console.log(grados)