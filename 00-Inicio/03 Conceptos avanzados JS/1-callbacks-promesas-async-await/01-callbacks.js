//Callbacks: Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
console.log("\n--CALLBACKS");

const posts = [
  {
    userId: 1,
    id: 1,
    nombre: "Andrés",
    titulo:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    cuerpo:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    nombre: "Joseph",
    titulo: "qui est esse",
    cuerpo:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    nombre: "Mario",
    titulo: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    cuerpo:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const encontrarPostPorID = (id, callback) => {
  const post = posts.find((item) => item.id === id);
  if (post) {
    callback(null, post);
  } else {
    callback("No se encontro el post id " + id);
  }
};

encontrarPostPorID(1, (error, post) => {
  if (error) return console.log(error);
  console.log(post);
  encontrarPostPorID(4, (error, post) => {
    if (error) return console.log(error);
    console.log(post);
  });
});

/* CADA VEZ SE UTILIZA MENOS*/
