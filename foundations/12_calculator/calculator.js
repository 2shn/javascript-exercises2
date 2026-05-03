const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, item) => acc + item, 0);
};

const multiply = function(array) {
  return array.reduce((acc, item) => acc * item, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(number) {
  if (!number || number === 1) return 1;
    let currentNumber = number;
  for ( let i = 1 ; i < number ; i++ ) {
    currentNumber *= i;
  }
  return currentNumber;
};

factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
