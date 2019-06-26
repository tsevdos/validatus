import { isBetween } from "./utils/index";

export function isNumber(
  value,
  options = { integer: false, min: Number.NEGATIVE_INFINITY, max: null }
) {
  const { integer, min, max } = options;
  const valueNum = Number(value);
  const isNum = !Number.isNaN(valueNum);

  if (!isNum || value === "") {
    return false;
  }

  if (isNum && integer) {
    return Number.isInteger(valueNum) && isBetween(valueNum, min, max);
  }

  return isBetween(valueNum, min, max);
}
