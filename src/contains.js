import { typeOf } from "./utils/";

export function contains(value, options = null) {
  const isArrayWithLength = options && ["array"].includes(typeOf(options)) && options.length;

  if (isArrayWithLength) {
    return options
      .reduce((acc, subStr) => [...acc, value.indexOf(subStr) >= 0], [])
      .every((val) => val);
  }

  return options ? value.indexOf(options) >= 0 : false;
}
