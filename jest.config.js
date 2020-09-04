module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
};
