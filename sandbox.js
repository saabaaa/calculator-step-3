const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    display.innerHTML = calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    display.innerHTML = calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    display.innerHTML = calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function resetCalculator() {
  display.innerHTML = calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    display.innerHTML = calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    display.innerHTML = calculator.displayValue += dot;
  }
}

function updateDisplay() {
  const display = document.querySelector("#display");
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".numbers");

keys.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;
  if (!target.matches("button")) {
    return;
  }

  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      handleOperator(value);
      break;
    case ".":
      inputDecimal(value);
      break;
    case "all-clear":
      resetCalculator();
      break;
    default:
      // check if the key is an integer
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }

  updateDisplay();
});

// if (target.classList.contains("sign")) {
//   console.log("positive-negative", target.value);
//   return;
// }

// if (target.classList.contains("clear-one")) {
//   console.log("clear-one", target.value);
//   return;
// }
