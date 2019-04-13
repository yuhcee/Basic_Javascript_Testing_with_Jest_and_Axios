const addString = require("./addString");

test("AddString function exists", () => {
  expect(addString).toBeDefined();
});

test("adds 1 + 2 to equal value must be a String", () => {
  expect(addString(1, 2)).toBe('Value must be a String');
});

test("adds true + false to be invalid", () => {
    expect(addString(true, false)).toBe("Value must be a String");
  });
  
  test("adds NaN + false to invalid input ", () => {
    expect(addString(NaN, false)).toBe("Value must be a String");
  });

test("adds 2 + 2 to be Value must be a String", () => {
  expect(addString(2, 2)).toBe('Value must be a String');
});

test("should output Value must be a String", () => {
  expect(addString(0, 0)).toBe('Value must be a String');
});

test("should NOT be False", () => {
  expect(addString()).toBe("Value must be a String");
});

test("should NOT have zero as parameter", () => {
  expect(addString(0)).toBe("Value must be a String");
});

test("should be wrong value if a single string is passed", () => {
  expect(addString("")).toBe("Value must be a String");
});

test("should return empty string", () => {
  expect(addString("", "")).toBe("");
});

test("should NOT concatenate string with numbers", () => {
  expect(addString("tz", 3)).toBe("Value must be a String");
});

test("should add only type of strings", () => {
  expect(addString(0, "tz")).toBe("Value must be a String");
});

test("should concatenate strings", () => {
  expect(addString("a", "b")).toBe("ab");
});

test("should take only valid inputs", () => {
  expect(addString("P", "4")).toBe("P4");
});

test("should return a valid output", () => {
  expect(addString("3", "3")).toBe("33");
});

test("should NOT add floating numbers", () => {
  expect(addString(0.1, 0.2)).toBe('Value must be a String');
});


