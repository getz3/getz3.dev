import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    ignores: [
      '.nuxt',
      '.output',
      '.vercel',
      '_references',
      '_references/**/*',
      'node_modules',
    ],
  },
  {
    rules: {
      'no-console': 'warn',
      'node/prefer-global/process': ['error', 'always'],
      'no-useless-return': 'off',
    },
  },
  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
    ...eslintPluginBetterTailwindcss.configs.recommended,
    settings: {
      'better-tailwindcss': {
        entryPoint: 'assets/css/tailwind.css',
      },
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs.recommended.rules,
      'better-tailwindcss/no-unknown-classes': 'off',
    },
  },
)
