// eslint-disable-next-line no-undef
module.exports = {
    extends: ["eslint:recommended", "standard-react"],
    plugins: ["import", "react"],
    rules: {
        "linebreak-style": "off",
        "no-unused-vars": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": [0],
        "jsx-quotes": ["warn", "prefer-double"],
        "indent": ["error", 4],
        "quotes": ["warn","double"],
        "max-lines-per-function": ["error", 20],
        "max-statements": ["error", 15],
        "max-depth": ["error", 2],
        "complexity": ["error", 5],
        "no-delete-var": "error",
        "no-var": "error",
        "block-spacing": ["error", "never"],
        "object-curly-spacing": ["error", "never"],
        "semi": ["error", "never"],
        "comma-dangle": ["error", "never"]
    },
    parser: "babel-eslint",
    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es2017: true,
        browser: true
    }
}

