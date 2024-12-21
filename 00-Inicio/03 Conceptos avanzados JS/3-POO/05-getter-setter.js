console.log("\n--Getter y setter--");
/* Usar getter y setter es una alternativa para quien usa POO de forma más escricta */
/* 
    Los get no reciben parámetros.
    Los set pueden recibir solo un parámetro.
    Los set y get se llaman sin los paréntesis ()
*/

class Persona {
  contructor(nombre) {
    this.nombre = nombre;
  }

  set setNombre(nombre) {
    return (this.nombre = nombre);
  }

  get getNombre() {
    return this.nombre;
  }

  saludar() {
    return `${this.nombre} dice hola!`;
  }
}

const juan = new Persona();//Crear
juan.setNombre = "Manuel"//enviar nombre
console.log(juan.getNombre);//obetener nombre
