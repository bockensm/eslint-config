module.exports = {
  rules: {
    "arrow-body-style": [ "error", "as-needed" ],
    "arrow-parens": [ "error", "as-needed" ],
    "arrow-spacing": [ "error", {
      before: true, after: true,
    } ],
    "constructor-super": "error",
    "generator-star-spacing": [ "error", {
      before: false, after: true,
    } ],
    "no-class-assign": "error",
    "no-confusing-arrow": [ "error", {
      allowParens: true,
    } ],
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "off",
    "no-new-symbol": "error",
    "no-restricted-exports": [ "error", {
      restrictedNamedExports: [
        // use `export default` to provide a default export
        "default",
        // this will cause tons of confusion when your module is dynamically `import()`ed
        "then",
      ],
    } ],
    "no-restricted-imports": [ "off", {
      paths: [],
      patterns: [],
    } ],
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [ "error", {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    } ],
    "no-var": "error",
    "object-shorthand": "off",
    "prefer-arrow-callback": [ "error", {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    } ],
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": [ "error", "never" ],
    "sort-imports": [ "off", {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ "none", "all", "multiple", "single" ],
    } ],
    "symbol-description": "error",
    "template-curly-spacing": [ "error", "always" ],
    "yield-star-spacing": [ "error", "after" ],
  },
}
