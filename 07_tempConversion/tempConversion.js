const convertToCelsius = function(degree) {
  let degreeInCel = (degree-32)*(5/9);
  let degreeInCelRound = Math.round(degreeInCel * 10)/ 10;
  return degreeInCelRound;
};

const convertToFahrenheit = function(degree) {
  let degreeInFar = (degree*(9/5)+32);
  let degreeInFarRound = Math.round(degreeInFar * 10)/ 10;
  return degreeInFarRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
