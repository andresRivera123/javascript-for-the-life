//createElement: Crea un elemento HTML
console.log("\n--CREATE ELEMENT--")
const lista = document.querySelector("#listaDinamica")
const li = document.createElement("li")
li.textContent = "Elemento creado con createElement()"
console.log(li)

//appendChild(): A que elemento al final de la lista de un elemento padre
console.log("\n--APPEND CHILD--")
lista.appendChild(li) //Si el child hace referencia a un nodo existete se mueve a la posición actual, significa que no puede estar en dos puntos

const arrayPaises = ["Ecuador", "Peru", "Bolivia"]

arrayPaises.forEach(paises => {
    const li = document.createElement("li")//Crear elemento
    li.textContent = paises//Ingresar el contenido
    lista.appendChild(li) //Agregar a la lista
    console.log(li.textContent)
})

//El innerHTML no es buena opción, genera reflow y es poco seguro en ciertos casos
// arrayPaises.forEach(pais => {
//     lista.innerHTML += `<li>${pais}</li>`
// })

//Fragment: Representa un objeto de documento mínimo que no tiene padre, se utiliza como una versión ligera de document
console.log("\n--FRAGMENT--")
const arrayPaises2 = ["España", "Venezuela", "Costa Rica"]
const fragment = document.createDocumentFragment()
arrayPaises2.forEach(pais => {
    const li = document.createElement("li")
    li.textContent = pais
    fragment.appendChild(li)
    console.log(li.textContent)
})

lista.appendChild(fragment)

//insertBefore: Agregar lista del último al primero
console.log("\n--INSERT BEFORE--")
const arrayPaises3 = ["Ucrania", "EEUU"]
arrayPaises3.forEach(pais => {
    const newNodo = document.createElement('li')
    newNodo.textContent = pais
    const referenceNode = fragment.firstChild
    fragment.insertBefore(newNodo, referenceNode)
    console.log(newNodo.textContent)
})
lista.appendChild(fragment)