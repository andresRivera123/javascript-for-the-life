// Objetos:  colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
//Objeto literales/estáticos: Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.
console.log("\n--Objetos literales--");
const perro = {
  nombre: "Vaca",
  edad: 3,
  feliz: true,
  comidaFavorita: ["Carne", "Arroz", "Sopa"],
  otros: {
    amigos: ["marika", "mama", "luky"],
    mejoresAmigos: {
      gato: "Puma",
      perro: "Lobo",
    },
  },
};

console.log(perro);
console.log(perro.nombre);
console.log(perro.edad);
console.log(perro["edad"]);
console.log(perro.feliz);
console.log(perro.comidaFavorita[2]);
console.log(perro["comidaFavorita"][1]);

// CRUD(Create, read, update, delete)
console.log("\n--CRUD--");
//Create
perro.color = "negro";
//Read
console.log(perro);
//Update
perro.edad = 4;
console.log(perro);
//Delete
delete perro.feliz;
console.log(perro);
//Para conocer si existe una propiedad en el objeto:
console.log(perro.hasOwnProperty("nombre")); //true
//Acceder a propiedades internas
console.log(
  `El mejor amigo perro de ${perro.nombre} es: ${perro.otros.mejoresAmigos.perro}`
);

