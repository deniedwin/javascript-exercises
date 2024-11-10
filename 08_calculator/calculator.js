const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let sum = arr.reduce((acu, item) => acu + item, 0);
  return sum;
};

const multiply = function(arr) {
  let mult = arr.reduce((acu, item) => acu * item, 1);
  return mult
};

const power = function(a, b) {
	let pwr = Math.pow(a, b);
  return pwr;
};

const factorial = function(num) {
  if(num <= 1){
    return 1;
  }
  else{
    let fact = 1;
    for(let i = num; i >= 1; i--){
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
