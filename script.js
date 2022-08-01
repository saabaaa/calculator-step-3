const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
let num1 = [];
let num2 = [];
let isOperandSelected = false;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let value = number.getAttribute("data-value");
    updateDisplay(value);
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    let amalgar = operation.getAttribute("data-operation");
    show.innerText = num1 + amalgar;
  });
});

function updateDisplay(value) {
  if (display.innerHTML == "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
  num1 += value;
}
