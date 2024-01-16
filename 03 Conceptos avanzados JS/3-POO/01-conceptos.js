console.log("\n--POO--");
//poo: Paradigma de programación en el que se crean objetos para la manipulación de datos y donde, por lo general, cada objeto ofrece una nueva funcionalidad especial.
//La idea básica es que usemos objetos para modelar cosas del mundo real.
//tambien nos ayuda en la reutilización de código.

console.log("Ejemplo teórico");
const estudiante = {
  nombre: "Andy",
  uid: "e-0001",
  interes: ["Basketball", "Música", "Programación"],
  saludar() {
    //Métodos
    return `${this.nombre} dice hola!`;
  },
};

console.log("1) Plantilla o clase");
//La plantilla nos sirve para contruir objetos con diferentes propiedades o métodos.

console.log("2) Creación de objetos");
//Partiendo de nuestra plantilla/clase podemos crear instancias de objetos, objetos que contienen los datos y funcionalidades de la clase original.

console.log("3) Clases especializadas - Heredar");
//Podemos crear NUEVAS clases basadas en otras clases, esta clases secundarias se pueden hcer para heredar los datos y código de su primera clase.
