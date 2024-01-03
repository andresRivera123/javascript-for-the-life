const personas = [
  {
    id: 1,
    nombre: "José",
    apellido: "Vargas",
    edad: 14,
    casado: false,
  },
  {
    id: 2,
    nombre: "Pedro",
    apellido: "Rivera",
    edad: 19,
    casado: false,
  },
  {
    id: 3,
    nombre: "Sofia",
    apellido: "Valle",
    edad: 15,
    casado: false,
  },
  {
    id: 4,
    nombre: "Pepe",
    apellido: "De Jesus",
    edad: 35,
    casado: true,
  },
  {
    id: 5,
    nombre: "Teresa",
    apellido: "Alban",
    edad: 49,
    casado: true,
  },
  {
    id: 6,
    nombre: "Armando",
    apellido: "Erazo",
    edad: 49,
    casado: true,
  },
  {
    id: 7,
    nombre: "Maria",
    apellido: "Villavicencio",
    edad: 24,
    casado: false,
  },
];

console.log("\n--Ejercicios--");
console.log("\nPersonas: ");
console.log(personas);

console.log("\nMap) Saber los nombres de las personas");
console.log(personas.map((persona) => persona.nombre));

console.log("\nFilter) Traer a las personas casadas");
console.log(personas.filter((persona) => persona.casado === true));

console.log("\nFind) Encontrar a la persona que se apellide Villavicencio");
console.log(personas.find((persona) => persona.apellido === "Villavicencio"));

console.log("\nSome) Axiste alguna persona con menos de 18 años ");
console.log(personas.some((persona) => persona.edad < 18));

console.log("\nFind Index) Encontrar el indice y el objeto de Armando");
const index = personas.findIndex((persona) => persona.nombre === "Armando");
console.log(personas[index]);

console.log("\nSlice) Obtener la primera letra de un nombre");
console.log(
  "La primera letra de " +
    personas[0].nombre +
    " es : " +
    personas[0].nombre.slice(0, 1)
);

console.log("\nConcat) Agregar a Manuel al Array");
const Manuel = {
  id: 8,
  nombre: "Manuel",
  apellido: "Valle",
  edad: 24,
  casado: false,
};
console.log(personas.concat(Manuel));

console.log("\nReduce) Sacar la media de las edades de todo el Array");
const sumatoria = personas.reduce(
  (acumulador, persona) => acumulador + persona.edad,
  0
);
console.log(
  "La sumatoria de las edades es: " +
    sumatoria +
    ", divido por el numero de persona que es: " +
    personas.length +
    " es igual: " +
    (sumatoria / personas.length).toFixed(0)
);

console.log("\nSplit) Transformar el string dias en un objeto");
const stringFeo = "Lunes-Martes-Miercoles-Jueves-Viernes-Sabado-Domingo";
console.log(stringFeo);
const objetoSplit = stringFeo.split("-");
console.log(objetoSplit);

console.log(
  "\nJoin) Tranformar el objetoSplit en un Array separado por 3 puntos"
);
console.log(objetoSplit.join("..."));
