//FILTER: Crea un nuevo array con todos los elementos que cumplan la condición
console.log("\n--FILTER--");
console.log("\nFiltrar solo los usuarios mayores a 30 años");
const usuarios = [
  {
    id: 1,
    nombre: "Pepe",
    apellido: "Mujica",
    edad: 31,
  },
  {
    id: 2,
    nombre: "Andrea",
    apellido: "Valle",
    edad: 27,
  },
  {
    id: 3,
    nombre: "Federico",
    apellido: "Altamirano",
    edad: 47,
  },
];

const usuariosMayores = usuarios.filter((usuario) => usuario.edad > 30)
console.log(usuariosMayores)

console.log("\nFiltrar para eliminar elementos del array");
const usuariosQueSeQuedan = usuarios.filter((usuario) => usuario.id !== 2)
console.log(usuariosQueSeQuedan)

console.log("\nRetornar las frutas y los snacks de la lista de compras");
const listaCompra = [
  { nombre: "manzana", categoria: "fruta" },
  { nombre: "Pimiento", categoria: "verdura" },
  { nombre: "Cereza", categoria: "fruta"},
  { nombre: "Lechuga", categoria: "verdura"},
  { nombre: "Pera", categoria: "fruta"},
  { nombre: "Galletas", categoria: "snack"},
  { nombre: "Cebolla", categoria: "verdura"}
];
const filtrarFrutas = listaCompra.filter(item => item.categoria === "fruta" || item.categoria === "snack")
console.log(filtrarFrutas)