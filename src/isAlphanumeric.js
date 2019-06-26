import { alphanumeric } from "./utils/localesConfig";

export const isAlphanumeric = (value, locale = "en-US") => alphanumeric[locale].test(value);
