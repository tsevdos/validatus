import { pattern } from "./pattern";

describe("pattern", () => {
  it("returns false if you don't provide a regex argument", () => {
    expect(pattern("000")).toEqual(false);
  });

  it("returns true if regex pattern is matching", () => {
    const regex1 = /^[0-9]{3}$/; // matches 000 - 999
    const regex2 = /^[abc]$/; // matches "a", "b" or "c"
    expect(pattern("000", regex1)).toEqual(true);
    expect(pattern("123", regex1)).toEqual(true);
    expect(pattern("555", regex1)).toEqual(true);
    expect(pattern("a", regex2)).toEqual(true);
    expect(pattern("b", regex2)).toEqual(true);
    expect(pattern("c", regex2)).toEqual(true);
  });

  it("returns false if regex pattern is not matching", () => {
    const regex1 = /^[0-9]{3}$/; // matches 000 - 999
    const regex2 = /^[abc]$/; // matches "a", "b" or "c"
    expect(pattern("0", regex1)).toEqual(false);
    expect(pattern("1234", regex1)).toEqual(false);
    expect(pattern("55", regex1)).toEqual(false);
    expect(pattern("d", regex2)).toEqual(false);
    expect(pattern("ab", regex2)).toEqual(false);
    expect(pattern("cc", regex2)).toEqual(false);
  });
});
