const multiplyIndefiniteNum = require("./multiplyIndefinite");

test("multiplyIndefinite function to exist", () => {
  expect(multiplyIndefiniteNum).toBeDefined();
});

test("multiplys multiple numbers", () => {
  expect(multiplyIndefiniteNum(1, 2, 3)).toBe(6);
});

test("multiplys false + false to be invalid input", () => {
  expect(multiplyIndefiniteNum(false, false)).toBe("Invalid input");
});

test("multiplys false + true + false to be invalid input", () => {
  expect(multiplyIndefiniteNum(false, true, false)).toBe("Invalid input");
});

test("empty string to be invalid input", () => {
  expect(multiplyIndefiniteNum("")).toBe("Invalid input");
});

test("multiplys zero + zero to be zero", () => {
  expect(multiplyIndefiniteNum(0, 0)).toBe(0);
});

test("should multiply floating numbers", () => {
  expect(multiplyIndefiniteNum(0, 0, 0.1, 0.03)).toBeCloseTo(0);
});

test("should NOT multiply numbers with strings", () => {
  expect(multiplyIndefiniteNum(0, "1", 4)).not.toBe(4);
});

test("should NOT multiply numbers with strings and booleans", () => {
  expect(multiplyIndefiniteNum(0, "1", 4, false, 1)).toBe("Invalid input");
});

test("should NOT concatenate strings", () => {
  expect(multiplyIndefiniteNum("4", "4")).not.toBe(8);
});
