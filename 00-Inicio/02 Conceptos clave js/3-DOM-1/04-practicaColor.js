//Elementos
const input = document.querySelector("input");
const textColor = document.querySelector(".textColor");
const button = document.querySelector("button");
const div = document.querySelector(".divColor");
//Evento
button.addEventListener("click", () => {
  //Cambiar contenido texto
  textColor.textContent = input.value;
  //Pintar background
  div.style.backgroundColor = input.value;
  //copiar en portapapeles
  navigator.clipboard
    .writeText(input.value)
    .then(() => console.log("texto copiado"))
    .catch((e) => console.log(e));
});
