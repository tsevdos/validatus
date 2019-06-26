import { isBetween } from "./isBetween";

describe("isBetween", () => {
  it("returns true with defaults since the default min value is the NEGATIVE_INFINITY", () => {
    expect(isBetween(4)).toBe(true);
    expect(isBetween(-4)).toBe(true);
    expect(isBetween(-10000000000234)).toBe(true);
  });

  it("returns true if number is equal or larger than min boundary and there is no max boundary", () => {
    expect(isBetween(10, 5)).toBe(true);
    expect(isBetween(20, 20)).toBe(true);
    expect(isBetween(10000, 10000)).toBe(true);
    expect(isBetween(10005, 10000)).toBe(true);
    expect(isBetween(-5, -10)).toBe(true);
    expect(isBetween(-10, -10)).toBe(true);
    expect(isBetween(-10000, -10000)).toBe(true);
    expect(isBetween(-9999, -10000)).toBe(true);
  });

  it("returns false if number is less than min boundary and there is no max boundary", () => {
    expect(isBetween(4, 5)).toBe(false);
    expect(isBetween(19, 20)).toBe(false);
    expect(isBetween(9999, 10000)).toBe(false);
    expect(isBetween(-11, -10)).toBe(false);
    expect(isBetween(-15, -10)).toBe(false);
    expect(isBetween(-10001, -10000)).toBe(false);
  });

  it("returns true if number is equal or in between min and max boundaries", () => {
    expect(isBetween(10, 5, 20)).toBe(true);
    expect(isBetween(20, 20, 20)).toBe(true);
    expect(isBetween(10000, 900, 10100)).toBe(true);
    expect(isBetween(-5, -10, 0)).toBe(true);
    expect(isBetween(-10, -10, -10)).toBe(true);
    expect(isBetween(-10000, -10000, -10000)).toBe(true);
    expect(isBetween(-9999, -10000, 0)).toBe(true);
  });

  it("returns false if number is not in between min and max boundaries", () => {
    expect(isBetween(4, 5, 15)).toBe(false);
    expect(isBetween(19, 20, 100)).toBe(false);
    expect(isBetween(9999, 10000, 10005)).toBe(false);
    expect(isBetween(-11, -10, 10)).toBe(false);
    expect(isBetween(-15, -10, -5)).toBe(false);
    expect(isBetween(-10001, -10000, -500)).toBe(false);
  });
});
