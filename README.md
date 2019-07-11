# Validatus

> An easy to use, declarative, light-weight form validation library with zero dependencies!

## Intro

Validatus allows you to easily create validation functions by applying one or more validation rules on a string and get instant results (as plain objects) on these validations. The libary has **zero** dependencies and is only **5kb** (**2.25kb** if gzipped). Have a look at the validation rules and API and the examples.

## Installation

```
npm install --save validatus

or

yarn add validatus

```

## Usage

You can easily create a custom validator by passing to `validatus` function a configuration array (see below the full API of the indipendent validators). Finally you can use this validator by passing any string to it. That's it (2 lines of code)! The return value of the validator will be an object that describes which validators pass and if the end result is valid or not.

```js
import validatus from "validatus";

// Create a simple requiredEmailValidator
const requiredEmailValidator = validatus(["isRequired", "isEmail"]);
requiredEmailValidator("john@gmail.com");
// returns the below object
{
  "isValid": true,
  "validations": {
    "isRequired": true,
    "isEmail": true
  }
}

// Create a more complicated validator
const veryCustomEmailValidator = validatus([
  "isRequired",
  "isEmail",
  { contains: ["john", "@gmail"] },
  { inLength: { min: 5, max: 15 } },
]);

veryCustomEmailValidator("john@gmail.com");
// returns the below object
{
  "isValid": true,
  "validations": {
    "isRequired": true,
    "isEmail": true,
    "contains": true,
    "inLength": true
  }
}

veryCustomEmailValidator("johnsmith@mycompany.com");
// returns the below object
{
  "isValid": false,
  "validations": {
    "isRequired": true,
    "isEmail": true,
    "contains": false,
    "inLength": false
  }
}
```

For one time usage validators you can also pass to `validatus` function the 2 arguments in sequence, first the configuration array and second the string to validate.

```js
import validatus from "validatus";

// Create a simple requiredEmailValidator
validatus(["isRequired", "isEmail"], "john@gmail.com");
// returns the below object
{
  "isValid": true,
  "validations": {
    "isRequired": true,
    "isEmail": true
  }
}
```

For more examples please check the [examples](https://github.com/tsevdos/validatus/blob/master/examples/examples.js) directory.

## More details

`Validatus` function requires two arguments, a configuration array with the validation rules and the value (string) that will be validated by these rules. You can easily create multiple validators, by passing only the first argument (array of validation rules) and get back a new function that you can use to validate your values - please have a look at the above examples, it is much easier than it sounds. The validation rules **must** be an **array of strings and / or objects** and the validated value **must** be a **string**.

Each validator will validate the string `value`. With this in mind you can use any of the available validation rules simply by passing their names as strings (ex. `"isEmail"`). If you need to pass any options to a specific validation rule you need to pass an object with the name of the validator as key and its options as the value (ex. `{ inLength: { min:3, max: 10} }`).

After providing the validated string, you get back a returned an object that describes the validation results. The specific object has 2 keys, the first one is the `isValid` key (**boolean**) and is true only if **all** validation rules are passing. In any other case is false. The second object key `validations`, is an object with key names the names of the applied validation rules and values their validation status (again **boolean**, for example `validations: { isEmail: true, inLength: false}`). If an individual validation rule is passing, the boolean value will be true otherwise will be false.

## Validators

| Name           | Options type                                            | Options example                    | Default Options                                              | Usage                                                     |
| -------------- | ------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| isRequired     | object: { ignoreWhitespace?: boolean; }                 | { ignoreWhitespace: true }         | { ignoreWhitespace: false }                                  | "isRequired" or { isRequired: { ignoreWhitespace: true }} |
| isEmail        | -                                                       | -                                  | -                                                            | "isEmail"                                                 |
| contains       | array of strings: string[]                              | ["john", "@gmail"]                 | null                                                         | { contains: ["john", "@gmail"] }                          |
| inLength       | object: { min: number; max?: number; }                  | { min: 5, max: 15 }                | { min: 0, max: null }                                        | "inLength" or { inLength: { min: 5, max: 15 } }           |
| pattern        | regerx                                                  | /^[0-9]{3}\$/                      | null                                                         | { pattern: /^[0-9]{3}\$/ }                                |
| isAlpha        | string (\*)                                             | "el-GR"                            | "en-US"                                                      | { isAlpha: "el-GR" }                                      |
| isAlphanumeric | string (\*)                                             | "el-GR"                            | "en-US"                                                      | { isAlphanumeric: "el-GR" }                               |
| isNumber       | object: integer?: boolean; min: number; max?: number; } | { integer: true, min: 0, max: 15 } | { integer: false, min: Number.NEGATIVE_INFINITY, max: null } | { isNumber: { integer: true, min: 0, max: 15 } }          |

\* The supported locales are: "en-US", "en-GB", "en-AU", "en-HK", "en-IN", "en-NZ", "en-ZA", "en-ZM", "bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "es-ES", "fr-FR", "it-IT", "nb-NO", "nn-NO", "nl-NL", "hu-HU", "pl-PL", "pt-PT", "ru-RU", "sl-SI", "sk-SK", "sr-RS", "sr-RS@latin", "sv-SE", "tr-TR", "uk-UA", "ar-AE", "ar-BH", "ar-DZ", "ar-EG", "ar-IQ", "ar-JO", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-QM", "ar-QA", "ar-SA", "ar-SD", "ar-SY", "ar-TN", "ar-YE".

## FAQ

### I want more examples.

Sure, have a look into the [examples](https://github.com/tsevdos/validatus/blob/master/examples/examples.js) directory.

## Contributing

Feel free to contribute (see below how you can build, lint and test the package).

### Setting up the development enviroment

You need to have node.js installed (any recent node / npm version will do). When you are ready, you can install all dependencies and run the webpack dev server by typing the below commands:

```
npm install
npm start
open http://localhost:3000
```

Feel free to change the port from `package.json`.

### Lint files

Lint all js files:

```
npm run lint
```

Auto-fix linting issues:

```
npm run lint:fix
```

### Run tests

Run all test by typing:

```
npm test
```

## License

MIT

## Authors

- [John Tsevdos](http://tsevdos.me)

## Upcoming validators

- [ ] isUrl
- [ ] isUuid

## Other ideas for validators

- [ ] isDate
- [ ] isTime
- [ ] isdatetime
- [ ] color
