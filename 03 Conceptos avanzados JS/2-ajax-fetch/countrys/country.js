document.addEventListener("DOMContentLoaded", () => {
  getData();
});

const getData = async () => {
  try {
    const url = 'https://countriesnow.space/api/v0.1/countries/flag/images';
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error);
  } finally{
	console.log("SFASD")
  }
};
