module.exports = {
  "extends": "airbnb-base",
  "plugins": [
      "import"
  ],
  "env": {
    "node": true
  },
  "rules": {
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "always"],
    "max-len": [2, {"code": 140, "tabWidth": 2, "ignoreUrls": true}]
  }
};
