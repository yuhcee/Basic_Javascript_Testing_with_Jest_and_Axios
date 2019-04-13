function addIndefiniteNumbers() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      sum += arguments[i];
    } else {
      return "Invalid input";
    }
  }
  return sum;
}

module.exports = addIndefiniteNumbers;
