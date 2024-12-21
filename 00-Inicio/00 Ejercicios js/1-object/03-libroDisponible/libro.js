// Define una función que verifique si un libro está disponible en una biblioteca.
// La función debe recibir dos objetos: uno que representa el libro y otro que representa la biblioteca.
// El objeto del libro tiene la siguiente estructura: { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry' }
// El objeto de la biblioteca tiene un array de libros disponibles.

function libroDisponible(biblioteca, libro){
  for(let i = 0; i < biblioteca.disponibles.length; i++){
    if(libro.titulo === biblioteca.disponibles[i].titulo && libro.autor === biblioteca.disponibles[i].autor){
      return true
    }
  }
  return false
}

const biblioteca = {
  disponibles: [
    {
      titulo: "Odisea",
      autor: "Homero",
    },
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
    },
    {
      titulo: "1984",
      autor: "George Orwell",
    },
  ],
};

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
};

const estaDisponible = libroDisponible(biblioteca, libro)
if(estaDisponible){
  console.log("✔️ El libro " + libro.titulo +  " ESTA DISPONIBLE")

}else {
  console.log("❌  El libro " + libro.titulo +  " NO ESTA DISPONIBLE")
}