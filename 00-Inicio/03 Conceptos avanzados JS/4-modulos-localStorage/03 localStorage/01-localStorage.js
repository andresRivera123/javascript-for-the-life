console.log("LOCAL STORAGE");
//Permite guardar datos en el navegador, estos persisten en diferentes sesiones de navegación, no tienen fecha de expiración y tiene una palabra clave y un valor String.
//Soporta 5mb
//Se lo puede revisar en applicaction en el navegador.

localStorage.setItem("platano", "🍌");
console.log(localStorage.getItem("platano"));

//➡ Eliminar un item: localStorage.removeItem("platano")
//➡ Eliminar todos los items del localStorage: localStorage.clear()

console.log("JSON.stringify & JSON.parse ");
//stringify: convierte un objeto o valor de JavaScript en una cadena de texto JSON.
//parse: analiza una cadena de texto como JSON.
const frutas = [
  {
    nombre: "🍌",
    color: "Amarillo",
  },
  {
    nombre: "🍐",
    color: "Verde",
  },
  {
    nombre: "🍓",
    color: "Rojo",
  },
];

localStorage.setItem("frutas", JSON.stringify(frutas))
const frutasLocales = JSON.parse(localStorage.getItem("frutas"))
console.log(frutasLocales)