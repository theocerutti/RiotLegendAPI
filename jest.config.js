module.exports = {
    preset: "ts-jest",
    verbose: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    coverageDirectory: ".jest/coverage",
    cacheDirectory: ".jest/cache",
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    setupFiles: ["dotenv/config"],
    testEnvironment: "node",
};
