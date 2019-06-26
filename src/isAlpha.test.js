import { isAlpha } from "./isAlpha";

describe("isAlpha", () => {
  it(`returns true if it contains only english characters (locales en-US, en-GB,
      en-AU, en-HK, en-IN, en-NZ, en-ZA, en-ZM)`, () => {
    expect(isAlpha("Hello")).toEqual(true);
    expect(isAlpha("Hello", "en-US")).toEqual(true);
    expect(isAlpha("Hello", "en-GB")).toEqual(true);
    expect(isAlpha("Hello", "en-AU")).toEqual(true);
    expect(isAlpha("Hello", "en-HK")).toEqual(true);
    expect(isAlpha("Hello", "en-IN")).toEqual(true);
    expect(isAlpha("Hello", "en-NZ")).toEqual(true);
    expect(isAlpha("Hello", "en-ZA")).toEqual(true);
    expect(isAlpha("Hello", "en-ZM")).toEqual(true);
  });

  it("returns true if it contains only arabic characters without special chars", () => {
    expect(isAlpha("مرحبا", "ar-AE")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-BH")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-DZ")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-EG")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-IQ")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-JO")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-KW")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-LB")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-LY")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-MA")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-QM")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-QA")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-SA")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-SD")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-SY")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-TN")).toEqual(true);
    expect(isAlpha("مرحبا", "ar-YE")).toEqual(true);
  });

  it("returns true if it contains only bulgarian characters (bg-BG)", () => {
    expect(isAlpha("Здравейте", "bg-BG")).toEqual(true);
  });

  it("returns true if it contains only czech characters (cs-CZ)", () => {
    expect(isAlpha("Svět", "cs-CZ")).toEqual(true);
  });

  it("returns true if it contains only danish characters (da-DK)", () => {
    expect(isAlpha("først", "da-DK")).toEqual(true);
  });

  it("returns true if it contains only german characters (de-DE)", () => {
    expect(isAlpha("schön", "de-DE")).toEqual(true);
  });

  it("returns true if it contains only greek characters (el-GR)", () => {
    expect(isAlpha("Γειά", "el-GR")).toEqual(true);
  });

  it("returns true if it contains only spanish characters (es-ES)", () => {
    expect(isAlpha("España", "es-ES")).toEqual(true);
  });

  it("returns true if it contains only french characters (fr-FR)", () => {
    expect(isAlpha("Allô", "fr-FR")).toEqual(true);
  });

  it("returns true if it contains only italian characters (it-IT)", () => {
    expect(isAlpha("Felicità", "it-IT")).toEqual(true);
  });

  it("returns true if it contains only norwegian characters (nb-NO / nn-NO)", () => {
    expect(isAlpha("Værså", "nb-NO")).toEqual(true);
    expect(isAlpha("Værså", "nn-NO")).toEqual(true);
  });

  it("returns true if it contains only dutch characters (nl-NL)", () => {
    expect(isAlpha("Hallo", "nl-NL")).toEqual(true);
  });

  it("returns true if it contains only hungarian characters (hu-HU)", () => {
    expect(isAlpha("Világ", "hu-HU")).toEqual(true);
  });

  it("returns true if it contains only polish characters (pl-PL)", () => {
    expect(isAlpha("szczęście", "pl-PL")).toEqual(true);
  });

  it("returns true if it contains only portuguese characters (pt-PT)", () => {
    expect(isAlpha("herança", "pt-PT")).toEqual(true);
  });

  it("returns true if it contains only russian characters (ru-RU)", () => {
    expect(isAlpha("Привет", "ru-RU")).toEqual(true);
  });

  it("returns true if it contains only slovenian characters (sl-SI)", () => {
    expect(isAlpha("Živijo", "sl-SI")).toEqual(true);
  });

  it("returns true if it contains only slovak characters (sk-SK)", () => {
    expect(isAlpha("ríša", "sk-SK")).toEqual(true);
  });

  it("returns true if it contains only serbian characters (sr-RS)", () => {
    expect(isAlpha("Здраво", "sr-RS")).toEqual(true);
  });

  it("returns true if it contains only serbian (latin) characters (sr-RS@latin)", () => {
    expect(isAlpha("Zdravo", "sr-RS@latin")).toEqual(true);
  });

  it("returns true if it contains only swedish characters (sv-SE)", () => {
    expect(isAlpha("värld", "sv-SE")).toEqual(true);
  });

  it("returns true if it contains only turkish characters (tr-TR)", () => {
    expect(isAlpha("Dünya", "tr-TR")).toEqual(true);
  });

  it("returns true if it contains only ukrainian characters (uk-UA)", () => {
    expect(isAlpha("Здрастуйте", "uk-UA")).toEqual(true);
  });
});
