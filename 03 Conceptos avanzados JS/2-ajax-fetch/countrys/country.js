let dataCountry = [];
document.addEventListener("DOMContentLoaded", async () => {
  const data = await getData();
  dataCountry = data.data;
  paintTemplateCountry(dataCountry);
});

const getData = async () => {
  try {
    loading(true);
    const url = "https://countriesnow.space/api/v0.1/countries/flag/images";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    loading(false);
  }
};

const loadingSection = document.getElementById("loadingSection");
const loading = (status) => {
  if (status) {
    loadingSection.classList.remove("d-none");
  } else {
    loadingSection.classList.add("d-none");
  }
};

const paintTemplateCountry = (data) => {
  const countryContainer = document.getElementById("countryContainer");
  const templateCountry = document.getElementById("templateCountry").content;
  const fragment = document.createDocumentFragment();
  countryContainer.innerHTML = "";
  data.forEach((item) => {
    const clone = templateCountry.cloneNode(true);
    clone.getElementById("isoCountry").textContent = item.iso3;
    clone.getElementById("nameCountry").textContent = item.name;
    clone.getElementById("imgCountry").setAttribute("src", item.flag);
    clone.getElementById("imgCountry").alt = "Flag from " + item.name;
    if (item.name === "Afghanistan") {
      clone
        .getElementById("imgCountry")
        .setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/255px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png"
        );
    }
    fragment.appendChild(clone);
  });
  countryContainer.appendChild(fragment);
};

const emptyCountryText = document.getElementById("emptyCountryText");
const paintEmptyText = (empty) => {
  if (empty === 0) {
    emptyCountryText.classList.remove("d-none");
  } else {
    emptyCountryText.classList.add("d-none");
  }
};

const inputSearchCountry = document.getElementById("inputSearchCountry");

inputSearchCountry.addEventListener("keyup", (e) => {
  const newCountrys = dataCountry.filter((item) =>
    `${item.name.toLowerCase()}`.includes(
      inputSearchCountry.value.toLowerCase()
    )
  );
  paintEmptyText(newCountrys.length);
  paintTemplateCountry(newCountrys);
});
