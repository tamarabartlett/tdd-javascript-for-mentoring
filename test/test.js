var expect    = require("chai").expect;
var basicMath = require("../app/basicMath");
var namegen = require("../app/name-gen")

describe('Basic Math', function() {
    it('should add 2 plus 2', function(){
      var twoPlusTwo = basicMath.twoPlusTwo()

      expect(twoPlusTwo).to.equal(4)
  });

  it('should multiply 2 times 2', function(){
    var twoTimesTwo = basicMath.twoTimesTwo()

    expect(twoTimesTwo).to.equal(4)
  });

  it('should multiply x times y', function(){
    var x = 2
    var y = 3
    var xTimesY = basicMath.xTimesY(x, y)

    expect(xTimesY).to.equal(6)
  });

  it('should multiply x times y', function(){
    var x = 3
    var y = 3
    var xTimesY = basicMath.xTimesY(x, y)

    expect(xTimesY).to.equal(9)
  });

  it('should divide x by y', function(){
    var x = 6
    var y = 3
    var xDividedByY = basicMath.xDividedByY(x, y)

    expect(xDividedByY).to.equal(2)
  });

  it('should divide x by y', function(){
    var x = 9
    var y = 3
    var xDividedByY = basicMath.xDividedByY(x, y)

    expect(xDividedByY).to.equal(3)
  });

  // it('should not try to divide by zero', function(){
  //   var x = 6
  //   var y = 0
  //   var xDividedByY = basicMath.xDividedByY(x, y)
  //
  //   expect(xDividedByY).to.throw(/Cannot divide by zero/);
  // });

  it('should get the remaninder', function(){
    var x = 6
    var y = 5
    var remainder = basicMath.remainder(x, y)

    expect(remainder).to.equal(1)
  });

  it('should get the remaninder', function(){
    var x = 7
    var y = 5
    var remainder = basicMath.remainder(x, y)

    expect(remainder).to.equal(2)
  });
});

describe('Name Generator', function() {
  it('should print saul', function(){
    var Saul = namegen.returnName(1)

    expect(Saul).to.equal("Saul")
  });

  it('should print tamara', function(){
    var tamara = namegen.returnName(2)

    expect(tamara).to.equal("tamara")
  });

  it('should print batman', function(){
    var theBat = namegen.returnName(3)

    expect(theBat).to.equal("batman")
  });
});
