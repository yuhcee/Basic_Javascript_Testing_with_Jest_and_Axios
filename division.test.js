const divide = require("./division");

test("divide function exists", () => {
  expect(divide).toBeDefined();
});

test("divides 2 / 1 to equal 1", () => {
  expect(divide(2, 1)).toBe(2);
});

test("divides true / false to be invalid", () => {
  expect(divide(true, false)).toBe("Value must be a number");
});

test("divides NaN / false to invalid input", () => {
  expect(divide(NaN, false)).toBe("Value must be a number");
});

test("divides 2 / 2 to equal 0", () => {
  expect(divide(2, 2)).toBe(1);
});

test("divides 2 / 3 to NOT equal 1", () => {
  expect(divide(2, 3)).not.toBe(1);
});

test("should output zero", () => {
  expect(divide(0, 0)).toBe("Value must be a number");
});

test("should NOT have only one parameter", () => {
  expect(divide(0)).toBe("Value must be a number");
});

test("should be defined", () => {
  expect(divide()).toBe("Value must be a number");
});

test("should be wrong value if a single string is passed", () => {
  expect(divide("")).toBe("Value must be a number");
});

test("should NOT be empty string", () => {
  expect(divide("", "")).toBe("Value must be a number");
});

test("should NOT concatenate string with numbers", () => {
  expect(divide("tz", 3)).toBe("Value must be a number");
});

test("should add only type of numbers", () => {
  expect(divide(0, "tz")).toBe("Value must be a number");
});

test("should NOT minus strings", () => {
  expect(divide("a", "b")).toBe("Value must be a number");
});
