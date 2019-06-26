import { isRequired } from "./isRequired";

describe("isRequired:", () => {
  it("returns true if value (string) exists", () => {
    expect(isRequired("non empty value")).toEqual(true);
  });

  it("returns false if value (string) is empty", () => {
    expect(isRequired("")).toEqual(false);
  });

  it("returns false if value (string) is whitespace", () => {
    expect(isRequired("     ", { ignoreWhitespace: true })).toEqual(false);
    expect(isRequired("		", { ignoreWhitespace: true })).toEqual(false);
  });
});
