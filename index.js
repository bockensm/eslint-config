module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "airbnb-base"
  ],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "array-bracket-spacing": [ "warn", "always" ],
    "array-callback-return": [ "off" ],
    "arrow-body-style": [ "warn", "as-needed" ],
    "arrow-parens": [ "warn", "as-needed" ],
    "brace-style": [ "error", "stroustrup" ],
    "class-methods-use-this": [ "off" ],
    "comma-dangle": [ "warn", "always-multiline" ],
    "computed-property-spacing": [ "off" ],
    "consistent-return": [ "off" ],
    "eqeqeq": [ "warn" ],
    "func-names": [ "error" ],
    "global-require": [ "off" ],
    "import/no-extraneous-dependencies": [ "off" ],
    "import/no-unresolved": [ "off" ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "linebreak-style": [ "off" ],
    "lines-between-class-members": [
      "warn",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "max-len": [ "off" ],
    "no-alert": [ "off" ],
    "no-await-in-loop": [ "error" ],
    "no-console": [
      "error",
      { "allow": [ "warn", "error", "info", "trace", "group", "groupEnd" ] }
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
    "object-curly-spacing": [ "warn", "always" ],
    "object-shorthand": [ "off" ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "function"
      }
    ],
    "prefer-const": [ "warn" ],
    "prefer-destructuring": [ "off" ],
    "prefer-object-spread": [ "off" ],
    "prefer-template": [ "warn" ],
    "quote-props": [ "warn" ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "radix": [ "off" ],
    "semi": [ "error", "never" ],
    "space-before-function-paren": [ "error", "never" ],
    "space-in-parens": [ "warn", "always" ],
    "spaced-comment": [ "off" ],
    "template-curly-spacing": [ "warn", "always" ],
    "vars-on-top": [ "off" ]
  }
}
