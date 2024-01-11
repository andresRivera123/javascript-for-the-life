const formulario = document.getElementById("form");
const userName = document.getElementById("userName");
const userEmail = document.querySelector("input[name='userEmail']");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertSuccess = document.getElementById("alertSuccess");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Validar solo letras
const regUserEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/; //Validar correo

const pintarMensajeExito = () => {
  alertSuccess.classList.remove("d-none");
  alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.menssage;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alertSuccess.classList.add("d-none");

  const errores = [];

  //Validar espacios en blanco trim()
  if (!regUserName.test(userName.value) || !userName.value.trim()) {
    userName.classList.add("is-invalid");
    errores.push({
      tipo: alertName,
      menssage:
        "Formato no válido en el campo nombre, solo letras, no espacios",
    });
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
  }

  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    userEmail.classList.add("is-invalid");
    errores.push({
      tipo: alertEmail,
      menssage: "Formato no válido en el correo, escriba correctamente",
    });
  } else {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alertEmail.classList.add("d-none");
  }

  if (errores.length != 0) {
    pintarMensajeError(errores);
    return;
  }

  pintarMensajeExito();
  console.log("FORMULARIO ENVIADO 😍😊👌");
});
