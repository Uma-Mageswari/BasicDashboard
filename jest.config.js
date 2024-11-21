// jest.config.js
module.exports = {
    testPathIgnorePatterns: [
      "/node_modules/",
      "/src/index.*\\.tsx?$"  // Ignore any file starting with 'index' and ending with .tsx or .ts
    ],
    collectCoverage: true, // Enable code coverage
    coverageReporters: ["text", "html"], // Show coverage in terminal and generate an HTML report
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest" // Use ts-jest to transpile TypeScript files
    },
};
  