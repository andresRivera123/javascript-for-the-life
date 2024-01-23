console.log("MÓDULOS");
//Proporcina mecanismos para dividir código JS en módulos separados, que se puedan importar cuando sea necesario.

console.log("IIFE");
//Las expresiones de función ejecutadas inmediantamente(IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se modifiquen.
//Es un patrón de diseño tambien conocido cómo función autoejecutable.
//NOTA: Revisar archivo frutas.js se encuentra la otra constante

/* 1) IIFE con function*/
(function () {
    const fruta = "🍓";
    console.log(fruta);
  }) ();