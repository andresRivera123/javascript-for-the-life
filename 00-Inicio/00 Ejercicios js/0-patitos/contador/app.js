const buttons = document.querySelectorAll("#buttons");
const number = document.getElementById("number");
let counter = 0;

const paintNumber = () => {
  console.log(counter);
  if (counter < 0) {
    number.style.color = "#d73333";
  } else if (counter === 0) {
    number.style.color = "black";
  } else {
    number.style.color = "#0c9313";
  }
  number.textContent = counter;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "aumentar") {
      counter++;
    } else if (e.target.id === "disminuir") {
      counter--;
    } else if (e.target.id === "resetear") {
      counter = 0;
    }
    paintNumber();
  });
});
