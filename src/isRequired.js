export function isRequired(value, options = { ignoreWhitespace: false }) {
  const strLength = options.ignoreWhitespace ? value.trim().length : value.length;

  return !(strLength === 0);
}
