describe('recursiveFactorial', function(){
  // it("is false if the inputted value is not a number", function(){
  //    recursiveFactorial("t").should.equal(false);
  // });

  // it("is false if the inputted value is not a negative number", function() {
  //   recursiveFactorial(-1).should.equal(false);
  // });

  // it("will decrement itself, until it reaches 0", function() {
  //   recursiveFactorial(9).should.equal(0);
  // });
  it("will multiply each decremental number by itself", function() {
    recursiveFactorial(5).should.equal(120);
  })

  /*

  it("will return 1, if the input = 0", function() {
    factorial(0).should.equal(1)
  });*/
});


