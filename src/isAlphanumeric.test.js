import { isAlphanumeric } from "./isAlphanumeric";

describe("isAlphanumeric", () => {
  it(`returns true if it contains only english characters (locales en-US, en-GB,
      en-AU, en-HK, en-IN, en-NZ, en-ZA, en-ZM)`, () => {
    expect(isAlphanumeric("Hello123")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-US")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-GB")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-AU")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-HK")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-IN")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-NZ")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-ZA")).toEqual(true);
    expect(isAlphanumeric("Hello123", "en-ZM")).toEqual(true);
  });

  it("returns true if it contains only arabic characters without special chars", () => {
    expect(isAlphanumeric("مرحبا123", "ar-AE")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-BH")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-DZ")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-EG")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-IQ")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-JO")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-KW")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-LB")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-LY")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-MA")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-QM")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-QA")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-SA")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-SD")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-SY")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-TN")).toEqual(true);
    expect(isAlphanumeric("مرحبا123", "ar-YE")).toEqual(true);
  });

  it("returns true if it contains only bulgarian characters (bg-BG)", () => {
    expect(isAlphanumeric("Здравейте123", "bg-BG")).toEqual(true);
  });

  it("returns true if it contains only czech characters (cs-CZ)", () => {
    expect(isAlphanumeric("Svět123", "cs-CZ")).toEqual(true);
  });

  it("returns true if it contains only danish characters (da-DK)", () => {
    expect(isAlphanumeric("først123", "da-DK")).toEqual(true);
  });

  it("returns true if it contains only german characters (de-DE)", () => {
    expect(isAlphanumeric("schön123", "de-DE")).toEqual(true);
  });

  it("returns true if it contains only greek characters (el-GR)", () => {
    expect(isAlphanumeric("Γειά123", "el-GR")).toEqual(true);
  });

  it("returns true if it contains only spanish characters (es-ES)", () => {
    expect(isAlphanumeric("España123", "es-ES")).toEqual(true);
  });

  it("returns true if it contains only french characters (fr-FR)", () => {
    expect(isAlphanumeric("Allô123", "fr-FR")).toEqual(true);
  });

  it("returns true if it contains only italian characters (it-IT)", () => {
    expect(isAlphanumeric("Felicità123", "it-IT")).toEqual(true);
  });

  it("returns true if it contains only norwegian characters (nb-NO / nn-NO)", () => {
    expect(isAlphanumeric("Værså123", "nb-NO")).toEqual(true);
    expect(isAlphanumeric("Værså123", "nn-NO")).toEqual(true);
  });

  it("returns true if it contains only dutch characters (nl-NL)", () => {
    expect(isAlphanumeric("Hallo123", "nl-NL")).toEqual(true);
  });

  it("returns true if it contains only hungarian characters (hu-HU)", () => {
    expect(isAlphanumeric("Világ123", "hu-HU")).toEqual(true);
  });

  it("returns true if it contains only polish characters (pl-PL)", () => {
    expect(isAlphanumeric("szczęście123", "pl-PL")).toEqual(true);
  });

  it("returns true if it contains only portuguese characters (pt-PT)", () => {
    expect(isAlphanumeric("herança123", "pt-PT")).toEqual(true);
  });

  it("returns true if it contains only russian characters (ru-RU)", () => {
    expect(isAlphanumeric("Привет123", "ru-RU")).toEqual(true);
  });

  it("returns true if it contains only slovenian characters (sl-SI)", () => {
    expect(isAlphanumeric("Živijo123", "sl-SI")).toEqual(true);
  });

  it("returns true if it contains only slovak characters (sk-SK)", () => {
    expect(isAlphanumeric("ríša123", "sk-SK")).toEqual(true);
  });

  it("returns true if it contains only serbian characters (sr-RS)", () => {
    expect(isAlphanumeric("Здраво123", "sr-RS")).toEqual(true);
  });

  it("returns true if it contains only serbian (latin) characters (sr-RS@latin)", () => {
    expect(isAlphanumeric("Zdravo123", "sr-RS@latin")).toEqual(true);
  });

  it("returns true if it contains only swedish characters (sv-SE)", () => {
    expect(isAlphanumeric("värld123", "sv-SE")).toEqual(true);
  });

  it("returns true if it contains only turkish characters (tr-TR)", () => {
    expect(isAlphanumeric("Dünya123", "tr-TR")).toEqual(true);
  });

  it("returns true if it contains only ukrainian characters (uk-UA)", () => {
    expect(isAlphanumeric("Здрастуйте123", "uk-UA")).toEqual(true);
  });
});
