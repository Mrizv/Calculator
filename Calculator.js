function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, ...num) {
  if (operator === "+") return add(num[0], num[1]);
  if (operator === "-") return subtract(num[0], num[1]);
  if (operator === "*") return multiply(num[0], num[1]);
  if (operator === "/") return divide(num[0], num[1]);
}

const allDigits = document.querySelectorAll(".digit");
const content = document.getElementById("content");

let currValue = "";
let operand1 = null;
let currOperator = "";

allDigits.forEach((button) => {
  button.addEventListener("click", () => {
    currValue += button.innerText;
    content.textContent = currValue;
  });
});

const allOperators = document.querySelectorAll(".operator");

allOperators.forEach((button) => {
  button.addEventListener("click", () => {
    if (currValue !== "") {
      if (operand1 !== null && currOperator !== "") {
        operand1 = operate(currOperator, operand1, Number(currValue));
      } else {
        operand1 = Number(currValue);
      }

      currValue = "";
      content.textContent = operand1;
    }

    currOperator = button.innerText;
  });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  if (operand1 !== null && currValue !== "") {
    let operand2 = Number(currValue);

    if (currOperator === "/" && operand2 === 0) {
      content.textContent = "ERR";
      currValue = "";
      return;
    }

    const result = operate(currOperator, operand1, operand2);
    content.textContent = result;
    currValue = result.toString();
    operand1 = result;
    currOperator = "";
  }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  currValue = "";
  operand1 = null;
  currOperator = "";
  content.textContent = "";
});
