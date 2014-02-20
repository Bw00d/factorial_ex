var productsArray;

var factorial = function(input) {

  if (!input.isNaN && input >= 0) {

    var result = 1;
    var products = [];

    if (input === 0) {
      result = 1;
    } else {
      for (var i = input; i > 1; i--) {

        result *= i;
        products.push(result);

        //outputResults(result);
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

    newProductsArray = myProducts.split[','];

    for (var x = 0; x < newProductsArray.length; x++) {
      $('#triangle').append(newProductsArray[x] + ' - ');
    }

  };

  $('#factorial').submit(function(event) {




    //$('#result').text(factorial($('#number').val()));
    $('#result').prepend(factorial($('#number').val()));

    adjustProducts(productsArray);

    $('#number').val('');
    $('#result').show();

    event.preventDefault();
  });

});


