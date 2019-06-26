import { isNumber } from "./isNumber";

describe("isNumber", () => {
  it("returns true if is parsable number", () => {
    expect(isNumber("12")).toBe(true);
    expect(isNumber("-13")).toBe(true);
    expect(isNumber("14.5")).toBe(true);
    expect(isNumber("-17.8")).toBe(true);
  });

  it("returns false if is not a parsable number", () => {
    expect(isNumber("LOL")).toBe(false);
    expect(isNumber("12test")).toBe(false);
    expect(isNumber("000000e")).toBe(false);
    expect(isNumber("-17.8wtf")).toBe(false);
  });

  it("returns true if is a parsable integer", () => {
    expect(isNumber("1", { integer: true })).toBe(true);
    expect(isNumber("100000000", { integer: true })).toBe(true);
    expect(isNumber("-1310", { integer: true })).toBe(true);
    expect(isNumber("-131000000", { integer: true })).toBe(true);
    expect(isNumber("131000.0000000", { integer: true })).toBe(true);
  });

  it("returns false if is a parsable number but not an integer", () => {
    expect(isNumber("0.1", { integer: true })).toBe(false);
    expect(isNumber("0.100000000", { integer: true })).toBe(false);
    expect(isNumber("-1310.3", { integer: true })).toBe(false);
    expect(isNumber("-13100.0001", { integer: true })).toBe(false);
    expect(isNumber("131000.0002300", { integer: true })).toBe(false);
  });

  it("returns true if is a parsable number and larger or equal to min", () => {
    expect(isNumber("0", { min: 0 })).toBe(true);
    expect(isNumber("0.5", { min: 0 })).toBe(true);
    expect(isNumber("100000000", { min: 1000000 })).toBe(true);
    expect(isNumber("-1309.3", { min: -1309.4 })).toBe(true);
    expect(isNumber("-131.1245", { min: -131.1246 })).toBe(true);
  });

  it("returns false if is not a parsable number or less than min", () => {
    expect(isNumber("0.5", { min: 0.6 })).toBe(false);
    expect(isNumber("1000", { min: 1001 })).toBe(false);
    expect(isNumber("-1309.3", { min: -1309.2 })).toBe(false);
    expect(isNumber("-131.1245", { min: -131.1244 })).toBe(false);
  });

  it("returns true if is a parsable integer and larger or equal to min", () => {
    expect(isNumber("1", { integer: true, min: 1 })).toBe(true);
    expect(isNumber("100000000", { integer: true, min: 1000000 })).toBe(true);
    expect(isNumber("-1310", { integer: true, min: -1310 })).toBe(true);
    expect(isNumber("-131000000", { integer: true, min: -131099999 })).toBe(true);
  });

  it("returns false if is not a parsable integer or less than min", () => {
    expect(isNumber("0.5", { integer: true, min: 0 })).toBe(false);
    expect(isNumber("-0.5", { integer: true, min: -10 })).toBe(false);
    expect(isNumber("1", { integer: true, min: 10 })).toBe(false);
    expect(isNumber("1000", { integer: true, min: 1001 })).toBe(false);
    expect(isNumber("-1310", { integer: true, min: -1309 })).toBe(false);
    expect(isNumber("-1310.1200", { integer: true, min: -100000 })).toBe(false);
  });

  it("returns true if is a parsable number and between min/max", () => {
    expect(isNumber("0.5", { min: 0, max: 1 })).toBe(true);
    expect(isNumber("100000000", { min: 100000000, max: 100000000 })).toBe(true);
    expect(isNumber("-1309.45", { min: -1309.5, max: -1309.4 })).toBe(true);
    expect(isNumber("-131.1245", { min: -131.1246, max: 0 })).toBe(true);
  });

  it("returns false if is not a parsable number or not between min/max", () => {
    expect(isNumber("1m", { min: 0, max: 1 })).toBe(false);
    expect(isNumber("0.5", { min: 0.6, max: 1 })).toBe(false);
    expect(isNumber("1000", { min: 1001, max: 1002 })).toBe(false);
    expect(isNumber("-1309.45", { min: -1309.44, max: -1309.4 })).toBe(false);
    expect(isNumber("-131.1245", { min: -131.1244, max: 0 })).toBe(false);
  });

  it("returns true if is a parsable integer and between min/max", () => {
    expect(isNumber("10", { integer: true, min: 0, max: 10 })).toBe(true);
    expect(isNumber("1000", { integer: true, min: 1000, max: 1000 })).toBe(true);
    expect(isNumber("-1309", { integer: true, min: -1309, max: -1309 })).toBe(true);
    expect(isNumber("-131", { integer: true, min: -132, max: 0 })).toBe(true);
  });

  it("returns false if is not a parsable integer or not between min/max", () => {
    expect(isNumber("1m", { integer: true, min: 0, max: 1 })).toBe(false);
    expect(isNumber("0.5", { integer: true, min: 0, max: 1 })).toBe(false);
    expect(isNumber("1000", { integer: true, min: 1001, max: 100000 })).toBe(false);
    expect(isNumber("-1309", { integer: true, min: -1308, max: -1310 })).toBe(false);
    expect(isNumber("-131", { integer: true, min: -130, max: 0 })).toBe(false);
  });
});
