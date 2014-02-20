describe('factorial', function(){
  it("is false if the inputted value is not a number", function(){
     factorial("t").should.equal(false);
  });

  it("is false if the inputted value is not a negative number", function() {
    factorial(-1).should.equal(false);
  });

  it("will multiply each decremented number, until it reaches 0", function() {
    factorial(4).should.equal(24)
  });

  it("will return 1, if the input = 0", function() {
    factorial(0).should.equal(1)
  });

});


