function addString(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  return "Value must be a String";
}
module.exports = addString;
