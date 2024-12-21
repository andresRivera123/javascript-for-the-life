//Prototipos de objetos: Los prototipos son un mecanismo mediante el cual los objetos en JS heredan características entre sí.
//JS es a menudo descrito como un lenguage basado en prototipos.
//
console.log("\n--Prototipos--");

function Persona(nombre) {
  this.nombre = nombre;
  this.saludar = function () {
    return `${this.nombre} dice hola!`;
  };
}

/* Este prototipo nos ayuda a no pasar el metodo saludarIngles a todas la instancias o personas creadadas. Si lo hubieramos echo desde la plantilla  juan y sofia tuvieras el método*/
Persona.prototype.saludarIngles = function () {
  return `${this.nombre} says hi!`;
};

const juan = new Persona("Juan");
const sofia = new Persona("Sofia");
console.log(juan);
console.log(juan.saludar());
console.log(sofia);
console.log(sofia.saludarIngles());
