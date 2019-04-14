function multiplyIndefiniteNumbers() {
  var diff = 1;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      diff *= arguments[i];
    } else {
      return "Invalid input";
    }
  }
  return diff;
}

module.exports = multiplyIndefiniteNumbers;
