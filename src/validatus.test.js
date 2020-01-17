import validatus from "./validatus";

describe("validatus", () => {
  it("returns error if value for validation is not a string", () => {
    expect(() => validatus(["isRequired", "isEmail"], null)).toThrow(TypeError);
    expect(() => validatus(["isRequired", "isEmail"], undefined)).toThrow(TypeError);
    expect(() => validatus(["isRequired", "isEmail"], [])).toThrow(TypeError);
    expect(() => validatus(["isRequired", "isEmail"], {})).toThrow(TypeError);
    expect(() => validatus(["isRequired", "isEmail"], 12)).toThrow(TypeError);
    expect(() => validatus(["isRequired", "isEmail"], true)).toThrow(TypeError);
  });

  it("returns error if validation rules is not an array with length", () => {
    expect(() => validatus(null, "test")).toThrow(TypeError);
    expect(() => validatus(undefined, "test")).toThrow(TypeError);
    expect(() => validatus([], "test")).toThrow(TypeError);
    expect(() => validatus({}, "test")).toThrow(TypeError);
    expect(() => validatus(12, "test")).toThrow(TypeError);
    expect(() => validatus(true, "test")).toThrow(TypeError);
  });

  it("returns a new function that expects the value (string) to be validated", () => {
    const emailValidator = validatus(["isRequired", "isEmail"]);
    expect(emailValidator).toBeInstanceOf(Function);
    const expectedResult = {
      isValid: true,
      validations: {
        isEmail: true,
        isRequired: true,
      },
    };
    expect(emailValidator("john@test.com")).toEqual(expectedResult);
  });

  it("corectly returns a validation object", () => {
    const expected = {
      isValid: true,
      validations: {
        isRequired: true,
      },
    };

    expect(validatus(["isRequired"], "test")).toEqual(expected);
  });

  it("corectly returns validation object", () => {
    const expected = {
      isValid: true,
      validations: {
        isRequired: true,
        isEmail: true,
        contains: true,
        inLength: true,
      },
    };
    const emailValidator = validatus([
      "isRequired",
      "isEmail",
      { contains: ["john", "@gmail"] },
      { inLength: { min: 5, max: 15 } },
    ]);

    expect(emailValidator("john@gmail.com")).toEqual(expected);
  });

  it("corectly returns validation object", () => {
    const expected = {
      isValid: false,
      validations: {
        isRequired: true,
        isEmail: true,
        contains: false,
        inLength: false,
      },
    };
    const emailValidator = validatus([
      "isRequired",
      "isEmail",
      { contains: ["john", "@gmail"] },
      { inLength: { min: 5, max: 15 } },
    ]);

    expect(emailValidator("alanTuring@Yahoo.com")).toEqual(expected);
  });
});
