function sum(a, b) {
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

function doOperation(a, b, op) {
  // return op(a, b);
  let val = op(a, b);
  return val;
}

console.log(sum(1, 2)); 

console.log(multiply(2, 5)); 
