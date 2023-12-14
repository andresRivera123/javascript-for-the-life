/* Modificar el objeto que retorna la función y agregar el método isValid. 
isValid debe validar que los tres campos estén seteados y que 1 <= day <= 31, 1 <= month <= 12, 1970 <= year < 3000. 
printDate deberá imprimir fecha inválida si la fecha no es válida.
 */

function mkDate(day, month, year) {
  return (date = {
    day: day,
    month: month,
    year: year,
    isValid() {
      //Validar dia
      if (day < 1 || day > 31 || day === undefined) {
        return false;
      }
      //Validar mes
      if (month < 1 || month > 12 || month === undefined) {
        return false;
      }
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
  });
}

console.log("--Fecha(11,2,1999)--");
const myDate = mkDate(11, 2, 1999);
console.log(myDate.isValid());
console.log(myDate.printDate());
console.log("--Fecha(15, 13, 2001)--");
const myDate2 = mkDate(15, 13, 2001);
console.log(myDate2.isValid());
console.log(myDate2.printDate());
console.log("--Fecha(31, 6, 1969)--");
const myDate3 = mkDate(31, 6, 1969);
console.log(myDate3.isValid());
console.log(myDate3.printDate());