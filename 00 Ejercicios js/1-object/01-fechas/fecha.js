// Crear una función mkDate que reciba los parámetros day, month, year y retorne un objeto con dicha información.
// Agregarle además un método printDate que imprima por consola la fecha en formato dia/mes/año.

function mkDate(day, month, year) {
  return date = {
    day: day,
    month: month,
    year: year,
    isValid() {
      //Validate day
      if (day < 1 || day > 31 || day === undefined) {
        return false;
      }
      //Validate month
      if (month < 1 || month > 12 || month === undefined) {
        return false;
      }
      //Validate year
      if (year < 1970 || year > 3000 || year === undefined) {
        return false;
      }
      return true;
    },
    printDate() {
      if (this.isValid()) {
        return `${day}/${month}/${year}`;
      } else {
        return "Invalid date";
      }
    },
    isBefore(date2) {
      if (this.year < date2.year) {
        return true;
      } else if (this.year === date2.year) {
        if (this.month < date2.month) {
          return true;
        } else if (this.month === date2.month) {
          if (this.day < date2.day) {
            return true;
          } else if (this.day === date2.day) {
            return "Same dates";
          }
        }
      }
      return false;
    },
    isAfter(date3) {
      if (this.year > date3.year) {
        return true;
      } else if (this.year === date3.year) {
        if (this.month > date3.month) {
          return true;
        } else if (this.month === date3.month) {
          if (this.day > date3.day) {
            return true;
          } else if (this.day === date3.day) {
            return "Same dates";
          }
        }
      }
      return false;
    },
  };
}

console.log("----EJERCICIO 1----")
const newDate = mkDate(11, 2, 1999);
console.log(newDate.isValid())

/* Modificar el objeto que retorna la función y agregar el método isValid. 
isValid debe validar que los tres campos estén seteados y que 1 <= day <= 31, 1 <= month <= 12, 1970 <= year < 3000. 
printDate deberá imprimir fecha inválida si la fecha no es válida.
 */

console.log("----EJERCICIO 2----")
console.log("-Fecha(11,2,1999)");
const myDate = mkDate(11, 2, 1999);
console.log(myDate.isValid());
console.log(myDate.printDate());
console.log("-Fecha(15, 13, 2001)");
const myDate2 = mkDate(15, 13, 2001);
console.log(myDate2.isValid());
console.log(myDate2.printDate());
console.log("-Fecha(31, 6, 1969)");
const myDate3 = mkDate(31, 6, 1969);
console.log(myDate3.isValid());
console.log(myDate3.printDate());

//Seguir modificando el objeto... agregar los métodos isBefore e isAfter que reciban otro objeto date como parámetro y retornen un boolean 
//Indicando si la fecha pasada como parámetro es anterior y posterior respectivamente.
console.log("----EJERCICIO 3----")
const date1 = mkDate(29, 6, 2000);
const date2 = mkDate(30, 6, 2000);
const date3 = mkDate(28, 6, 1999);
console.log("(29, 6, 2000) is before (30, 6, 2000)? " + date1.isBefore(date2))
console.log("(29, 6, 2000) is after (30, 6, 2000)? " + date1.isAfter(date2))
console.log("(29, 6, 2000) is after (28, 6, 1999)? " + date1.isAfter(date3))
