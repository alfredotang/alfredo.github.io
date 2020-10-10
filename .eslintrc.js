module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'prettier/prettier': 'warn',
        'react-hooks/rules-of-hooks': 'error', // 檢查 Hook 的規則
        'react-hooks/exhaustive-deps': 'warn', // 檢查 effect 的相依性
        'no-console': 'warn',
    },
};
