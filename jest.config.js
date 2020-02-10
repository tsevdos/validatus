module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js)$": "rollup-jest",
  },
  collectCoverageFrom: ["<rootDir>/src/**"],
  moduleFileExtensions: ["js", "json"],
};
