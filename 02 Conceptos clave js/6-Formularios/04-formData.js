//form data: Proporciona una manera sencila de construir un conjunto de parejsa clave/valor que representan los campos de un formulario y sus valores.
//Están destinados principalmente para el envío de los datos del formulario
// https://developer.mozilla.org/es/docs/Web/API/FormData


console.log("\n--FORM DATA");

const formulario = document.getElementById("form");

formulario.addEventListener('submit', e => {
    e.preventDefault()
    const inputs = new FormData(formulario)
    for(let item of inputs){
        console.log(item)
    }
    //⬇ get: Para obtener por el name del input
    console.log(inputs.get("userName"))
    console.log(inputs.get("userEmail"))
})