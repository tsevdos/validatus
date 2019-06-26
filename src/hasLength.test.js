import { hasLength } from "./hasLength";

describe("hasLength", () => {
  it("returns true if string's length is equal or larger than min (default 0)", () => {
    expect(hasLength("")).toBe(true);
    expect(hasLength("test")).toBe(true);
  });

  it("returns true if string's length is equal or larger than min (using options min: 0)", () => {
    expect(hasLength("", { min: 0 })).toBe(true);
    expect(hasLength("test", { min: 0 })).toBe(true);
  });

  it("returns false if string's length is less than min", () => {
    expect(hasLength("test", { min: 5 })).toBe(false);
    expect(hasLength("    ", { min: 5 })).toBe(false);
  });

  it("returns true if string's length is equal or larger than min and less than or equal to max", () => {
    expect(hasLength("testing", { min: 5, max: 10 })).toBe(true);
    expect(hasLength("testing", { min: 5, max: 7 })).toBe(true);
    expect(hasLength("test", { min: 4, max: 100 })).toBe(true);
    expect(hasLength("    ", { min: 4, max: 100 })).toBe(true);
  });

  it("returns false if string's length is not equal or larger than min and less than or equal to max", () => {
    expect(hasLength("testing", { min: 10, max: 20 })).toBe(false);
    expect(hasLength("testing", { min: 8, max: 18 })).toBe(false);
    expect(hasLength("testing", { min: 0, max: 4 })).toBe(false);
    expect(hasLength(". testing .", { min: 0, max: 8 })).toBe(false);
  });
});
