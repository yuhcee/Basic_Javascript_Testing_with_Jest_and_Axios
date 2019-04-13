const difference = require("./difference");

test("sum function exists", () => {
  expect(difference).toBeDefined();
});

test("adds 2 minus 1 to equal 1", () => {
  expect(difference(2, 1)).toBe(1);
});

test("adds true - false to be invalid", () => {
  expect(difference(true, false)).toBe("Value must be a number");
});

test("adds NaN - false to invalid input", () => {
  expect(difference(NaN, false)).toBe("Value must be a number");
});

test("adds 2 - 2 to equal 0", () => {
  expect(difference(2, 2)).toBe(0);
});

test("adds 2 - 3 to NOT equal 1", () => {
  expect(difference(2, 3)).not.toBe(1);
});

test("should output zero", () => {
  expect(difference(0, 0)).toBe(0);
});

test("should NOT be False", () => {
  expect(difference()).toBe("Value must be a number");
});

test("should NOT have only one parameter", () => {
  expect(difference(0)).toBe("Value must be a number");
});

test("should be wrong value if a single string is passed", () => {
  expect(difference("")).toBe("Value must be a number");
});

test("should NOT be empty string", () => {
  expect(difference("", "")).toBe("Value must be a number");
});

test("should NOT concatenate string with numbers", () => {
  expect(difference("tz", 3)).toBe("Value must be a number");
});

test("should add only type of numbers", () => {
  expect(difference(0, "tz")).toBe("Value must be a number");
});

test("should NOT minus strings", () => {
  expect(difference("a", "b")).toBe("Value must be a number");
});
