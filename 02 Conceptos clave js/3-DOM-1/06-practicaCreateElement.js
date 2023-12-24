const lista = document.getElementById("lista-animales");
const animales = ["Perro", "Jirafa", "Perezoso", "Gato", "Trucha"];
const fragment = document.createDocumentFragment();

/* CON APPEND CHILD */
/* 
animales.forEach((animal) => {
  const li = document.createElement("li");
  const b = document.createElement("b");
  const span = document.createElement("span");
  b.textContent = "Animal: ";
  span.textContent = animal;
  li.appendChild(b);
  li.appendChild(span);
  fragment.appendChild(li);
}); */

/* CON INNERHTML */

/* animales.forEach(animal => {
    lista.innerHTML += `
    <li class="list">
        <b>Animal: </b>
        <span>${animal}</span>
    </li>
    `
})

lista.appendChild(fragment); */

/* CON INNERHTML + TEMPLATE = PARA REDUCIR EL REFLOW */

let template = ''

animales.forEach(animal => {
    template += `
    <li class="list">
        <b>Animal: </b>
        <span>${animal}</span>
    </li>
    `
})

lista.innerHTML = template