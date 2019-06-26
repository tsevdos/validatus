export function isBetween(value, min = Number.NEGATIVE_INFINITY, max = null) {
  return max ? value >= min && value <= max : value >= min;
}
