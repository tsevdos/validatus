export const pattern = (value, regex = null) => {
  if (regex) {
    return regex.test(value);
  }

  return false;
};
