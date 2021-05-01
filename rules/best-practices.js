module.exports = {
  rules: {
    // Best Practices
    "accessor-pairs": "off",
    "array-callback-return": "off",
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    "complexity": [ "off", 11 ],
    "consistent-return": "off",
    "curly": "error",
    "default-case": "off",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-location": "off",
    "dot-notation": [ "error", {
      allowKeywords: true,
    } ],
    "eqeqeq": "error",
    "grouped-accessor-pairs": "off",
    "guard-for-in": "error",
    "max-classes-per-file": [ "error", 1 ],
    "no-alert": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "off",
    "no-div-regex": "off",
    "no-else-return": [ "error", {
      allowElseIf: false,
    } ],
    "no-empty-function": [ "error", {
      allow: [
        "arrowFunctions",
        "functions",
        "methods",
      ],
    } ],
    "no-empty-pattern": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": [ "error", {
      exceptions: [],
    } ],
    "no-implicit-coercion": [ "off", {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    } ],
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": [ "error", {
      allowLoop: false, allowSwitch: false,
    } ],
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [ "off", {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    } ],
    "no-multi-spaces": [ "error", {
      ignoreEOLComments: false,
    } ],
    "no-multi-str": "error",
    "no-new": "off",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "off",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],
    "no-return-assign": [ "error", "always" ],
    "no-return-await": "error",
    "no-script-url": "off",
    "no-self-assign": [ "error", {
      props: true,
    } ],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "off",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-useless-call": "off",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": [
      "off", {
        terms: [
          "todo",
          "fixme",
          "xxx",
        ],
        location: "start",
      },
    ],
    "no-with": "error",
    "prefer-named-capture-group": "off",
    "prefer-promise-reject-errors": [ "error", {
      allowEmptyReject: true,
    } ],
    "prefer-regex-literals": "error",
    "radix": "off",
    "require-await": "error",
    "require-unicode-regexp": "off",
    "vars-on-top": "off",
    "wrap-iife": [ "error",
      "outside",
      {
        functionPrototypeMethods: false,
      } ],
    "yoda": "error",
  },
}