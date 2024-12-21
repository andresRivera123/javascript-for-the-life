export const peliculas = [
  { nombre: "El Exorcista", genero: "terror" },
  { nombre: "Tiburón", genero: "terror" },
  { nombre: "Psicosis", genero: "terror" },
  { nombre: "El Resplandor", genero: "terror" },
  { nombre: "El Silencio de los Corderos", genero: "terror" },
  { nombre: "El Gran Dictador", genero: "comedia" },
  { nombre: "Toy Story", genero: "comedia" },
  { nombre: "Mujer Bonita", genero: "comedia" },
  { nombre: "Los Intocables", genero: "comedia" },
  { nombre: "Forrest Gump", genero: "comedia" },
  { nombre: "Titanic", genero: "romántica" },
  { nombre: "La La Land", genero: "romántica" },
  { nombre: "Casablanca", genero: "romántica" },
  { nombre: "Amélie", genero: "romántica" },
  { nombre: "Los Puentes de Madison", genero: "romántica" },
  { nombre: "El Padrino", genero: "drama" },
  { nombre: "Cadena Perpetua", genero: "drama" },
  { nombre: "Pulp Fiction", genero: "drama" },
  {
    nombre: "El Señor de los Anillos: La Comunidad del Anillo",
    genero: "drama",
  },
  { nombre: "El Rey León", genero: "drama" },
];
const listaPeliculas = document.querySelector(".listaPeliculas");
const buttonTag = document.querySelectorAll(".button");
const allButton = document.querySelector(".all-button")

window.addEventListener("DOMContentLoaded", () => {
  renderPeliculas(peliculas);
});

allButton.addEventListener('click', () => {
  renderPeliculas(peliculas)
})

const createLI = (peliculas) =>
  peliculas
    .map((peli) => `<li>${peli.nombre} -- ${peli.genero}</li>`)
    .join(" ");

function renderPeliculas(peliculas) {
  const peliculasString = createLI(peliculas);
  listaPeliculas.innerHTML = peliculasString;
}

//Know the value onClick
buttonTag.forEach((button) => {
  button.addEventListener("click", () => {
    const newListPeliculas = peliculas.filter((peli) =>
      peli.genero.toLowerCase().includes(button.textContent.toLowerCase())
    );
    renderPeliculas(newListPeliculas);
  });
});
