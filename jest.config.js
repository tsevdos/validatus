module.exports = {
  roots: ["<rootDir>/src"],
  verbose: true,
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "json"],
};
