console.log("POO");
//poo: Paradigma de programación en el que se crean objetos para la manipulación de datos y donde, por lo general, cada objeto ofrece una nueva funcionalidad especial.
//La idea básica es que usemos objetos para modelar cosas del mundo real.
//tambien nos ayuda en la reutilización de código.

console.log("Ejemplo teórico")
const estudiante = {
  nombre: "Andy",
  uid: "e-0001",
  interes: ["Basketball", "Música", "Programación"],
  saludar() {
    //Métodos
    return `${this.nombre} dice hola!`;
  },
};

console.log("Plantilla o clase")