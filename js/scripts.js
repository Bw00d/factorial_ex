var factorial = function(input) {

  if (!input.isNaN && input >= 0) {

    var numbers = [];
    var result = 1;
    for (var i = input; i > 0; i--) {
      numbers.push(i);
      result *= i;
    }

    return result;
  } else {
    return false;
  }
};

