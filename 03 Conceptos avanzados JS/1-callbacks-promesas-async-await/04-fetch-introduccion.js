//fetch API: Proporciona una interfaz para recuperar recursos
console.log("FETCH API INTRODUCCIÓN");
const url = "https://jsonplaceholder.typicode.com/posts";
//fetch(): Devuelve una Promise con la ruta de acceso al recurso que desea recuperar, necesita un argumento obligatorio.
fetch(url).then((response) => console.log(response));
//Una vez que Response es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.

/*     
fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
    .finally(() => console.log("Finalizó")); 
*/

const encontrarPostPorID = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`)
    const posts = await respuesta.json()
    console.log(posts)
  } catch (error) {
    console.log(error)
  } finally{
    console.log("Finalizó")
  }
};

encontrarPostPorID(1)
encontrarPostPorID(50)
