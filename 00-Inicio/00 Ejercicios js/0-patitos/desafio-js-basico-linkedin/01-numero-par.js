let numero1 = 9;
let numero2 = 12;
let numero3 = 151;

const esPar = (numero) => {
  const primo = numero % 2;
  if (primo === 0 && numero >=2) return true;
  else return false;
};

console.log("El numero " + numero1 + " es par? " + esPar(numero1))
console.log("El numero " + numero2 + " es par? " + esPar(numero2))
console.log("El numero " + numero3 + " es par? " + esPar(numero3))
