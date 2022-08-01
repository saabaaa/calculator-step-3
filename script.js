const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector("#equal");
let num1 = [];
let num2 = [];
let isOperandSelected = false;
let amalgar;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let value = number.getAttribute("data-value");
    updateDisplay(value);
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    amalgar = operation.getAttribute("data-operation");
    isOperandSelected = true;
    show.innerHTML = num1 + amalgar;
  });
});

equal.addEventListener("click", () => {
  console.log(amalgar);
  display pak mikini va natige ro mizari toosh
});
function updateDisplay(value) {
  if (isOperandSelected) {
    display.innerHTML = "";
    num2 += value;
    display.innerHTML = num2;
  } else {
    if (display.innerHTML == "0") {
      display.innerHTML = value;
    } else {
      display.innerHTML += value;
    }
    num1 += value;
  }
}
