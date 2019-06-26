const englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
const arabicLocales = [
  "AE",
  "BH",
  "DZ",
  "EG",
  "IQ",
  "JO",
  "KW",
  "LB",
  "LY",
  "MA",
  "QM",
  "QA",
  "SA",
  "SD",
  "SY",
  "TN",
  "YE",
];
export const alpha = {
  "en-US": /^[A-Z]+$/i,
  "bg-BG": /^[А-Я]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "el-GR": /^[Α-ω]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "nb-NO": /^[A-ZÆØÅ]+$/i,
  "nn-NO": /^[A-ZÆØÅ]+$/i,
  "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sv-SE": /^[A-ZÅÄÖ]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

export const alphanumeric = {
  "en-US": /^[0-9A-Z]+$/i,
  "bg-BG": /^[0-9А-Я]+$/i,
  "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[0-9A-ZÆØÅ]+$/i,
  "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
  "el-GR": /^[0-9Α-ω]+$/i,
  "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
  "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
  "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[0-9А-ЯЁ]+$/i,
  "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
  "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

englishLocales.forEach((locale) => {
  locale = `en-${locale}`;
  alpha[locale] = alpha["en-US"];
  alphanumeric[locale] = alphanumeric["en-US"];
});

arabicLocales.forEach((locale) => {
  locale = `ar-${locale}`;
  alpha[locale] = alpha.ar;
  alphanumeric[locale] = alphanumeric.ar;
});
