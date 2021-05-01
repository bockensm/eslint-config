module.exports = {
  extends: [
    "./rules/errors",
    "./rules/best-practices",
    "./rules/strict",
    "./rules/variables",
    "./rules/style",
    "./rules/es6",
  ].map( require.resolve ),

  parser: "@typescript-eslint/parser",

  // Copied from github.com/wesbos/eslint-config-wesbos
  parserOptions: {
    ecmaVersion: 2020,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },

  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
}
