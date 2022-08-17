const keys = document.querySelector(".numbers");
const display = document.querySelector("#display");
const show = document.querySelector("#show");
let num1 = "";
let num2 = "";
let result = "";
let displayValue = "0";
let isOperandSelected = false;

function digit(num) {
  if (result !== "") {
    result = "";
    num1 = num;
  } else if (isOperandSelected == true) {
    num2 += num;
    console.log(num2);
  } else {
    num1 += num;
  }
  updateDisplay();
}

function updateDisplay() {
  if (result !== "") {
    display.innerHTML = result;
  } else if (num2 !== "") {
    display.innerHTML = num2;
  } else {
    display.innerHTML = num1;
  }
}

function operator(operation) {
  if (operation === "numberPow2") {
    result = parseFloat(Math.pow(display.innerHTML, 2));
    show.innerHTML = `sqr(${display.innerHTML}) `;
  } else if (operation === "numberPow3") {
    result = parseFloat(Math.pow(display.innerHTML, 3));
    show.innerHTML = `sqr(${display.innerHTML}) `;
  } else if (operation === "radical") {
    result = parseFloat(Math.sqrt(display.innerHTML));
    show.innerHTML = `√(${display.innerHTML})`;
  } else if (operation === "1/x") {
    result = parseFloat(1 / display.innerHTML);
    show.innerHTML = `1/(${display.innerHTML})`;
  } else {
    show.innerHTML = num1 + operation;
    result;
  }
  isOperandSelected = true;
  updateDisplay();
}

keys.addEventListener("click", (event) => {
  const { target } = event;

  if (target.classList.contains("operator")) {
    operator(target.value);

    console.log("operator", target.value);
    return;
  }

  if (target.classList.contains("decimal")) {
    console.log("decimal", target.value);
    return;
  }

  if (target.classList.contains("all-clear")) {
    console.log("clear", target.value);
    return;
  }

  if (target.classList.contains("positive-negative")) {
    console.log("positive-negative", target.value);
    return;
  }

  if (target.classList.contains("clear-one")) {
    console.log("clear-one", target.value);
    return;
  }

  if (target.classList.contains("number")) {
    digit(target.value);
  }
});
console.log("hi");
