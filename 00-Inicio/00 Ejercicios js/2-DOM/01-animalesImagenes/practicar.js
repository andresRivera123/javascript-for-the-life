//Botones
const buttonElefante = document.querySelector(".buttonElefante")
const buttonPinguino = document.querySelector(".buttonPinguino")
const buttonMono = document.querySelector(".buttonMono")

//Textos 
const textoElefante = document.querySelector(".textoElefante")
const textoPinguino = document.querySelector(".textoPinguino")
const textoMono = document.querySelector(".textoMono")

function handleClick(text, url){
    const textoImagen = document.querySelector(".textoImagen")
    const imagen = document.getElementById("imagen").src = url
    textoImagen.textContent = "Animal: " + text
    // Verifica si hay algún error de carga de imagen
    imagen.onerror = function() {
        console.error("Error cargando la imagen:", url);
    };
}

buttonElefante.addEventListener("click", () => {
    handleClick(textoElefante.textContent, "./img/elefante.jpg")
})

buttonPinguino.addEventListener("click", () => {
    handleClick(textoPinguino.textContent, "./img/pinguino.jpg")
})

buttonMono.addEventListener("click", () => {
    handleClick(textoMono.textContent, "./img/mono.jpg")
})