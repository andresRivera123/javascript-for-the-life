let numero1 = 3
let numero2 = 7
let numero3 = 15
let numero4 = 17
let numero5 = 28

const esPrimo = (numero) => {
  if (numero <= 1) return false;
  for (i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(numero1 + " es primo? " + esPrimo(numero1));
console.log(numero2 + " es primo? " + esPrimo(numero2));
console.log(numero3 + " es primo? " + esPrimo(numero3));
console.log(numero4 + " es primo? " + esPrimo(numero4));
console.log(numero5 + " es primo? " + esPrimo(numero5));

