//Validación de formularios incorporada: Utiliza características de validación de formularios HTML5, es muy poco segura.
/*
Esto se realiza mediante el uso de atributos de validación en los elementos del formulario.

required: Especifica si un campo de formulario debe completarse antes de que se pueda enviar el formulario.
minlength y maxlength: Especifican la longitud mínima y máxima de los datos de texto (cadenas).
min y max: Especifican los valores mínimo y máximo de los tipos de entrada numéricos.
type: Especifica si los datos deben ser un número, una dirección de correo electrónico o algún otro tipo de preajuste específico.
pattern: Especifica una expresión regular que define un patrón que los datos que se introduzcan deben seguir.
*/

//Validación con JS: se codifica utilizando JavaScript. Esta validación es completamente personalizable, pero debes crearlo todo (o usar una biblioteca).

const formulario = document.getElementById("form");
const userName = document.getElementById("userNameJS");
const userEmail = document.querySelector("input[name='userEmailJS']");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Validar solo letras
const regUserEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/; //Validar correo

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!regUserName.test(userName.value)) {
    console.log("Formato no válido, solo letras porfavor");
    return;
  }
  if (!regUserEmail.test(userEmail.value)) {
    console.log(
      "Formulario no válido, escriba correctamente el correo electrónico"
    );
    return;
  }

  console.log("FORMULARIO ENVIADO 😍😊👌");
});
