//getElementByID(): Devuelve una referencia al elemento por su ID.
console.log("\n--GET ELEMENT BY ID--");
console.log(document.getElementById("tituloWeb").textContent)

//querySelector(): Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
console.log("\n--QUERY SELECTOR--");
//Primer elemento que encuentre
console.log(document.querySelector(".tituloClass").textContent)
console.log(document.querySelector("h1").textContent)
//Todos
console.log(document.querySelectorAll("h1"))
//Los que se encuentres dentro de un container/div/main o cualquier etiqueta
console.log(document.querySelectorAll(".container .textoContainer"))

//element: eventos disponibles para los elementos HTML
console.log("\n--ELEMENT--");
const h1 = document.getElementById("tituloWeb")
console.log(h1.classList)
console.log(h1.style)
console.log(h1.textContent)
h1.textContent = "Nuevo titulo desde JS"
h1.style.backgroundColor = "red"
h1.style.color = "white"

