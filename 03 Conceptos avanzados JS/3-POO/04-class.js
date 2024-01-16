//class: es una función constructora que su función constructora es una cadena de prototipos.
//Sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.
console.log("\n--Class--");

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  //Todos los métodos van a estar en la cadena de prototipos. No se agrega como una propiedad.
  saludar() {
    return `${this.nombre} dice hola!`;
  }
}

const juanito = new Persona("Juanito");
console.log(juanito);
const maria = new Persona("Maria");
console.log(maria);
console.log(maria.saludar());

class Perro {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  ladrar() {
    return `${this.nombre} procede a ladrar`;
  }
}

const firulais = new Perro("Firulais", 3);
console.log(firulais);
console.log(firulais.ladrar());
