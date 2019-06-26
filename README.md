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

`Validatus` function requires two arguments, a configuration array with the validation rules and the value (string) that will be validated by these rules. You can easily create multiple validators, by passing only the first argument (array of validation rules) and get back a new function that you can use to validate your values - please have a look at the below examples, it is much easier than it sounds like. The validation rules **must** be an **array of strings and / or objects** (read below the full API) and the validated value **must** be a string.

Each validator rule will validate the string `value`. With this in mind you can use any of the available validation rules simply by passing their names as strings (ex. `"isEmail"`). If you need to pass any options to a specific validation rule you need to pass an object with the name of the validator as key and its options as the value (ex. `{ hasLength: { min:3, max: 10} }`).

Finally, you get back an object that describes the validation results. The specific object has 2 keys, the first one is the `isValid` key that its type of **boolean** and is true only if **all** validation rules are passing. In any other case is false. The second object key `validations`, is an object with key names the names of the applied validation rules and values their validation status (again **boolean**, for example `validations: { isEmail: true, hasLength: false}`). If an individual validation rule is passing, the boolean value will be true otherwise will be false.

Example:

At the below example the value `email` will be validated with the following validators: **isRequired**, **isEmail**, **contains** and **hasLength** (read more information about the available validators below). As you can see the last 2 validators have options. The **isValid** key will be true **ONLY** if all validators return true. You can also get individually every validation result from the **validations** object.

For more examples please check the [examples](https://github.com/tsevdos/validatus/blob/master/examples/examples.js) directory.

```js
import validatus from "validatus";

const requiredEmailValidator = validatus(["isRequired", "isEmail"]);
const veryCustomEmailValidator = validatus([
  "isRequired",
  "isEmail",
  { contains: ["john", "@gmail"] },
  { hasLength: { min: 5, max: 15 } },
]);

requiredEmailValidator("john@gmail.com");
// returns the below object
{
  "isValid": true,
  "validations": {
    "isRequired": true,
    "isEmail": true
  }
}

veryCustomEmailValidator("john@gmail.com");
// returns the below object
{
  "isValid": true,
  "validations": {
    "isRequired": true,
    "isEmail": true,
    "contains": true,
    "hasLength": true
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
    "hasLength": false
  }
}
```

## Validators

| Name           | Options type                                              | Options example                      | Default Options                                                | Usage                                                     |
| -------------- | --------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------- |
| isRequired     | object: { ignoreWhitespace?: boolean; }                   | { ignoreWhitespace: true }           | { ignoreWhitespace: false }                                    | "isRequired" or { isRequired: { ignoreWhitespace: true }} |
| isEmail        | -                                                         | -                                    | -                                                              | "isEmail"                                                 |
| contains       | array of strings: string[]                                | ["john", "@gmail"]                   | null                                                           | { contains: ["john", "@gmail"] }                          |
| hasLength      | object: { min: number; max?: number; }                    | { min: 5, max: 15 }                  | { min: 0, max: null }                                          | "hasLength" or { hasLength: { min: 5, max: 15 } }         |
| pattern        | regerx                                                    | /^[0-9]{3}\$/                        | null                                                           | { pattern: /^[0-9]{3}\$/ }                                |
| isAlpha        | string (\*)                                               | "el-GR"                              | "en-US"                                                        | { isAlpha: "el-GR" }                                      |
| isAlphanumeric | string (\*)                                               | "el-GR"                              | "en-US"                                                        | { isAlphanumeric: "el-GR" }                               |
| isNumber       | object: toInteger?: boolean; min: number; max?: number; } | { toInteger: true, min: 0, max: 15 } | { toInteger: false, min: Number.NEGATIVE_INFINITY, max: null } | { isNumber: { toInteger: true, min: 0, max: 15 } }        |

\* The supported locales are listed below:

- en-US
- en-GB
- en-AU
- en-HK
- en-IN
- en-NZ
- en-ZA
- en-ZM
- bg-BG
- cs-CZ
- da-DK
- de-DE
- el-GR
- es-ES
- fr-FR
- it-IT
- nb-NO
- nn-NO
- nl-NL
- hu-HU
- pl-PL
- pt-PT
- ru-RU
- sl-SI
- sk-SK
- sr-RS
- sr-RS@latin
- sv-SE
- tr-TR
- uk-UA
- ar-AE
- ar-BH
- ar-DZ
- ar-EG
- ar-IQ
- ar-JO
- ar-KW
- ar-LB
- ar-LY
- ar-MA
- ar-QM
- ar-QA
- ar-SA
- ar-SD
- ar-SY
- ar-TN
- ar-YE

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
