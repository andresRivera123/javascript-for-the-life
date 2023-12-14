// Método: Función puesta en un objeto o una serie de instrucciones para completar una tarea única.
console.log("\n--MÉTODOS--");
const perro = {
  nombre: "Vaca",
  edad: 3,
  feliz: true,
  comidaFavorita: ["Carne", "Arroz", "Sopa"],
  comer: function () {
    console.log("Procede a comer ");
  },
  beber() {
    console.log("Procede a beber ");
  },
  correr(velocidad) {
    //This: Hace referencia al objeto contexto
    console.log(`${this.nombre} corre a ${velocidad}km/h`);
  },
  saltar: () => console.log("Procede a saltar"), //Aquí NO se puede usar this o super
  listarComida() {
    this.comidaFavorita.forEach((comida) => console.log(comida)); //Las funciones flecha SÍ se puede usar dentro de un metodo.
  },
};

perro.comer();
perro.beber();
perro.correr(10);
perro.saltar();
console.log("\nComida favorita:");
perro.listarComida();

//forIn: Para recorrer las propiedades de un objeto
console.log("\n--FOR IN--");
const gato = {
  nombre: "Pepe",
  edad: 2,
  color: "Naranja",
  duerme: true,
};

for (let propiedad in gato) {
  console.log(propiedad);
  console.log(gato[propiedad]);
}

//Object.values(): Devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
console.log("\n--OBJECTS.VALUES()--");
console.log(Object.values(gato));
Object.values(gato).forEach((propiedades) => {
  console.log(propiedades);
});

//Destructuring: Nos permite desestructurar/desempacar valroes de los arreglos o propiedades de objetos en distitnas variables
const conejo = {
  nombre: "Mario el conejo feliz",
  color: "Blanco",
  edad: 3,
  salta : true,
  comidaFavorita: {
    verdura: {
      hortalizas: ["Zanahorias", "Col", "Brócoli"],
      legumbre: ["Haba", "Vaina", "Frejol"]
    },
    balanceado: "Pepas",
  },
};
console.log("\n--DESTRUCTURING--");
console.log(conejo.nombre);
//Destructuring objetos
const { color, edad } = conejo;
console.log(color, edad);
//Alias
const nombre = "Felipe";
const { nombre: NombreConejo } = conejo;
console.log(NombreConejo)
//Por defecto
const {salta : saltaConejo = false} = conejo
console.log(saltaConejo)
//Anidados
const verdura = ["rabano", "Perejil"]
const {comidaFavorita: {verdura : verdurasFavoritas}} = conejo //Forma 1
console.log(verdurasFavoritas)
const {balanceado} = conejo.comidaFavorita//Forma 2
console.log(balanceado)
//Array
const {legumbre} = conejo.comidaFavorita.verdura
const [legumbreUno, legumbreDos, legumbreTres, legumbreCuatro = "Garbanzo"] = legumbre
console.log(legumbreUno, legumbreDos, legumbreCuatro)
