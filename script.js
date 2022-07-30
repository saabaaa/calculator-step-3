export default {};
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
let num1;
let num2;
let operation;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let value = number.getAttribute("data-value");
    if (display.innerHTML == "0") {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    let amalgar = operation.getAttribute("data-operation");
    if (operation == "multi") {
      num1 + num2;
    }
    // show.innerText = value + amalgar;
  });
});
// numbers.addEventListener("click", show);
// function show(input){
//     console.log(input);
// }

// numbers.forEach((button) => {
//     button.addEventListener("click", () => {
//     let value = button.getAttribute("data-value");
//     console.log()
// });
// });
//alan nemidonam vaghti operation bezani che etefaghi bayad biofte
//yani data num1 kija bayad zakhire beshe bad display pak she v num2 namayesh dade beshe bad harkodom az ina
//koja taarif beshe to contoroller ya display ...
