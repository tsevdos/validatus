import * as validators from "./index";
import { typeOf } from "./utils/";

export default function validatus(validationRules, value) {
  if (arguments.length === 1) {
    return (_value) => validatus(validationRules, _value);
  }

  const validationRulesIsNotArrayWithLength =
    !["array"].includes(typeOf(validationRules)) || !validationRules.length;
  const valueIsNotString = !["string"].includes(typeOf(value));

  if (validationRulesIsNotArrayWithLength) {
    throw TypeError("Expected a non empty array of validation rules (strings and/or objects)");
  }

  if (valueIsNotString) {
    throw TypeError(`Value MUST be a string but got ${typeOf(validationRules)}`);
  }

  const validationResults = validationRules.reduce((acc, validator) => {
    const validatorWithoutOptions = typeof validator === "string";
    const validatorName = validatorWithoutOptions ? validator : Object.keys(validator)[0];
    const args = !validatorWithoutOptions && Object.values(validator)[0];
    const validationResult = validatorWithoutOptions
      ? validators[validatorName](value)
      : validators[validatorName](value, args);

    return { ...acc, [validatorName]: validationResult };
  }, {});

  return {
    isValid: Object.values(validationResults).every((val) => val),
    validations: validationResults,
  };
}
