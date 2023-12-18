let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPelicula();
  }
});

btnAnterior.addEventListener("click", () => {
  if(pagina > 1){
    pagina -= 1
    cargarPelicula()
  }
});

const cargarPelicula = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=01c3b1a23c7ecdb3ecfca693f96b2143&language=es-ES&page=${pagina}`
    );

    //Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datosJSON = await respuesta.json();
      let peliculas = "";
      datosJSON.results.forEach((pelicula) => {
        peliculas += `
          <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
            <h3 class="title">${pelicula.title}</h3>
            </div>`;
        document.getElementById("contenedor").innerHTML = peliculas;
      });
    } else if (respuesta.status === 401) {
      console.log("Llave mal puesta");
    } else if (respuesta.status === 404) {
      console.log("La pelicula que busca no se encuentra");
    } else {
      console.log("Hubo un problema, reinicia");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPelicula();
