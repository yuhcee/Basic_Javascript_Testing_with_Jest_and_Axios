const addIndefiniteNum = require('./addIndefiniteNum');

test('addIndefinite function to exist', () => {
    expect(addIndefiniteNum).toBeDefined();
});

test('adds multiple numbers', () => {
    expect(addIndefiniteNum(1, 2, 3, 4, 5)).toBe(15);
});

test('adds false + false to be invalid input', () => {
    expect(addIndefiniteNum(false, false)).toBe("Invalid input");
});

test('adds false + true + false to be invalid input', () => {
    expect(addIndefiniteNum(false, true, false)).toBe("Invalid input");
});

test('empty string to be invalid input', () => {
    expect(addIndefiniteNum('')).toBe("Invalid input");
});

test('adds zero + zero to be zero', () => {
    expect(addIndefiniteNum(0, 0)).toBe(0);
});

test('should add floating numbers', () => {
    expect(addIndefiniteNum(0, 0, 0.1, 0.03)).toBeCloseTo(0.13);
});

test("should NOT add numbers with strings", () => {
    expect(addIndefiniteNum(0, '1', 4)).not.toBe(4);
  });

test("should NOT add numbers with strings and booleans", () => {
    expect(addIndefiniteNum(0, '1', 4,false, 1)).toBe('Invalid input');
  });

test("should NOT concatenate strings", () => {
    expect(addIndefiniteNum("4", "4")).not.toBe(8);
  });
