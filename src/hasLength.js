import { isBetween } from "./utils/index";

export function hasLength(value, options = { min: 0, max: null }) {
  const { min, max } = options;

  return isBetween(value.length, min, max);
}
