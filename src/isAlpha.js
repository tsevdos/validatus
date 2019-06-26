import { alpha } from "./utils/localesConfig";

export const isAlpha = (value, locale = "en-US") => alpha[locale].test(value);
