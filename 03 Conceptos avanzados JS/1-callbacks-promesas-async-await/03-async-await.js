/* async: La declaración de función async define una función asíncrona, la cual devuelve una AsyncFunction. */
/* await: El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function. */

const posts = [
  {
    id: 1,
    nombre: "Joseph",
    descripcion:
      "Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 2,
    nombre: "Mario",
    descripcion:
      "Sequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque ",
  },
];

const encontrarPorNombre = (nombre) =>
  new Promise((resolve, reject) => {
    //setTimeout(): Un contador para que se ejecuté el código interior
    setTimeout(() => {
      const post = posts.find((item) => item.nombre === nombre);
      if (post) {
        resolve(post);
      } else {
        reject("No se encontro el nombre: " + nombre);
      }
    }, 2000);
  });

//Siempre el await dentro de un async
const buscar = async (nombre) => {
  try {
    //El código que ejecutaremos
    //El AWAIT siempre esperará una promera OJO!
    const post = await encontrarPorNombre(nombre);
    console.log("TRY: " + nombre);
    console.log(post);
  } catch (error) {
    //Si algo falla entrará aquí
    console.log("ERROR " + error);
  } finally {
    //Independiente si se ejecuta el try o catch entrará
    console.log("FINALLY del trycatch");
  }
};

buscar("Mario");
buscar("Pedro");

/* ⬇ PROMISE ALL */
const buscarTodos = async () => {
  try {
    const resPosts = await Promise.all([
      encontrarPorNombre("Mario"),
      encontrarPorNombre("Joseph"),
      //Si alguno falla, se irá directo al catch
    ]);
    console.log(resPosts);
  } catch (error) {
    console.log(error)
  } finally {
    console.log("FINALLY del Promise.all");

  }
};

buscarTodos();
