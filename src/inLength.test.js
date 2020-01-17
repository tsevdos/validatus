import { inLength } from "./inLength";

describe("inLength", () => {
  it("returns true if string's length is equal or larger than min (default 0)", () => {
    expect(inLength("")).toBe(true);
    expect(inLength("test")).toBe(true);
  });

  it("returns true if string's length is equal or larger than min (using options min: 0)", () => {
    expect(inLength("", { min: 0 })).toBe(true);
    expect(inLength("test", { min: 0 })).toBe(true);
  });

  it("returns false if string's length is less than min", () => {
    expect(inLength("test", { min: 5 })).toBe(false);
    expect(inLength("    ", { min: 5 })).toBe(false);
  });

  it("returns true if string's length is equal or larger than min and less than or equal to max", () => {
    expect(inLength("testing", { min: 5, max: 10 })).toBe(true);
    expect(inLength("testing", { min: 5, max: 7 })).toBe(true);
    expect(inLength("test", { min: 4, max: 100 })).toBe(true);
    expect(inLength("    ", { min: 4, max: 100 })).toBe(true);
  });

  it("returns false if string's length is not equal or larger than min and less than or equal to max", () => {
    expect(inLength("testing", { min: 10, max: 20 })).toBe(false);
    expect(inLength("testing", { min: 8, max: 18 })).toBe(false);
    expect(inLength("testing", { min: 0, max: 4 })).toBe(false);
    expect(inLength(". testing .", { min: 0, max: 8 })).toBe(false);
  });
});
