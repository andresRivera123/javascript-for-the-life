// Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra. Precio = 100, IVA = 21
// Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

function precioTotal(precio, IVA){
    console.log("Precio: " + precio + "| IVA: " + IVA)
    return precio + (precio*IVA)/100
}

console.log("Valor con IVA: " + precioTotal(100, 21))
