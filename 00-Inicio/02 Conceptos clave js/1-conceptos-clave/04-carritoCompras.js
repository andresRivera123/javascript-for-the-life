const listaFrutas = [];
const Fruta = prompt(
  "🍇🍐Fruteria Carito & Andyto🍌🍓\n¿Qué fruta desea agregar?"
);
listaFrutas.push(Fruta);

while (window.confirm("¿Quiere agregar otra fruta?")) {
  const fruta = prompt("¿Qué fruta desea agregar?");
  listaFrutas.push(fruta);
}

console.log("Usted compró: ");
for (let fruta of listaFrutas) {
  console.log(fruta);
}
console.log("Gracias por comprar en 🍇🍐Fruteria Carito & Andyto🍌🍓 ");