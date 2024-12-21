const input = document.querySelector("#input");
const listPokemon = document.querySelector("#listPokemons");
let pokemons = [];

window.addEventListener("DOMContentLoaded", async () => {
  pokemons.innerHTML = '<h2>Loading...</h2>'
  const data = await getAPI();
  pokemons = data.results;
  renderPokemons(pokemons);
});

//Get data API
async function getAPI() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
  return await response.json();
}

//Create list pokemon with map
const createListPokemon = (pokemons) =>
  pokemons.map((pokemon) => `<li class="li">${pokemon.name}</li>`).join(" ");

//Add pokemons in list
function renderPokemons(pokemons) {
  const pokemonString = createListPokemon(pokemons);
  listPokemon.innerHTML = pokemonString;
}

input.addEventListener("keyup", (e) => {
  console.log(input.value);
  const newPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(input.value.toLowerCase())
  );
  renderPokemons(newPokemons);
});
