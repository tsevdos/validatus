import { isEmail } from "./isEmail";

describe("isEmail", () => {
  it("returns true if email is valid", () => {
    expect(isEmail("john@gmail.com")).toEqual(true);
    expect(isEmail("john@test.co")).toEqual(true);
    expect(isEmail("JOHN@test.com")).toEqual(true);
    expect(isEmail("JOHN@GMAIL.CO")).toEqual(true);
    expect(isEmail("john123@gmail123.com")).toEqual(true);
    expect(isEmail("j1oh2n@gm3ai4l.com")).toEqual(true);
  });

  it("returns false if not email", () => {
    expect(isEmail("john")).toEqual(false);
    expect(isEmail("john@gmail")).toEqual(false);
    expect(isEmail("john@gmail.c")).toEqual(false);
    expect(isEmail("j1oh2n@gm3ai4l.123")).toEqual(false);
    expect(isEmail("j1oh2n@gm3ai4l.1")).toEqual(false);
  });
});
