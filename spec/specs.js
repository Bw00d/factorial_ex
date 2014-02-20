describe('factorial', function(){
  it("is true if the inputted value is a number", function(){
     factorial(5).should.equal(true);
  });

  it("is true if the inputted value is not a negative number", function() {
    factorial(-1).should.equal(false);
  });

  it("will decrement from given input, until it reaches 0", function() {

  });
});


