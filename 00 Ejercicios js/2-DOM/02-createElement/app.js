//Referencia ul
const listaAnimales = document.querySelector("#listaAnimales");

//Fragment
const fragment = document.createDocumentFragment();

//Animales
const animales = ["Perro", "Gato", "Hamster", "Iguana"];

animales.forEach((animal) => {
  const li = document.createElement("li");
  li.classList = "li"
  //   bold
  const bold = document.createElement("b");
  bold.textContent = "Animal: ";
  //   span
  const span = document.createElement("span");
  span.className = "textSpan";
  span.textContent = animal;
  //   Agregar a la li las etiquetas
  li.appendChild(bold);
  li.appendChild(span);
  //   Agregar al fragment
  fragment.appendChild(li);
});

listaAnimales.appendChild(fragment);
