module.exports = {
  rules: {
    "array-bracket-newline": [ "error", "consistent" ],
    "array-bracket-spacing": [ "error", "always" ],
    "array-element-newline": [ "off", {
      multiline: true, minItems: 3,
    } ],
    "block-spacing": [ "error", "always" ],
    "brace-style": [ "error", "stroustrup" ],
    "camelcase": [
      "error",
      {
        properties: "never",
        ignoreDestructuring: false,
      },
    ],
    "capitalized-comments": [ "off", "never", {
      line: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    } ],
    "comma-dangle": [ "error", "always-multiline" ],
    "comma-spacing": [ "error", {
      before: false, after: true,
    } ],
    "comma-style": [ "error", "last", {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    } ],
    "computed-property-spacing": "off",
    "consistent-this": "off",
    "eol-last": [ "error", "always" ],
    "func-call-spacing": [ "error", "never" ],
    "func-name-matching": [ "off", "always", {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    } ],
    "func-names": "error",
    "func-style": [ "error", "declaration" ],
    "function-call-argument-newline": [ "error", "consistent" ],
    "function-paren-newline": [ "error", "consistent" ],
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": [ "error", "beside" ],
    "indent": [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    // "jsx-quotes": "",
    "key-spacing": [
      "error", {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "keyword-spacing": [ "error", {
      before: true,
      after: true,
      overrides: {
        return: {
          after: true,
        },
        throw: {
          after: true,
        },
        case: {
          after: true,
        },
      },
    } ],
    "line-comment-position": [ "error", {
      position: "above",
    } ],
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "max-depth": [ "error", 4 ],
    "max-len": "off",
    "max-lines-per-function": [ "off", {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    } ],
    "max-lines": [ "off", {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    } ],
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "max-statements": "off",
    "multiline-comment-style": [ "error", "bare-block" ],
    "multiline-ternary": [ "error", "always-multiline" ],
    "new-cap": [ "error", {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [ "Immutable.Map", "Immutable.Set", "Immutable.List" ],
    } ],
    "new-parens": "error",
    "newline-per-chained-call": [ "error", {
      ignoreChainWithDepth: 3,
    } ],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": [ "error", {
      // the list of arithmetic groups disallows mixing `%` and `**` with other arithmetic operators.
      groups: [
        [ "%", "**" ],
        [ "%", "+" ],
        [ "%", "-" ],
        [ "%", "*" ],
        [ "%", "/" ],
        [ "/", "*" ],
        [ "&", "|", "<<", ">>", ">>>" ],
        [ "==", "!=", "===", "!==" ],
        [ "&&", "||" ],
      ],
      allowSamePrecedence: false,
    } ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": [ "error", {
      allowForLoopAfterthoughts: true,
    } ],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-tabs": "off",
    "no-ternary": "error",
    "no-trailing-spaces": [ "error", {
      skipBlankLines: false,
      ignoreComments: false,
    } ],
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": [ "error", {
      defaultAssignment: false,
    } ],
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": [ "error", "beside", {
      overrides: {
      },
    } ],
    "object-curly-newline": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "object-property-newline": [ "error", {
      allowAllPropertiesOnSameLine: true,
    } ],
    "one-var-declaration-per-line": [ "error", "always" ],
    "one-var": [ "error", "never" ],
    "operator-assignment": [ "error", "always" ],
    "operator-linebreak": [ "error", "before", {
      overrides: {
        "=": "none",
      },
    } ],
    "padded-blocks": [ "error", {
      blocks: "never",
      classes: "never",
      switches: "never",
    }, {
      allowSingleLineBlocks: true,
    } ],
    "padding-line-between-statements": [
      "error", {
        blankLine: "always",
        prev: "*",
        next: "function",
      },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "off",
    "quote-props": [ "error", "consistent-as-needed" ],
    "quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "semi-spacing": [ "error", {
      before: false, after: true,
    } ],
    "semi-style": [ "error", "last" ],
    "semi": [ "error", "never" ],
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": [ "error", "never" ],
    "space-in-parens": [ "error", "always" ],
    "space-infix-ops": "error",
    "space-unary-ops": [ "error", {
      words: true,
      nonwords: false,
      overrides: {
      },
    } ],
    "spaced-comment": "off",
    "switch-colon-spacing": [ "error", {
      after: true, before: false,
    } ],
    "template-tag-spacing": [ "error", "always" ],
    "unicode-bom": [ "error", "never" ],
    "wrap-regex": "off",
  },
}
