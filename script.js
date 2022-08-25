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
    if (num2 == "" && num == ".") {
      num2 = "0.";
    } else {
      num2 += num;
    }
  } else {
    if (num1 == "" && num == ".") {
      num1 = "0.";
    } else {
      num1 += num;
    }
  }
  updateDisplay();
}

function operator(operation) {
  isDotSelected = false;
  if (result) {
    num1 = result;
    num2 = "";
    result = null;
  }

  if (isOperandSelected && result == null) {
    secondOperand();
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

function secondOperand() {
  switch (operand) {
    case "+": {
      num1 = parseFloat(num1) + parseFloat(num2);
      break;
    }
    case "-": {
      num1 = num1 - num2;
      break;
    }
    case "×": {
      num1 = num1 * num2;
      break;
    }
    case "÷": {
      num1 = num1 / num2;
      break;
    }
  }
  num2 = "";
}

function resultNumber() {
  if (result) {
    num1 = result;
    result = "";
  }
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
  show.innerHTML = num1 + operand + num2 + "=";
  isOperandSelected = false;
  updateDisplay();
}

function percentOperation() {
  num2 = (num1 * num2) / 100;
  show.innerHTML += num2;
  updateDisplay();
}

function clearAll() {
  display.innerHTML = "0";
  show.innerHTML = "";
  num1 = "";
  num2 = "";
  isOperandSelected = false;
  isDotSelected = false;
  result = null;
  operand = null;

  //  what else is going on
}

function clearEntry() {
  if (isOperandSelected && result == null) {
    num2 = "";
    display.innerHTML = 0;
  } else {
    clearAll();
  }
}

function clearLastNumber() {
  if (isOperandSelected && num2 == "") {
  } else {
    display.innerHTML = display.innerHTML.substring(
      0,
      display.innerHTML.length - 1
    );
    if (num2 !== "") {
      num2 = display.innerHTML;
      if (display.innerHTML.length == "0") {
        display.innerHTML = "0";
      }
    } else {
      num1 = display.innerHTML;
      if (display.innerHTML.length == "0") {
        display.innerHTML = "0";
      }
    }
  }
}

function positiveNegative() {
  if (display.innerHTML.includes("-")) {
    display.innerHTML = display.innerHTML.replace("-", "");
  } else {
    display.innerHTML = "-" + display.innerHTML;
  }
  if (num2 !== "" && isOperandSelected == true) {
    //saved "-"+num
    num2 = display.innerHTML;
  } else {
    num1 = display.innerHTML;
  }
  updateDisplay();
}

function updateDisplay() {
  if (result !== null) {
    display.innerHTML = result;
  } else if (num2 !== "") {
    display.innerHTML = num2;
  } else {
    display.innerHTML = num1;
  }
}

keys.addEventListener("click", (event) => {
  const { target } = event;

  if (target.classList.contains("operator")) {
    operator(target.value);
  }

  if (target.classList.contains("clear-all")) {
    clearAll();
  }

  if (target.classList.contains("clear-entry")) {
    clearEntry();
  }

  if (target.classList.contains("positive-negative")) {
    positiveNegative();
  }

  if (target.classList.contains("clear-last-number")) {
    console.log("clear-last-number", target.value);
    clearLastNumber();
  }

  if (target.classList.contains("result")) {
    resultNumber();
  }

  if (target.classList.contains("number")) {
    digit(target.value);
  }

  if (target.classList.contains("percent")) {
    percentOperation();
  }
});
