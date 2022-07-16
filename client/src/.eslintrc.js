module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'prettier',
        // "./eslintrc-auto-import.json",
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'error',
        'vue/multi-word-component-names': 'off',
    },
}
