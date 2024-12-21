//Promise: Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.
console.log("\n--PROMESAS");
const posts = [
  {
    userId: 1,
    id: 1,
    nombre: "Andrés",
    titulo:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    cuerpo: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    nombre: "Joseph",
    titulo: "qui est esse",
    cuerpo: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    nombre: "Mario",
    titulo: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    cuerpo: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const encontrarPorID = (id) => {
  const post = posts.find((item) => item.id === id);
  return new Promise((resolve, reject) => {
    if (post) {
      resolve(post); //resolve: respuesta satisfactoria
    } else {
      reject("No se encontro el ID: " + id); //reject: Respuesta erronea
    }
  });
};

/* ⬇ Utilizar promesas es más ordenado que los callbacks*/
encontrarPorID(5)
  .then((post) => console.log(post)) //them(): Método que retorna una promesa.
  .catch((error) => console.log(error)); //catch(): Método que se llamará cuando se rechace la promesa

const encontrarPorNombre = (nombre) =>
  new Promise((resolve, reject) => {
    const post = posts.find((item) => item.nombre === nombre);
    if (post) {
      resolve(post);
    } else {
      reject("No se encontro el nombre: " + nombre);
    }
  });

encontrarPorNombre("Joseph")
  .then((post) => console.log(post))
  .catch((error) => console.log(error));
