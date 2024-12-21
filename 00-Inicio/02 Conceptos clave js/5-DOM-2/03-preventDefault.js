/* PREVENT DEFAULT: Para prevenir el comportamiento por defecto de un evento. Evita el refresh de la página con el evento submit por ejemplo*/

console.log("\n--PREVENT DEFAULT--");
const formulario = document.querySelector("form")
formulario.addEventListener("submit", (e) => {
    console.log("Enviaste el formulario")
    e.preventDefault()
})


//En este ejemplo de enlace (a), el preventDefault evita que nos redirija a otra página.
const ancla = document.querySelector(".ancla")
ancla.addEventListener("click", (e) => {
    console.log("Redirigir")
    e.preventDefault()
})