//extends: La palabra clave es usada en declaraciones de clase o expresiones de clase para crear una clase hija
console.log("\n--Heredar--");

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `${this.nombre} dice hola!`;
  }
}

//Estudiante hereda de persona
class Estudiante extends Persona {

  #religion = []; //Propiedades privadas: asignando un #

  constructor(nombre, edad, notas = []) {
    super(nombre, edad); //super: permite mantener propiedades de la clase padre es decir nombre y edad
    this.notas = notas;
  }

  set setNotas(nota) {
    this.notas.push(nota);
  }

  get getNotas() {
    return this.notas;
  }

  set setReligion(religion) {
    this.#religion = religion;
  }

  get getReligion() {
    return this.#religion;
  }

  //Polimorfismo: Sobreescribir algo que ya existia para utilizar desde otra clase.
  saludar() {
    return `${this.nombre} desde estudiante!`;
  }
}

const pedro = new Persona("Pedro", 25);
console.log("Persona: ");
console.log(pedro);
console.log(pedro.saludar());
console.log("\n\nEstudiante");
const maria = new Estudiante("Maria", 18);
console.log(maria);
console.log(maria.saludar());
maria.setNotas = 7;
maria.setNotas = 5;
maria.setNotas = 1;
console.log(maria.getNotas);
maria.setReligion = "Mormon"
console.log(maria.getReligion)
/* ⬇ Tendremos un error ya que no podemos acceder a una propieda privada */
/* console.log(maria.#religion) */
