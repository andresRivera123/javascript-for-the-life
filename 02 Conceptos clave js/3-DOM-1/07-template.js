//template: mecanismo para mantener el contenido HTML del lado del cliente que no se renderiza cuando se carga una página, pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.
//Una de las mejores soluciones para evitar el reflow y la creación de los elementos complejos en JS
const ul = document.getElementById("ul07")
const liTemplate = document.getElementById("liTemplate")
const clone = liTemplate.content.cloneNode(true)//Clonamos el template
console.log(clone.querySelector(".span"))

clone.querySelector(".span").textContent = "agrege desde template"

ul.appendChild(clone)

/* Ejemplo template con Array*/

const arrayPaises = ["Canada", "Ecuador", "Italia", "Congo", "China"]
const ulPaises = document.getElementById("lista-paises")
const olTemplate = document.getElementById("olTemplate")
const fragment = document.createDocumentFragment()

arrayPaises.forEach(pais => {
    const cloneTemplate = olTemplate.content.cloneNode(true)
    cloneTemplate.querySelector(".span-pais").textContent = pais
    fragment.appendChild(cloneTemplate)
})

ulPaises.appendChild(fragment)

/* OJO: Para insertar elementos dinamicos con addEventListener necesariamente se debe agregar el firstElementChild */
/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall */
const click = () => console.log("Me diste click")

arrayPaises.forEach(pais => {
    const cloneTemplate = olTemplate.content.firstElementChild.cloneNode(true)
    cloneTemplate.querySelector(".span-pais").textContent = pais
    cloneTemplate.addEventListener("click", click)
    fragment.appendChild(cloneTemplate)
})


ulPaises.appendChild(fragment)