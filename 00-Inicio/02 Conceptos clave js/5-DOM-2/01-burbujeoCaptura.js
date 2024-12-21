//BURBUJEO Y CAPTURA: Mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento
console.log("\n--BURBUJERO Y CAPTURA");
const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

/* Fase de burbuja (bubbling): Se propaga desde el elemento hijo hasta el padre. (comportamiento por defecto) */
padre.addEventListener("click", () => console.log("Click en el padre"));
hijo.addEventListener("click", () => console.log("Click en el hijo"))
nieto.addEventListener("click", () => console.log("Click en el nieto"))

/* Fase de captura: Se propaga desde el elemento padre hasta el hijo. */

/* primary.addEventListener("click", (e) => console.log("primary"), true);
secondary.addEventListener("click", (e) => console.log("secondary"), true);
danger.addEventListener("click", (e) => console.log("danger"), true); */

/* NO QUEREMOS QUE SE PROPAGE A LOS HIJOS Y SEA DIRECTAMENTE AL EVENTO SELECCIONADO*/