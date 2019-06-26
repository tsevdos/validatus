import validatus from "../src/validatus";

// Email example
const emailInput = document.querySelector("#email");
const emailValidationResult = document.querySelector("#email-validation-result");
const emailIsRequiredDiv = document.querySelector("#email-required");
const emailIsEmailDiv = document.querySelector("#email-is-email");
const emailContainsDiv = document.querySelector("#email-contains");
const emailLengthDiv = document.querySelector("#email-length");
// Validator function
const emailValidator = validatus([
  "isRequired",
  "isEmail",
  { contains: ["john", "@gmail"] },
  { hasLength: { min: 5, max: 15 } },
]);

emailInput.addEventListener("input", (e) => {
  const { isValid, validations } = emailValidator(e.target.value);
  emailValidationResult.value = JSON.stringify({ isValid, validations }, null, 2);

  if (isValid) {
    emailInput.classList.remove("is-invalid");
  } else {
    emailInput.classList.add("is-invalid");
  }

  emailIsRequiredDiv.style.display = validations.isRequired ? "none" : "block";
  emailIsEmailDiv.style.display = validations.isEmail ? "none" : "block";
  emailContainsDiv.style.display = validations.contains ? "none" : "block";
  emailLengthDiv.style.display = validations.hasLength ? "none" : "block";
});

// Username example
const usernameInput = document.querySelector("#username");
const usernameValidationResult = document.querySelector("#username-validation-result");
const usernameIsRequiredDiv = document.querySelector("#username-required");
const usernameIsAlpha = document.querySelector("#username-is-alpha");
// Validator function
const usernameValidator = validatus(["isRequired", "isAlpha"]);

usernameInput.addEventListener("input", (e) => {
  const { isValid, validations } = usernameValidator(e.target.value);
  usernameValidationResult.value = JSON.stringify({ isValid, validations }, null, 2);

  if (isValid) {
    usernameInput.classList.remove("is-invalid");
  } else {
    usernameInput.classList.add("is-invalid");
  }

  usernameIsRequiredDiv.style.display = validations.isRequired ? "none" : "block";
  usernameIsAlpha.style.display = validations.isAlpha ? "none" : "block";
});

// License plate example
const licensePlateInput = document.querySelector("#license-plate");
const licensePlateValidationResult = document.querySelector("#license-plate-validation-result");
const licensePlateIsRequiredDiv = document.querySelector("#license-plate-required");
const licensePlateIsAlphanumeric = document.querySelector("#license-plate-is-alphanumeric");
// Validator function
const licensePlateValidator = validatus(["isRequired", "isAlphanumeric"]);

licensePlateInput.addEventListener("input", (e) => {
  const { isValid, validations } = licensePlateValidator(e.target.value);
  licensePlateValidationResult.value = JSON.stringify({ isValid, validations }, null, 2);

  if (isValid) {
    licensePlateInput.classList.remove("is-invalid");
  } else {
    licensePlateInput.classList.add("is-invalid");
  }

  licensePlateIsRequiredDiv.style.display = validations.isRequired ? "none" : "block";
  licensePlateIsAlphanumeric.style.display = validations.isAlphanumeric ? "none" : "block";
});

// Number example
const numberInput = document.querySelector("#number");
const numberValidationResult = document.querySelector("#number-validation-result");
const numberIsRequiredDiv = document.querySelector("#number-required");
const numberIsNumber = document.querySelector("#is-number");

// Validator function
const numberValidator = validatus([
  "isRequired",
  { isNumber: { parseInteger: false, min: -1110, max: 1000 } },
]);

numberInput.addEventListener("input", (e) => {
  const { isValid, validations } = numberValidator(e.target.value);
  numberValidationResult.value = JSON.stringify({ isValid, validations }, null, 2);

  if (isValid) {
    numberInput.classList.remove("is-invalid");
  } else {
    numberInput.classList.add("is-invalid");
  }

  numberIsRequiredDiv.style.display = validations.isRequired ? "none" : "block";
  numberIsNumber.style.display = validations.isNumber ? "none" : "block";
});

// With custom error
const containsInput = document.querySelector("#contains");
const containsValidationResult = document.querySelector("#contains-validation-result");
const containsErrorDiv = document.querySelector("#contains-error-div");
const validatorConfig = ["John", "Doe"];
// Validator function
const contains = validatus([{ contains: validatorConfig }]);

containsInput.addEventListener("input", (e) => {
  const { isValid, validations } = contains(e.target.value);
  containsValidationResult.value = JSON.stringify({ isValid, validations }, null, 2);

  if (isValid) {
    containsInput.classList.remove("is-invalid");
  } else {
    containsInput.classList.add("is-invalid");
  }

  containsErrorDiv.innerHTML = `Must contain both ${validatorConfig.join(" ")} substrings...`;
  containsErrorDiv.style.display = validations.contains ? "none" : "block";
});
