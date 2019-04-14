function divide(a, b) {
  if (typeof a === "number" && typeof b === "number" && a && b !== 0) {
    return a / b;
  }

  return "Value must be a number";
}

module.exports = divide;
