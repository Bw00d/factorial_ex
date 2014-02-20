var recursiveFactorial = function(number) {
  if (number > 0) {
    console.log(number);
    var newNumber = recursiveFactorial(number - 1);
    return newNumber;
  } else {
    return number;
  }

};
