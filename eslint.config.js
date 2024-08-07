import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import ts_eslint from 'typescript-eslint'

export default ts_eslint.config(
  {
    extends: [js.configs.recommended, ...ts_eslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist'],
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
    }
  },
  {
    ignores: ['src/client/components/ui/*.{ts,tsx}'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    ...reactPlugin.configs['jsx-runtime'].flat
  }
)
