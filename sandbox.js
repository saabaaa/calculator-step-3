const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue } = calculator;
  display.innerHTML = calculator.displayValue =
    displayValue === "0" ? digit : displayValue + digit;
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    display.innerHTML = calculator.displayValue += dot;
  }
}

function updateDisplay() {
  const display = document.querySelector("#display");
  display.value = calculator.displayValue;
}

const keys = document.querySelector(".numbers");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    console.log("operator", target.value);
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    console.log("clear", target.value);
    return;
  }

  if (target.classList.contains("sign")) {
    console.log("positive-negative", target.value);
    return;
  }

  if (target.classList.contains("clear-one")) {
    console.log("clear-one", target.value);
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});
