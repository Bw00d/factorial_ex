var productsArray;

var factorial = function(input) {

  if (!input.isNaN && input >= 0) {

    var result = 1;
    var products = [];

    if (input === 0) {
      result = 1;
      products.push(1);
    } else {
      for (var i = input; i > 0; i--) {

        result *= i;
        products.push(result);
      }
    }

    productsArray = products;

    return result;

  } else {
    return false;
  }
};


$(document).ready(function() {

  var adjustProducts = function(myProducts) {

    for (var x = 0; x < myProducts.length - 2; x++) {
      if (x === myProducts.length - 1) {
        $('#triangle').append('<span id="last-product">' + myProducts[x] + '</span>');
      } else {
        $('#triangle').append(myProducts[x] + '<br>');
      }
    }

  };

  $('#factorial').submit(function(event) {
    $('#triangle').empty();
    $('#final-result').empty();
    $('#final-result').prepend(factorial($('#number').val()));

    adjustProducts(productsArray);

    $('#number').val('');
    $('#result').show();

    event.preventDefault();
  });

});


