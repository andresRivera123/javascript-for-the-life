const form = document.getElementById("form");
/* userName */
const userName = document.getElementById("userName");
const userNameMessage = document.getElementById("userNameMessage");
/* lastName */
const userLastname = document.getElementById("userLastname");
const userLastnameMessage = document.getElementById("userLastnameMessage");
/* Country */
const userCountry = document.getElementById("userCountry");
const userCountryMessage = document.getElementById("userCountryMessage");

const inputs = {};
const validations = {
  regexpOnlyLetters: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, //Only letters
};

const paintingErrors = (errors) => {
  errors.forEach((item) => {
    item.paragraphMessage.classList.remove("error__none");
    item.paragraphMessage.classList.remove("correct");
    item.paragraphMessage.classList.add("error");
    item.paragraphMessage.textContent = item.message;
  });
};

const paintingCorrect = (corrects) => {
  corrects.forEach((item) => {
    item.classList.remove("error__none");
    item.classList.remove("error");
    item.classList.add("correct");
    item.textContent = "Correct 😃";
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = [];
  const corrects = [];
  /* Validate USERNAME */
  if (!validations.regexpOnlyLetters.test(userName.value)) {
    errors.push({
      input: userName,
      message: "Remember, the name has only letters",
      paragraphMessage: userNameMessage,
    });
  } else {
    inputs[userName.id] = userName.value;
    corrects.push(userNameMessage);
  }

  /* Validate LASTNAME */
  if (!validations.regexpOnlyLetters.test(userLastname.value)) {
    errors.push({
      input: userLastname,
      message: "Remember, the last name has only letters",
      paragraphMessage: userLastnameMessage,
    });
  } else {
    inputs[userLastname.id] = userLastname.value;
    corrects.push(userLastnameMessage);
  }

  /* Validate COUNTRY*/
  if(userCountry.value === "nothing"){
    errors.push({
        input: userCountry,
        message: "Select an option",
        paragraphMessage: userCountryMessage,
    })
  }else{
    inputs[userCountry.id] = userCountry.value;
    corrects.push(userCountryMessage);
  }


  paintingCorrect(corrects);
  paintingErrors(errors);
  if (errors.length === 0) {
    console.log(inputs);
  }
});
