import { contains } from "./contains";

describe("contains", () => {
  it("returns false with no options", () => {
    expect(contains("john@gmail.com")).toEqual(false);
  });

  it("returns true if substring exists", () => {
    expect(contains("john@gmail.com", "@gmail")).toEqual(true);
    expect(contains("I don't like iPhones...", "iPhone")).toEqual(true);
  });

  it("returns true if all substrings (array) match", () => {
    expect(
      contains("I'm available on Tuesday, Thursday and Sunday", ["Tuesday", "Thursday"])
    ).toEqual(true);
  });

  it("returns false if substring doesn't match", () => {
    expect(contains("john@gmail.com", "@yahoo")).toEqual(false);
    expect(contains("john@gmail.com", "@hotmail")).toEqual(false);
  });

  it("returns false if any of the substrings (array) don't match", () => {
    expect(
      contains("I'm available on Tuesday, Thursday and Sunday", ["Monday", "Thursday"])
    ).toEqual(false);
    expect(
      contains("I'm available on Tuesday, Thursday and Sunday", ["Tuesday", "Friday"])
    ).toEqual(false);
  });
});
