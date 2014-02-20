var recursiveFactorial = function(number) {
  if (parseInt(number) === 0) {
    return 1;
  } else if (!number.isNaN && number > 0) {
    return number * recursiveFactorial(number - 1);
  } else {
    return false;
  }
};

$(document).ready(function() {

  $('#factorial').submit(function(event) {
    $('#final-result').empty();
    var myNumber = $('#number').val();
    $('#final-result').prepend(recursiveFactorial(myNumber));

    $('#number').val('');
    $('#result').show();

    event.preventDefault();
  });

});
