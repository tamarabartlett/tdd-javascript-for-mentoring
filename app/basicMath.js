exports.twoPlusTwo = function(){
  return 4
}

exports.twoTimesTwo = function(){
  return 2 * 2
}

exports.xTimesY = function(x, y){
  console.log("X is: " + x + " Y is: " + y)
  return x * y
}

exports.xDividedByY = function(x, y){
  console.log("X is: " + x + " Y is: " + y)
  if (y == 0) {
    throw new Error("Cannot divide by zero");
  }

  return x/y
}
exports.remainder = function(x, y){
  return x%y
}
