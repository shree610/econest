module.exports = {
  extends: ["stylelint-config-recommended"],
  rules: {
    // Allow Tailwind/PostCSS at-rules
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": [
        "tailwind",
        "apply",
        "variants",
        "responsive",
        "screen",
        "layer"
      ]
    }]
  }
};
