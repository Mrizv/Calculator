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

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(operator, ...num) {
    if (operator == '+') return add(num[0], num[1])
    if (operator == '-') return subtract(num[0], num[1])
    if (operator == '*') return multiply(num[0], num[1])
    if (operator == '/') return divide(num[0], num[1])
}