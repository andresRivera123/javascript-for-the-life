// Crear una función mkDate que reciba los parámetros day, month, year y retorne un objeto con dicha información.
// Agregarle además un método printDate que imprima por consola la fecha en formato dia/mes/año.

function mkDate(day, month, year) {
  const date = {
    day: day,
    month: month,
    year: year,
    printDate: console.log(`${day}/${month}/${year}`),
  };
  return date;
}

const myDate = mkDate(11, 2, 1999);
myDate.printDate;
