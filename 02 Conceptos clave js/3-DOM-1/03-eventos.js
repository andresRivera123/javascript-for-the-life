//eventos: La interacción con el usuario se consigue mediante la captura de los eventos que éste produce.
//Click, hover, si selecciono, etc
console.log("\n--ADD EVENT LISTENER--");
const h1 = document.querySelector("h1")
const button = document.querySelector("button")
button.addEventListener("click", () => {
    console.log("Me diste click")
    h1.textContent = "Cambiar titulo desde addEventListener"
})
