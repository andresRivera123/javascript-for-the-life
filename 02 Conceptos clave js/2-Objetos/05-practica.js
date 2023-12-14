const yo = {
    nombre: "Andres",
    apellido: "Rivera",
    edad: 24,
    hobbies: ["Basketball", "Piano", "Ukelele", "Leer"],
    comidaFavorita: {
      ecuador: ["Caldo de morcilla", "Encebollado", "Secos"],
      españa: ["Tortilla española", "Bolleria", "Paella"]
    },
    saltar: () => {
      console.log("Procede a saltar")
    },
    decir: (palabra) => {
      console.log("Procede a decir: " + palabra)
    },
    nombres() {
      console.log(`Nombre completo: ${this.nombre} ${this.apellido}`)
    },
    listarComidaEcuador() {
      console.log()
      this.comidaFavorita.ecuador.forEach((comida) => console.log(comida))
    }
  }
  
  console.log(yo)
  yo.saltar()
  yo.comidaFavorita.españa.push("Lechon")
  yo.decir("Carito")
  yo.nombres()
  yo.listarComidaEcuador()
  
console.log("CRUD")
// create
yo.altura = 1.73
// delete
delete yo.edad
// update
yo.apellido = "Valle"
// read
console.log(yo)

  
console.log("FOR IN")
for(propiedades in yo){
    console.log(yo[propiedades])
}