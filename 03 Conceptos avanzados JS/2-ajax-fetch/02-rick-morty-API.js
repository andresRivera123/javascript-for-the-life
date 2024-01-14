document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    loadingData(true);
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    pintarCard(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

const pintarCard = (data) => {
  const cards = document.querySelector("#card-dinamicas");
  const template = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();
  data.results.forEach((item) => {
    const clone = template.cloneNode(true);
    clone.querySelector("img").setAttribute("src", item.image)
    clone.querySelector("h5").textContent = item.name;
    clone.querySelector("p").textContent = item.species;

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const loadingData = (estado) => {
  const loading = document.getElementById("loading");
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
