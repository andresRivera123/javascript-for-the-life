console.log("\n--Static--");
// La palabra clave static define un método estático para una clase
// Los método estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase
// Son a menudo usados para crear funciones de utilidad para la aplicación.

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static probarSaludo(nombre) {
    return `${nombre} probando saludo`
  }
}

//Sin instanciar, directo desde la clase
console.log(Persona.probarSaludo("Pepe"))
