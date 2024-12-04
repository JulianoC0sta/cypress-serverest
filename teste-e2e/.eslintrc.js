module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "cypress/globals": true,
  },
  extends: ["plugin:prettier/recommended", "plugin:cypress/recommended"],
  plugins: ["cypress"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
