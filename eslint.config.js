import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import eslintConfigPrettier from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import ts_eslint from 'typescript-eslint'

export default ts_eslint.config({
  extends: [
    js.configs.recommended,
    ...ts_eslint.configs.recommended,
    reactPlugin.configs['jsx-runtime'].flat,
    reactPlugin.configs['recommended'].flat,
    ...pluginQuery.configs['flat/recommended'],
    eslintConfigPrettier
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'node_modules', 'src/client/components/ui/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2023,
    globals: globals.browser
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
})
