const sum = require("./sum");

test("sum function exists", () => {
  expect(sum).toBeDefined();
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds true + false to be invalid", () => {
    expect(sum(true, false)).toBe("Value must be a number");
  });
  
  test("adds NaN + false to invalid input ", () => {
    expect(sum(NaN, false)).toBe("Value must be a number");
  });

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("adds 2 + 3 to NOT equal 7", () => {
  expect(sum(2, 3)).not.toBe(7);
});

test("should output zero", () => {
  expect(sum(0, 0)).toBe(0);
});

test("should NOT be False", () => {
  expect(sum()).toBe("Value must be a number");
});

test("should NOT have only one parameter", () => {
  expect(sum(0)).toBe("Value must be a number");
});

test("should be wrong value if a single string is passed", () => {
  expect(sum("")).toBe("Value must be a number");
});

test("should NOT be empty string", () => {
  expect(sum("", "")).toBe("Value must be a number");
});

test("should NOT concatenate string with numbers", () => {
  expect(sum("tz", 3)).toBe("Value must be a number");
});

test("should add only type of numbers", () => {
  expect(sum(0, "tz")).toBe("Value must be a number");
});

test("should NOT concatenate strings", () => {
  expect(sum("a", "b")).toBe("Value must be a number");
});

test("should take only valid inputs", () => {
  expect(sum("2", "4")).toBe("Value must be a number");
});

test("should return a valid output", () => {
  expect(sum(3, 3)).not.toBe("6");
});

test("should be greater than 11", () => {
  expect(sum(6, 6)).toBeGreaterThan(11);
});

test("should be less than or equal to 11", () => {
  expect(sum(6, 4)).toBeLessThanOrEqual(10);
});

test("should add floating numbers", () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test("should add floating numbers", () => {
  expect(sum(0.3, 0.2)).toBeCloseTo(0.5);
});
