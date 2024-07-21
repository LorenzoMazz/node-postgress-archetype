module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "standard",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: "off",
    semi: "off",
    "space-before-function-paren": "off",
    "no-unused-vars": "warn",
    "comma-dangle": "off",
  },
};
