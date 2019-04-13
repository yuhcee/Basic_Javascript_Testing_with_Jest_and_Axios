function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    return "Value must be a number";
  }
  module.exports = sum;
  
  