module.exports = {
  extends: [
    "airbnb-base",
  ],

  rules: {
    "array-bracket-spacing": [ "error", "always" ],
    "array-callback-return": [ "off" ],
    "arrow-body-style": [ "error", "as-needed" ],
    "arrow-parens": [ "error", "as-needed" ],
    "brace-style": [ "error", "stroustrup" ],
    "class-methods-use-this": [ "off" ],
    "comma-dangle": [ "error", "always-multiline" ],
    "computed-property-spacing": [ "off" ],
    "consistent-return": [ "off" ],
    "eqeqeq": [ "error" ],
    "func-names": [ "error" ],
    "global-require": [ "off" ],
    "import/no-extraneous-dependencies": [ "off" ],
    "import/no-unresolved": [ "off" ],
    "indent": [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "linebreak-style": [ "off" ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "max-len": [ "off" ],
    "no-alert": [ "off" ],
    "no-await-in-loop": [ "error" ],
    "no-console": [
      "error",
      {
        allow: [
          "error",
          "group",
          "groupEnd",
          "info",
          "trace",
          "warn",
        ],
      },
    ],
    "no-loop-func": [ "off" ],
    "no-multiple-empty-lines": "off",
    "no-new": [ "off" ],
    "no-param-reassign": [ "off" ],
    "no-plusplus": [ "off" ],
    "no-restricted-globals": [ "off" ],
    "no-script-url": [ "off" ],
    "no-tabs": [ "off" ],
    "no-undef": [ "off" ],
    "no-underscore-dangle": [ "off" ],
    "no-unused-expressions": [ "off" ],
    "no-unused-vars": [ "off" ],
    "no-use-before-define": [ "off" ],
    "object-curly-spacing": [ "error", "always" ],
    "object-shorthand": [ "off" ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "function",
      },
    ],
    "prefer-const": [ "error" ],
    "prefer-destructuring": [ "off" ],
    "prefer-object-spread": [ "off" ],
    "prefer-template": [ "error" ],
    "quote-props": [ "error", "consistent-as-needed" ],
    "quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "radix": [ "off" ],
    "semi": [ "error", "never" ],
    "space-before-function-paren": [ "error", "never" ],
    "space-in-parens": [ "error", "always" ],
    "spaced-comment": [ "off" ],
    "template-curly-spacing": [ "error", "always" ],
    "vars-on-top": [ "off" ],
  },

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
