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
/* Date */
const userDate = document.getElementById("userDate");
const userDateMessage = document.getElementById("userDateMessage");
/* Email */
const userEmail = document.getElementById("userEmail");
const userEmailMessage = document.getElementById("userEmailMessage");
/* Icon eye */
const iconVisible = document.querySelectorAll(".icon__eye");
/* Password */
const userPassword = document.getElementById("userPassword");
const userPasswordMessage = document.getElementById("userPasswordMessage");
/* Repeat Password */
const userPasswordRepeat = document.getElementById("userPasswordRepeat");
const userPasswordRepeatMessage = document.getElementById(
  "userPasswordRepeatMessage"
);
/* Template */
const template = document.getElementById("template");
const footer = document.querySelector("footer");

const user = {
  userName: "",
  userLastname: "",
  userCountry: "",
  userDate: "",
  userEmail: "",
  userPassword: "",
};

const validations = {
  regexpOnlyLetters: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, //Only letters
  regexEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  regexPassword:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, //password: 1 minuscule, 1 uppercase, 1 number, 1 special characters and have 8 characters minimum
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
    item.textContent = "✅";
  });
};

const changePropertyHidden = (e, number) => {
  e.target.src = "./img/hidden.png";
  e.target.id = "iconHidden" + number;
  e.target.alt = "Hidden password";
};

const changePropertyVisible = (e, number) => {
  e.target.src = "./img/visible.png";
  e.target.id = "iconVisible" + number;
  e.target.alt = "Visible password";
};

iconVisible.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    /* button password */
    if (e.target.id === "iconVisible1") {
      changePropertyHidden(e, "1");
      userPassword.type = "text";
      return;
    } else if (e.target.id === "iconHidden1") {
      changePropertyVisible(e, "1");
      userPassword.type = "password";
      return;
    }
    /* button repeat password */
    if (e.target.id === "iconVisible2") {
      changePropertyHidden(e, "2");
      userPasswordRepeat.type = "text";
      return;
    } else if (e.target.id === "iconHidden2") {
      changePropertyVisible(e, "2");
      userPasswordRepeat.type = "password";
      return;
    }
  });
});

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
    user.userName = userName.value;
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
    user.userLastname = userLastname.value;
    corrects.push(userLastnameMessage);
  }

  /* Validate COUNTRY*/
  if (userCountry.value === "nothing") {
    errors.push({
      input: userCountry,
      message: "Select an option",
      paragraphMessage: userCountryMessage,
    });
  } else {
    user.userCountry = userCountry.value;
    corrects.push(userCountryMessage);
  }

  /* Validate DATE BIRTH */
  if (userDate.value === "") {
    errors.push({
      input: userDate,
      message: "Select your date",
      paragraphMessage: userDateMessage,
    });
  } else {
    user.userDate = userDate.value;
    corrects.push(userDateMessage);
  }

  /* Validate EMAIL */
  if (!validations.regexEmail.test(userEmail.value)) {
    errors.push({
      input: userEmail,
      message: "Enter a valid email address",
      paragraphMessage: userEmailMessage,
    });
  } else {
    user.userEmail = userEmail.value;
    corrects.push(userEmailMessage);
  }

  /* Validate PASSWORD */
  if (!validations.regexPassword.test(userPassword.value)) {
    errors.push({
      input: userPassword,
      message:
        "8 characters minimum with uppercase, lowercase, numbers and special characters",
      paragraphMessage: userPasswordMessage,
    });
  } else {
    user.userPassword = userPassword.value;
    corrects.push(userPasswordMessage);
  }

  /* Validate REPEAT PASSWORD */
  if (userPasswordRepeat.value !== userPassword.value) {
    errors.push({
      input: userPasswordRepeat,
      message: "Different passwords, retype it",
      paragraphMessage: userPasswordRepeatMessage,
    });
  } else {
    corrects.push(userPasswordRepeatMessage);
  }

  paintingCorrect(corrects);
  paintingErrors(errors);
  if (errors.length === 0) {
    paintingTemplate();
  }
});

const paintingTemplate = () => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("#completeName").textContent =
    "Welcome " + user.userName + " " + user.userLastname;
  clone.querySelector("#email").textContent = user.userEmail;
  clone.querySelector("#country").textContent = user.userCountry;
  clone.querySelector("#date").textContent = user.userDate
  footer.appendChild(clone);
};
/* 
    const clone = template.content.cloneNode();
    clone.querySelector("#completeName").textContent = item.userName;
    fragment.appendChild(clone); */
/*   template.appendChild(fragment); */
