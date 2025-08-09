import sum from "./sum.mjs";

describe("Multiple test", () => {
  test("add 2 + 2 equals 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("add 1 + 2 equals 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("add -1 + 2 equals 4", () => {
    expect(sum(-1,2)).toBe(1);
})

});
