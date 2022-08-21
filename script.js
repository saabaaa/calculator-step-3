const keys = document.querySelector(".numbers");
const display = document.querySelector("#display");
const show = document.querySelector("#show");
let num1 = "";
let num2 = "";
let result = null;
let operand = null;
let displayValue = "0";
let isOperandSelected = false;
let isDotSelected = false;

function digit(num) {
  if (num == ".") {
    if (isDotSelected) {
      return;
    }
    isDotSelected = true;
  }
  //read it again
  if (result !== null) {
    result = null;
    num1 = "";
    num2 = "";
    num1 = num;
  } else if (isOperandSelected == true) {
    num2 += num;
  } else {
    num1 += num;
  }
  updateDisplay();
}

function updateDisplay() {
  if (result !== null) {
    display.innerHTML = result;
    show.innerHTML += num2 + "=";
  } else if (num2 !== "") {
    display.innerHTML = num2;
  } else {
    display.innerHTML = num1;
  }
}

function operator(operation) {
  isDotSelected = false;
  if (result) {
    num1 = result;
    num2 = "";
    result = null;
  }

  if (isOperandSelected && result == null) {
    operand = operation;
    // secondOperand();
    num2 = "";
  }

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
    operand = operation;
    isOperandSelected = true;
  }
  updateDisplay();
}

function resultNumber() {
  switch (operand) {
    case "+": {
      result = parseFloat(num1) + parseFloat(num2);
      break;
    }
    case "-": {
      result = num1 - num2;
      break;
    }
    case "×": {
      result = num1 * num2;
      break;
    }
    case "÷": {
      result = num1 / num2;
      break;
    }
  }
  isOperandSelected = false;
  updateDisplay();
}

function resetCalculator() {
  display.innerHTML = "0";
  show.innerHTML = "";
  num1 = "";
  num2 = "";
  isOperandSelected = false;

  //  what else is going on
}

// function secondOperand(){}
// function positiveNegative(){}

keys.addEventListener("click", (event) => {
  const { target } = event;

  if (target.classList.contains("operator")) {
    operator(target.value);
  }

  if (target.classList.contains("clear-all")) {
    resetCalculator();
  }

  if (target.classList.contains("positive-negative")) {
    console.log("positive-negative", target.value);
    return;
  }

  if (target.classList.contains("clear-one")) {
    console.log("clear-one", target.value);
    return;
  }

  if (target.classList.contains("result")) {
    console.log("result", target.value);
    resultNumber();
  }

  if (target.classList.contains("number")) {
    digit(target.value);
  }
});
