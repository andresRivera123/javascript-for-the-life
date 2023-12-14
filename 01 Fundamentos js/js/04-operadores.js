//OPERADORES ARITMÉTICO: Los que manipulan los datos númericos
console.log("--ARITMÉTICOS--")
let resultadoSuma = 1 + 4;
let resultadoResta = 3 - 5;
let resultadoMul = 4 * 4;
let resultadoDiv = 16 / 4;
let resultadoResiduo = 20 % 10;
let operacion = 10 + (5 * 3) / (10 - 5);
console.log(operacion);

//OPERADORES RELACIONALES: mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (===) y distinto de (!==)
console.log("--RELACIONALES--")
let resultadoMenor = 10 < 5
console.log("10 < 5 : " + resultadoMenor)
let resultadoMayorIgual = 50 >= 49
console.log("50 >= 49 : " + resultadoMayorIgual)
let resultadoIgualQue = 10 === "10"
console.log("10 es igual que(===) '10' :" + resultadoIgualQue)
let resultadoDiferente = 10 !== 20
console.log("10 es diferente(!==) de 20 :" + resultadoDiferente)


//OPERACIONES LÓGICOS: Combinar dos valores booleanos y devolver un resulado verdadero, falso o nulo.
console.log("--LÓGICOS--")
let resultadoAnd = true && true
console.log("true && true : " + resultadoAnd)
let resultadoAnd2 = true && true && false
console.log("true && true && false : " + resultadoAnd2)
let resultadoOr = false || true || false
console.log("false || true || false : " + resultadoOr)
let resultadoNegacion = !true
console.log("!true : " + resultadoNegacion)
